(ns ca-vote.worker
  (:require [ca-vote.simulation :as sim]
            [ca-vote.ajax :refer [GET POST]]))

(declare run)

(def id "")

(defn process-sample [sample]
  (doseq [genome sample]
    (let [fitness (sim/fitness genome)]
      (POST (+ "/results/" id "/" genome "/" fitness) "")
      (js/setTimeout run 0))))

(defn ^:export run [] 
  (GET "/sample" (fn [sample]
                   (let [response (.parse js/JSON sample)
                         new-id (.-id response)
                         sample (.-sample response)
                         ]
                     (set! id new-id) 
                     (process-sample sample)
                     ))))

(run)
  
                
