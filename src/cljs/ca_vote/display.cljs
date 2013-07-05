(ns ca-vote.display
  (:use [domina :only [by-id set-text!]]
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
(def cells 100)
(def p 0.5)

(defn fill_sq [x y colour cell_size context]
  (set! (.-fillStyle context) colour)
  (set! (.-strokeStyle context) colour)
  (.fillRect context
             (+ (* x cell_size) padding)
             (+ (* y cell_size) padding)
             cell_size
             cell_size)
  (.strokeRect context
               (+ (* x cell_size) padding)
               (+ (* y cell_size) padding)
               cell_size
               cell_size))

(defn new-canvas [width height]
  (let [canvas  (.createElement js/document "canvas")]
    (set! (.-width canvas) width)
    (set! (.-height canvas) width)
    canvas))


(defn alive [x y cell_size context]
  (fill_sq x y liveColor cell_size context))

(defn dead [x y cell_size context]
  (fill_sq x y deadColor cell_size context))

;; (defn draw-grid [grid]
;;   (let [board (by-id "voting")
;;         context (.getContext board "2d")
;;         width (.-width board)
;;         height (.-height board)
;;         ]
;;     (reset! cell_size (/ (- width (* 2 padding))
;;                          cells))
;;     (doseq [y (range cells)
;;             x (range cells)]
;;       (if (aget (aget grid y) x)
;;         (alive x y context)
;;         (dead x y context)))))

(defn draw-grid [canvas-id grid]
  (let [board (.getElementById js/document canvas-id)
        context (.getContext board "2d")
        width (.-width board)
        height (.-height board)
        temp-canvas (new-canvas width height)
        temp-context (.getContext temp-canvas "2d")
        cell_size (/ (- width (* 2 padding))
                     cells)]
    (forloop [(y 0) (< y cells) (inc y)]
             (forloop [(x 0) (< x cells) (inc x)]
                      (if (aget (aget grid y) x)
                        (alive x y cell_size temp-context)
                        (dead x y cell_size temp-context))))
    (.drawImage context temp-canvas 0 0)))

(def stats (atom {}))

(def id (atom ""))

(defn get-stats []
  (GET "/stats" (fn [s]
                  (reset! stats (js->clj (.parse js/JSON s)))
                  ;; (puts @stats)
                  (set-text! (by-id "fitness") (get @stats "fittest-fitness"))
                  (set-text! (by-id "fittest-dna") (get @stats "fittest-genome") )
                  )))

(defn check-id []
  (cond (= @id "")
        (reset! id (@stats "id"))
        
        (not= (@stats "id")
              @id)
        (do (log "wrong id")
            (reload-page))))

(defn ^:export draw [canvas-id genome]
  (let [f #(draw-grid canvas-id
                      (sim/run-sim
                       (sim/strategy-from-genome genome)
                       0.5))]
    (js/setTimeout f 500)
    (js/setInterval f 5000)))

(defn draw-fittest []
  (let [fittest (get @stats "fittest-genome")]
    (draw-grid "voting"
               (sim/run-sim
                (sim/strategy-from-genome 
                 fittest)))))

(defn start-worker []
  (log "Starting worker now")
  (js/Worker. "/js/worker.js"))

(defn reload-page []
  ;; (log "reloading page")
  (.reload js/location))

(defn ^:export init []
  
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
  (js/setInterval check-id 3000)
  (js/setInterval reload-page 6000000)
  (js/setTimeout draw-fittest 700)
  (js/setInterval #(trace (fn [] (draw-fittest))) 2500)
  )
