(ns ca-vote.display
  (:use [domina :only [by-id]]
        [ca-vote.utils :only [log puts now trace]])
  (:require [clojure.string :as string]
            [ca-vote.simulation :as sim]
            [ca-vote.simulationold :as simold]
            [shoreleave.remotes.http-rpc :refer [remote-callback]]
            )
  (:require-macros [shoreleave.remotes.macros :as macros])
  (:use-macros [ca-vote.macros :only [forloop local << >>] ]))

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

(defn draw-grid [grid]
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

(defn draw-grid-new [grid]
  (let [board (.getElementById js/document "voting")
        context (.getContext board "2d")
        width (.-width board)
        height (.-height board)
        ]
    (reset! cell_size (/ (- width (* 2 padding))
                         cells))
    (forloop [(x 0) (< x cells) (inc x)]
             (forloop [(y 0) (< y cells) (inc y)]
                      (if (aget (aget grid y) x)
                        (alive x y context)
                        (dead x y context))))))



(defn send [results]
  (puts "sending" results)
  (remote-callback :send-results
                   [results]
                   (fn [n]
                     (puts "sent: " results ", got: " n))
                   ))

(defn get-samples []
  (remote-callback :get-samples
                   []
                   (fn [s]
                     (puts s))))

(defn draw-loop []
  
  ;; (dotimes [_ 5]
  ;;   (trace #(sim/run-sim sim/gkl)))
  ;; (dotimes [_ 5]
  ;;   (trace #(draw-grid (sim/run-sim sim/gkl))))
  (trace #(draw-grid-new (sim/run-sim sim/gkl)))
  (puts (send {:a 4 :b 5}))
  (puts (send {:b 7 :d 2}))
  (puts (send {}))
  (get-samples)
  ;; (js/setTimeout #(draw-loop) 1)
  )

(defn ^:export draw []
  (let [test (sim/run-sim sim/gkl)]
    (draw-loop)
    
    ;; (draw-grid-new test)
    ;; (log (sim/count-live (aget test 0)))
    ;; (log (sim/count-live (aget test 100)))
    ;; (log (sim/success? test))
  ))

