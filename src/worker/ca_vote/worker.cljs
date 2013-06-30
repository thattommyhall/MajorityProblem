(ns ca-vote.worker
  (:require [ca-vote.simulation :as sim]
            [ca-vote.ajax :refer [GET POST]]))

;; (defn log [message]
;;   (js/postMessage message))

;; (log "Inside worker")

(defn process-sample [sample]
  (doseq [genome sample]
    (let [fitness (sim/fitness genome)]
      (POST (+ "/results/" genome "/" fitness) "")
      (js/setTimeout run 0))))

(defn ^:export run [] 
  (GET "/sample" (fn [sample]
                   (process-sample (.parse js/JSON sample)))))


(run)
  
                
