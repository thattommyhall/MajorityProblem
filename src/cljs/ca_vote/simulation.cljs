(ns ca-vote.simulation
  (:use-macros [ca-vote.macros :only [forloop local << >>] ]))

(def cells 101)

(defn random-grid []
  (let [result (make-array cells)
        ]
    (forloop [(i 0) (< i cells) (inc i)]
             (aset result i (> 0.5 (rand))))
    result))

(defn normalise [n]
  (if (< n 0)
    (+ n cells)
    (rem n cells)))

(defn alive? [pos grid] 
  (let [current (aget grid pos)
        direction (if-not current
                    -1
                    1)]
    (>= (+ (if (aget grid pos) 1 0)
           (if (aget grid (+ pos direction))
             1 
             0)
           (if (aget grid (+ pos (* 3 direction)))
             1
             0))
        2)))


(defn step [grid]
  (let [next (make-array cells)]
    (forloop [(x 0) (< x cells) (inc x)]
      (if (alive? x grid)
        (aset next x true)
        (aset next x false)))
    next))

(defn run-sim [init]
  (let [result (make-array cells)]
    (aset result 0 init)
    (forloop [(i 1) (< i cells) (inc i)]
      (aset result i (step (aget result (dec i)))))
    result))
