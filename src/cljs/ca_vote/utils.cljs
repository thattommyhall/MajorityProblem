(ns ca-vote.utils
  (:require [clojure.string :as string]))

(defn ^:export now []
  (.getTime (js/Date.)))

(defn puts [& message]
  (.log js/console (string/join " " message)))

(defn log [object]
  (.log js/console object))

(defn trace [f]
  (let [start (now)]
    (f)
  
    (puts "took" (- (now) start))
    ))
