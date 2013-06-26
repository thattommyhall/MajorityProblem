(ns ca-vote.core
  (:use [compojure.core]
        [hiccup.core])
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [shoreleave.middleware.rpc :refer [defremote wrap-rpc]]))

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

(declare merge-results)
  
(defroutes app-routes
  (GET "/" []
       (for-env "dev"))
  (GET "/prod" []
       (for-env "prod"))  
  (route/resources "/")
  (route/not-found "Page not found"))

(def handler
  (handler/site app-routes))

(def app (-> (var handler)
             (wrap-rpc)
             (handler/site)))

(defn random-genome []
  (doall (for [_ (range size)]
           (if (> (rand) 0.5)
             true
             false))))


(def population (agent (apply sorted-map (interleave (take 100 (repeatedly #(/ (rand 1000))))
                                                     (repeatedly random-genome)))))

(defremote send-results [results]
  (send population merge results)
  nil)

(defn take-until-sum 
  ([map total] (take-until-sum map total 0))
  ([map total so-far]
     (if (< (+ so-far (ffirst map)) total)
       (recur (rest map) total (+ so-far (ffirst map)))
       (second (first map)))))
     
(defn sample [population total]
  (let [position (rand total)]
    (take-until-sum population position)))
    
(defremote get-sample [n]
  (let [population @population
        total (reduce + (keys population))]
    (doall (for [_ (range n)]
             (sample population total)))))

