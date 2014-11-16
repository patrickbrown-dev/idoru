(ns audrey.core
  (:require [ajax.core :as ajax]))

(defn handler [response]
  (.log js/console (str response)))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(ajax/GET "/articles" {;:params {:page "foo"}
                  :handler handler
                  :error-handler error-handler})
