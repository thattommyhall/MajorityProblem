(ns ca-vote.worker
  (:require [ca-vote.simulation :as sim]
            [ca-vote.ajax :refer [GET POST]]))

(defn log [message]
  (js/postMessage message))

(log "Inside worker")

(defn process-sample [sample]
  (doseq [genome sample]
    (let [result (make-array 0)
          fitness (sim/fitness genome)
          ]
      ;; (log genome)
      (.push result genome)
      (.push result fitness)
      (POST (+ "/results/" genome "/" fitness) "")
      (js/setTimeout run 0))))

(defn ^:export run [] 
  (GET "/sample" (fn [sample]
                   (process-sample (.parse js/JSON sample)))))

(run)
  
                
