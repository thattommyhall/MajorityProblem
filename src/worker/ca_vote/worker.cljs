(ns ca-vote.worker
  (:use [ca-vote.simulation :only [run-sim random-grid]]
        [ca-vote.utils :only [log puts now trace]]
  ))



(log "Running the sim")

(forloop [(i 0) (< i 11) (inc i)]
         (trace (run-sim (random-grid))))






