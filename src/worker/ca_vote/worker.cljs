(ns ca-vote.worker
  (:use [ca-vote.simulation :only [run-sim random-grid]]
        [ca-vote.utils :only [log puts now]]
  ))


(run-sim random-grid)








