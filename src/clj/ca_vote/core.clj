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

(def population (agent {}))

(defremote send-results [results]
  (send population merge results))

(defremote get-samples []
  @population)
