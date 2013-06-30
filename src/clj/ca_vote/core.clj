(ns ca-vote.core
  (:use [compojure.core]
        [hiccup.core])
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [shoreleave.middleware.rpc :refer [defremote wrap-rpc]]
            [clojure.data.json :as json]
            [clojure.string :as string]))

(declare send-results send-result get-sample random-genome)

(defn for-env [env]
  (let [onload "ca_vote.display.draw();"]
    (html [:head {:title env}                           
           [:script {:src (str "js/" env ".js")}]
           [:link {:rel "stylesheet" :href "/css/style.css"}]]
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

(def population 
  (agent (zipmap (repeatedly random-genome)                  
                 (take 1000 (repeat 5)))))
  
(defroutes app-routes
  (GET "/" []
       (for-env "dev"))
  (GET "/prod" []
       (for-env "prod"))
  (GET "/sample" []
       (json/write-str (get-sample 50)))
  (GET "/pop" []
       @population)
  (POST "/results/:genome/:fitness" [genome fitness]
        (send-result genome fitness)
        "meh")
        
  (route/resources "/")
  (route/not-found "Page not found"))

(def handler
  (handler/site app-routes))

(def app (-> (var handler)
             (wrap-rpc)
             (handler/site)))

(defn send-results [results]
  (send population merge results)
  nil)

(defn send-result [genome fitness]
  (println genome fitness)
  (send population assoc genome (Integer/parseInt fitness))
  (println (count @population))
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
    (map mutate (apply str 
                       (concat (take split-point g1)
                               (drop split-point g2))))))

(defn get-sample [n]
  (let [population @population
        total (reduce + (vals population))]
    (doall (for [_ (range n)]
             (breed (sample population total)
                    (sample population total))))))


  
