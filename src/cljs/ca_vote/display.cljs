(ns ca-vote.display
  (:use [domina :only [by-id]]
        [ca-vote.utils :only [log puts now trace]])
  (:require [clojure.string :as string]
            [ca-vote.simulation :as sim]
            [ca-vote.simulationold :as simold]
            [shoreleave.remotes.http-rpc :refer [remote-callback]]
            [ca-vote.ajax :refer [GET POST]]
            )
  (:require-macros [shoreleave.remotes.macros :as macros])
  (:use-macros [ca-vote.macros :only [forloop local << >>]]))

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
  (js/setTimeout #(fill_sq x y liveColor context),0))

(defn dead [x y context]
  (js/setTimeout #(fill_sq x y deadColor context),0))

(defn draw-grid [grid]
  (let [board (by-id "voting")
        context (.getContext board "2d")
        width (.-width board)
        height (.-height board)
        ]
    (reset! cell_size (/ (- width (* 2 padding))
                         cells))
    (doseq [y (range cells)
            x (range cells)]
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
    (forloop [(y 0) (< y cells) (inc y)]
             (forloop [(x 0) (< x cells) (inc x)]
                      (if (aget (aget grid y) x)
                        (alive x y context)
                        (dead x y context))))))

(defn draw-loop []
  
  (dotimes [_ 5]
    (trace #(sim/run-sim (sim/strategy-from-genome sim/gkl))))
  ;; (dotimes [_ 5]
  ;;   (trace #(draw-grid (sim/run-sim sim/gkl))))
  (trace #(draw-grid-new (sim/run-sim (sim/strategy-from-genome sim/gkl))))
  ;; (puts (send { 4 :b 5}))
  ;; (puts (send {: 7 :d 2}))
  ;; (puts (send {}))
  ;; (get-sample 200)
  ;; (js/setTimeout #(draw-loop) 1)
  )

(defn start-worker []
  (log "Starting worker")
  (js/Worker. "js/worker.js"))

(defn ^:export draw []
  (dotimes [_ 1]
    (let [worker (start-worker)]
      (.addEventListener worker 
                         "message" 
                         (fn [e]
                           (puts "wk: " (.-data e))))))
  
  
  (draw-loop)
  (trace #(log (sim/fitness sim/gkl)))
  )

