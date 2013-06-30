(defproject ca-vote "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :min-lein-version "2.1.2"

  :source-paths ["src/clj"]

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [compojure "1.1.5"]
                 [hiccup "1.0.3"]
                 [domina "1.0.2-SNAPSHOT"]
                 [org.clojure/data.json "0.2.2"]
                 ]

  :plugins [[lein-cljsbuild "0.3.2"]
            [lein-ring "0.8.5"]]

  :ring {:handler ca-vote.core/app}

  :cljsbuild {:builds {
                       :dev
                       {:source-paths ["src/brepl" "src/cljs"]
                        :compiler {:output-to "resources/public/js/dev.js"
                                   :optimizations :whitespace
                                   :pretty-print true}}
                       
                       :prod
                       {:source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/prod.js"
                                   :optimizations :advanced}}

                       :worker
                       {:source-paths ["src/worker"]
                        :compiler {:output-to "resources/public/js/worker.js"
                                   :optimizations :advanced
                                   ;; :optimizations :whitespace
                                   :pretty-print true
                                   }}
                        
                        :cli
                       {:source-paths ["src/cli"]
                        :compiler {:output-to "resources/public/js/cli.js"
                                   :optimizations :advanced
                                   :pretty-print true
                                   }}
                       
                       }})

