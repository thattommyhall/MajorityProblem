(ns ca-vote.core
  (:use [compojure.core]
        [hiccup.core]
         )
  (:require [compojure.handler :as handler]
            [compojure.route :as route]))

(defn for-env [env]
  (let [onload (str "ca_vote.display.draw();" 
                    ;; (if (= env "dev")
                    ;; "ca_vote.connect.start_repl()")
                    )]
  (html [:head {:title env}                           
         [:script {:src (str "js/" env ".js")}]
         [:body {:onload onload}]
         [:canvas#voting {:width "800" :height "800"}]])))  

(defroutes app-routes
  (GET "/:env" [env]
       (for-env env))
  (route/resources "/")
  (route/not-found "Page not found"))

(def handler
  (handler/site app-routes))
