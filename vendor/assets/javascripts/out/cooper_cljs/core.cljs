(ns cooper-cljs.core
    (:require [reagent.core :as reagent :refer [atom]]
              [secretary.core :as secretary :include-macros true]
              [goog.events :as events]
              [goog.history.EventType :as EventType]
              [ajax.core :refer [GET POST]])
    (:import goog.History))

;; -------------------------
;; Models
(defn fetch-articles []
  (GET "/api/articles.json"
       {:handler handler}))

;; -------------------------
;; Views
(defn index-view [articles]
  [:div  (for [article articles] [article-view article])])

(defn article-view [article]
  [:h4
   [:a {:href (get article "url")} (get article "title")]
   [:small {:class "text-muted"} " (" (get article "feed_title") ")" ]
   [:p [:small {:class "text-muted"} (get article "published_at")]]])

(defn handler [data]
  (reagent/render-component (index-view data) (.getElementById js/document "app")))


;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" [] (fetch-articles))

;; -------------------------
;; History
(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))
;; need to run this after routes have been defined
(hook-browser-navigation!)
