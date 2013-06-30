(ns ca-vote.worker
  (:require [ca-vote.simulation :as sim]
            [ca-vote.ajax :refer [GET POST]]))

(defn log [message]
  (js/postMessage message))

(log "Inside worker")

(def population (make-array 200))

(defn process-sample [sample]

(GET "/sample" (fn [sample]
                 (process-sample (.parse js/JSON sample))))
                
