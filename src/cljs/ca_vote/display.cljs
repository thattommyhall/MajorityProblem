(ns ca-vote.display
  (:use [domina :only [by-id value]])
  (:require [clojure.string :as string]
            [ca-vote.simulation :as sim]))

(defn ^:export now []
  (.getTime (js/Date.)))

(defn puts [& message]
  (.log js/console (string/join " " message)))

(defn log [object]
  (.log js/console object))

(def line_colour "#cdcdcd")
(def background "#eee")
(def liveColor "#666")
(def deadColor "#eee")
(def padding 0) 
(def cells 101)
(def cell_size (atom 0))
(def p 0.5)

(defn fill_sq [x y colour context]
  (set! (.-fillStyle context) colour)
  (set! (.-strokeStyle context) colour)
  (.fillRect context
             (+ (* x @cell_size) padding)
             (+ (* y @cell_size) padding)
             @cell_size
             @cell_size)
  (.strokeRect context
               (+ (* x @cell_size) padding)
               (+ (* y @cell_size) padding)
               @cell_size
               @cell_size))

(defn alive [x y context]
  (fill_sq x y liveColor context))

(defn dead [x y context]
  (fill_sq x y deadColor context))

(defn ^:export draw-grid [grid]
  (let [board (by-id "voting")
        context (.getContext board "2d")
        width (.-width board)
        height (.-height board)
        ]
    (reset! cell_size (/ (- width (* 2 padding))
                         cells))
    (doseq [x (range cells)
            y (range cells)]
      (if (aget (aget grid y) x)
        (alive x y context)
        (dead x y context)))))

(defn trace [f]
  (let [start (now)]
    (f)
  
    (puts "took" (- (now) start))
    ))

(defn ^:export draw []
  (log (count (sim/random-grid)))
  (let [init (sim/random-grid)]

    ;; (time #(sim/run-sim init))
    ;; (time #
    (trace (fn []
            (draw-grid (sim/run-sim init))))

    )
  
)
      
