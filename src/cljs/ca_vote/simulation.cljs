(ns ca-vote.simulation
  (:use-macros [ca-vote.macros :only [forloop local << >>] ])
  (:require [ca-vote.utils :refer [log]])
  ;; (:use [ca-vote.utils :only [log puts]])
  )

(def cells 101)

(defn count-live [row]
  (let [count (local 0)]
    (forloop [(i 0) (< i (.-length row)) (inc i)]
             (if (aget row i)
               (>> count (inc (<< count)))))
    (<< count)))

(defn success? [grid]
  (let [l (.-length grid)
        first (aget grid 0)
        last (aget grid (dec l))
        first-count (count-live first)
        last-count (count-live last)]
    (if (< first-count (/ l 2))
      (= 0 last-count)
      (= l last-count))))

(defn random-grid []
  (let [p (rand)
        result (make-array cells)
        ]
    (forloop [(i 0) (< i cells) (inc i)]
             (aset result i (> p (rand))))
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

;; (def gkl
;;   (let [g (make-array 128)]
;;     (doseq [l3 [0 1]
;;             l2 [0 1]
;;             l1 [0 1]
;;             c [0 1]
;;             r1 [0 1]
;;             r2 [0 1]
;;             r3 [0 1]]
;;       (aset g
;;             (+ (* 64 l3)
;;                (* 32 l2)
;;                (* 16 l1)
;;                (* 8 c)
;;                (* 4 r1)
;;                (* 2 r2)
;;                (* 1 r3))
            
;;             (if (= c 1)
;;               (>= (+ c r1 r3) 2)
;;               (>= (+ c l1 l3) 2) 
;;               )))
;;     g))

(def gkl "00000000010111110000000001011111000000000101111100000000010111110000000001011111111111110101111100000000010111111111111101011111")

(defn strategy-from-genome [genome]
  (fn [pos grid]
    (let [l3 (aget grid (normalise (- pos 3)))
          l2 (aget grid (normalise (- pos 2)))
          l1 (aget grid (normalise (- pos 1)))
          c  (aget grid pos)
          r1 (aget grid (normalise (+ pos 1)))
          r2 (aget grid (normalise (+ pos 2)))
          r3 (aget grid (normalise (+ pos 3)))
          idx (+ (* 64 l3)
                 (* 32 l2)
                 (* 16 l1)
                 (* 8 c)
                 (* 4 r1)
                 (* 2 r2)
                 (* 1 r3))]
      (= "1" (aget genome idx)))))
      
(defn step [grid alive?]
  (let [next (make-array cells)]
    (forloop [(x 0) (< x cells) (inc x)]
             (if (alive? x grid)
               (aset next x true)
               (aset next x false)))
    next))

(defn run-sim [strategy]
  (let [result (make-array cells)
        init (random-grid)
        ]
    (aset result 0 init)
    (forloop [(i 1) (< i cells) (inc i)]
             (aset result i (step (aget result (dec i)) strategy)))
    result))

(defn fitness [genome]
  (let [strategy (strategy-from-genome genome)]
    ;; (log strategy)
    (count (filter success? (take 100 (repeatedly #(run-sim strategy)))))))

