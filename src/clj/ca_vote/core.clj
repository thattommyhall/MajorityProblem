(ns ca-vote.core
  (:use [compojure.core]
        [hiccup.core])
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.util.response :refer [header]]
            [clojure.data.json :as json]
            [clojure.string :as string]))

(declare send-results send-result get-sample random-genome sample)

(defn for-env [env]
  (let [onload "ca_vote.display.draw();"]
    (html [:head {:title env}                           
           [:script {:src (str "js/" env ".js")}]
           [:link {:rel "stylesheet" :href "css/style.css"}]]
          [:body {:onload onload}
           [:canvas#voting {:width "800" :height "800"}]
           [:div#stats 
            "Workers:"
            [:span#workers 5]
            "Fitness:"
            [:span#fitness 99]
            "Runtime:"
            [:span#fitness 99]
            ]]
          )))

(def size 128)

(defn random-genome []
  (apply str (for [_ (range size)]
               (if (> (rand) 0.5)
                 "1"
                 "0"))))

(defn allow-co [handler]
  (fn [request]
    (let [response (handler request)]
      (assoc-in response [:headers "Access-Control-Allow-Origin"] "*"))))


(defn allow [handler]
  (fn [request]
    (let [response (handler request)]
      (assoc-in response [:headers "Access-Control-Allow-Headers"] "Origin, X-Requested-With, Content-Type, Accept"))))

(def population 
  (agent (zipmap (repeatedly random-genome)                  
                 (take 100 (repeat 50)))))

(defroutes app-routes
  (GET "/" []
       (for-env "prod"))
  (GET "/dev" []
       (for-env "dev"))
  (GET "/sample" []
       (json/write-str (get-sample 50)))
  (GET "/pop" []
       @population)
  (POST "/results/:genome/:fitness" [genome fitness]
        (send-result genome fitness)
        "meh")
  (GET "/stats" []
       (let [population @population
             fittest-genome (apply max-key population (keys population))
             fittest-fitness (population fittest-genome)]
         (json/write-str {"population_size" (count population)
                          "fittest" { "genome" fittest-genome
                                      "fitness" fittest-fitness }
                          "average_fitness" (/ (reduce + (vals population))
                                               (count population))})
         ))
  
  (route/resources "/")
  (route/not-found "Page not found"))

(def handler
  (handler/site app-routes))

(def app (-> (var handler)
             (allow-co)
             (allow)
             (handler/site)))

(defn send-results [results]
  (send population merge results)
  nil)

(defn shrink-population [n]
  (send population (fn [population]
                     (let [total (reduce + (vals population))]
                       (reduce (fn [acc next]
                                 (assoc acc next (population next)))
                               {}
                               (take n (repeatedly #(sample population total ))))))))

(defn send-result [genome fitness]
  (println genome fitness)
  ;; (println (count @population))
  (send population assoc genome (Integer/parseInt fitness))
  (if (> (count @population) 300)
    (shrink-population 100))
  nil)


(defn take-until-sum 
  ([map total] (take-until-sum map total 0))
  ([map total so-far]
     (let [current-fitness (second (first map))]
       (if (< (+ so-far current-fitness) total)
         (recur (rest map) total (+ so-far current-fitness))
         (ffirst map)))))
     
(defn sample [population total]
  (let [position (rand total)]
    (take-until-sum population position)))

(defn mutate [c]
  (if (< (rand) 0.001)
    (if (= c \0) \1 \0)
    c))

(defn breed [g1 g2]
  (let [split-point (Math/floor (rand 128))]
    (apply str (map mutate (concat (take split-point g1)
                                   (drop split-point g2))))))

(defn get-sample [n]
  (let [population @population
        total (reduce + (vals population))]
    (doall (for [_ (range n)]
             (breed (sample population total)
                    (sample population total))))))


  
