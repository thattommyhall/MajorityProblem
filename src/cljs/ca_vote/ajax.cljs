(ns ca-vote.ajax)

(defn ^:export GET [url callback]
  (let [request-obj (js/XMLHttpRequest.)]
    (.open request-obj "GET" url true)
    
    (set! (.-onreadystatechange request-obj)
          (fn []
            (if (and (= (.-readyState request-obj) 4)
                     (= (.-status request-obj) 200))
              (callback (.-responseText request-obj)))))
    (.send request-obj)
    ))

(defn ^:export POST [url data]
  (let [request-obj (js/XMLHttpRequest.)]
    (.open request-obj "POST" url true)
    (.send request-obj data)
    ))
