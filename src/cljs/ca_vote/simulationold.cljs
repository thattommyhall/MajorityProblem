(ns ca-vote.simulationold)

(def cells 101)

(defn random-grid []
  (let [result (make-array cells)]
    (doseq [x (range cells)]
      (aset result x (> 0.5 (rand))))
    result))

(defn normalise [n]
  (if (< n 0)
    (+ n cells)
    (rem n cells)))

(defn alive? [pos grid] 
  (let [current (aget grid pos)
        deltas (if-not current
                 [0 -1 -3]
                 [0 1 3])
        considered (map #(nth grid (normalise (+ pos %))) deltas)]
    (>= (count (filter true? considered))
        2)))

(defn step [grid]
  (let [width (.-length grid)
        next (make-array width)]
    (doseq [x (range width)]
      (if (alive? x grid)
        (aset next x true)
        (aset next x false)))
    next))

(defn run-sim [init]
  (let [result (make-array cells)]
    (aset result 0 init)
    (doseq [i (range 1 cells)]
      (aset result i (step (aget result (dec i)))))
    result))
