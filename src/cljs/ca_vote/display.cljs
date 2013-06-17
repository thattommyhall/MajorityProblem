(ns ca-vote.display
  (:use [domina :only [by-id value]]))

(defn ^:export now []
  (.getTime (js/Date.)))
  
(defn log [& message]
  (.log js/console (str message)))

(def line_colour "#cdcdcd")
(def background "#eee")
(def liveColor "#666")
(def deadColor "#eee")
(def padding 0)
(def cells 301)
(def cell_size (atom 0))
(def p 0.5)
(def start (atom nil))
(def end (atom nil))

(defn normalise [n]
  (if (< n 0)
    (+ n cells)
    (rem n cells)))

(defn alive? [pos grid]
  (let [current (get grid pos)
        deltas (if-not current
                 [0 -1 -3]
                 [0 1 3])
        considered (map #(nth grid (normalise (+ pos %))) deltas)]
    ;; (log (count (filter true? considered)))
    (>= (count (filter true? considered))
       2)))
        

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

(defn ^:export draw []
  (reset! start (now))
  (let [board (by-id "voting")
        context (.getContext board "2d")
        width (.-width board)
        height (.-height board)
        grid (atom (vec (take cells (repeatedly #(vec (take cells (repeat nil)))))))
        ]
    (reset! cell_size (/ (- width (* 2 padding))
                         cells))
    (doseq [x (range cells)]
      (if (> (rand) p)
        (do (alive x 0 context)
            (swap! grid assoc-in [0 x] true))
        (do (dead x 0 context)
            (swap! grid assoc-in [0 x] false))))
    ;; (log grid)
    (doseq [y (range 1 cells)
            x (range cells)]
      ;; (log grid)
      (if (alive? x (nth @grid (dec y)))
        (do (swap! grid assoc-in [y x] true)
            (alive x y context))
        (do (swap! grid assoc-in [y x] false)       
            (dead x y context))))
    (log (- (now) @start))
    ;; (alive 0 1 context)
    ;; (dead 2 2 context)
    ))



      

    
  
