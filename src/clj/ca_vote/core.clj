(ns ca-vote.core
  (:use [compojure.core]
        [hiccup.core]
         )
  (:require [compojure.handler :as handler]
            [compojure.route :as route]))

(defn from-layout [title content]
  (html [:head {:title title}
         [:script {:src "js/dev.js"}]
         content]))

(defroutes app-routes
  (GET "/" []
       (from-layout "Display" 
                    [:body {:onload "ca_vote.display.draw()"}
                     [:canvas#voting {:width "800" :height "800"}]]))
  (route/resources "/")
  (route/not-found "Page not found"))

(def handler
  (handler/site app-routes))
