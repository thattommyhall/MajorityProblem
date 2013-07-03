(ns ca-vote.core
  (:use [compojure.core]
        [hiccup.core])
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.util.response :refer [header]]
            [clojure.data.json :as json]
            [clojure.string :as string]))

(declare send-results send-result get-sample random-genome sample)


(def tweet-this "<a href=\"https://twitter.com/share\" class=\"twitter-share-button\" data-url=\"http://bit.ly/14On0mb\" data-text=\"Evolving automata to solve the #MajorityProblem http://bit.ly/14Omu7C with @thattommyhall, join me at\" data-dnt=\"true\">Tweet</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>")

(def fork-me "<a href=\"https://github.com/thattommyhall/MajorityProblem\" target=\"_gh\"\"><img style=\"position: absolute; top: 0; right: 0; border: 0;\" src=\"https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png\" alt=\"Fork me on GitHub\" ></a>")

(defn for-env [env]
  (let [onload "ca_vote.display.draw();"]
    (html [:head {:title "Majority Problem"}
           [:script {:src (str "js/" env ".js")}]
           [:script "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                     (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                     m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                     })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

                     ga('create', 'UA-42209406-1', 'thattommyhall.com');
                     ga('send', 'pageview');"]
           [:link {:rel "stylesheet" :href "css/style.css"}]]
          [:body {:onload onload}
           [:h1 "Majority Problem"]
           fork-me
           [:div tweet-this]
           [:p "Please check out " 
            [:a {:href "http://bit.ly/14Omu7C" :target "_"} "Wikipedia"] 
            " to better understand what is going on here"]
           [:canvas#voting {:width "600" :height "600"}]
           [:div#stats 
            "Fitness:"
            [:span#fitness 99]
            ]
           
           [:div#fittest-dna "11111111111111111111111111"]
           
           [:a {:href "http://brightbox.com?thattommyhall" :target "_bb"}
            [:img {:src "http://brightbox.com/images/misc/logo.png"}]]
           [:p "Hosted on Brightbox"]
           ]
          ))
)

(def size 128)

(defn random-genome []
  (apply str (for [_ (range size)]
               (if (> (rand) 0.5)
                 "1"
                 "0"))))

(defn allow-co [handler]
  (fn [request]
    (let [response (handler request)]
      (assoc-in response [:headers "Access-Control-Allow-Origin"] "*"))))

(defn new-run-id []
  (apply str (take 10 (repeatedly #(rand-nth "abcdefghijklmnopqrstuvwxyz0123456789")))))

(def run-id (atom (new-run-id)))

(defn reset-run-id []
  (reset! run-id (new-run-id)))

(defn allow [handler]
  (fn [request]
    (let [response (handler request)]
      (assoc-in response [:headers "Access-Control-Allow-Headers"] "Origin, X-Requested-With, Content-Type, Accept"))))

(def population 
  (agent (zipmap (repeatedly random-genome)                  
                 (take 100 (repeat 1)))))

(defroutes app-routes
  (GET "/" []
       (for-env "dev"))
  (GET "/prod" []
       (for-env "prod"))
  (GET "/dev" []
       (for-env "dev"))
  (GET "/sample" []
       (json/write-str {"id" @run-id
                        "sample" (get-sample 10)}))
  (GET "/pop" []
       @population)
  (POST "/results/:id/:genome/:fitness" [id genome fitness]
        (if (= id @run-id)
          (send-result genome fitness))
        "meh")
  (GET "/stats" []
       (let [population @population
             fittest-genome (apply max-key population (keys population))
             fittest-fitness (population fittest-genome)]
         (json/write-str {"population_size" (count population)
                          "fittest" { "genome" fittest-genome
                                      "fitness" fittest-fitness }
                          "average_fitness" (/ (reduce + (vals population))
                                               (count population))
                          "id" @run-id})
         ))
  
  (route/resources "/")
  (route/not-found "Page not found"))

(def handler
  (handler/site app-routes))

(def app (-> (var handler)
             (allow-co)
             (allow)
             (handler/site)))


(defn send-results [results]
  (send population merge results)
  nil)

(defn shrink-population [n]
  (send population (fn [population]
                     (let [total (reduce + (vals population))]
                       (reduce (fn [acc next]
                                 (assoc acc next (population next)))
                               {}
                               (take n (repeatedly #(sample population total ))))))))

(defn send-result [genome fitness]
  (println genome fitness)
  ;; (println (count @population))
  (send population assoc genome (Integer/parseInt fitness))
  (if (> (count @population) 300)
    (shrink-population 100))
  nil)


(defn take-until-sum 
  ([map total] (take-until-sum map total 0))
  ([map total so-far]
     (let [current-fitness (second (first map))]
       (if (< (+ so-far current-fitness) total)
         (recur (rest map) total (+ so-far current-fitness))
         (ffirst map)))))
     
(defn sample [population total]
  (let [position (rand total)]
    (take-until-sum population position)))

(defn mutate [c]
  (if (< (rand) 0.001)
    (if (= c \0) \1 \0)
    c))

(defn breed [g1 g2]
  (let [split-point (Math/floor (rand 128))]
    (apply str (map mutate (concat (take split-point g1)
                                   (drop split-point g2))))))

(defn get-sample [n]
  (let [population @population
        total (reduce + (vals population))]
    (doall (for [_ (range n)]
             (breed (sample population total)
                    (sample population total))))))

