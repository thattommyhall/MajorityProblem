(ns ca-vote.display
  (:use [domina :only [by-id]]
        [ca-vote.utils :only [log puts now trace]])
  (:require [clojure.string :as string]
            [ca-vote.simulation :as sim]
            [ca-vote.simulationold :as simold]
            [ca-vote.ajax :refer [GET POST]]
            )
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

(def stats (atom {}))

(def id "")

(defn get-stats []
  (GET "/stats" (fn [s]
                  (reset! stats (.parse js/JSON s)))))

(defn check-id []
  (cond (= id "")
        (set! id (.-id @stats))
        
        (not= (.-id @stats)
              id)
        (do (log "wrong id")
            (reload-page))))

(defn draw-fittest []
  (let [fittest (.-genome (.-fittest @stats))]
    (trace #(draw-grid-new (sim/run-sim
                            (sim/strategy-from-genome 
                             fittest))))))

(defn start-worker []
  (log "Starting worker")
  (js/Worker. "js/worker.js"))

(defn reload-page []
  (log "reloading page")
  (.reload js/location))

(defn ^:export draw []
  (get-stats)
  (dotimes [_ 5]
    (trace #(sim/run-sim (sim/strategy-from-genome sim/gkl))))
  (dotimes [_ 1]
    (let [worker (start-worker)]
      (.addEventListener worker 
                         "message" 
                         (fn [e]
                           (puts "wk: " (.-data e))))))
  
  (js/setInterval get-stats 5000)
  (js/setInterval check-id 5000)
  (js/setInterval reload-page 6000000)
  (js/setTimeout draw-fittest 500)
  (js/setInterval draw-fittest 4000)
  )


