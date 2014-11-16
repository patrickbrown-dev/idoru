// Compiled by ClojureScript 0.0-2156
goog.provide('foo');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('ajax.core');
foo.handler = (function handler(response){return console.log([cljs.core.str(response)].join(''));
});
foo.error_handler = (function error_handler(p__5462){var map__5464 = p__5462;var map__5464__$1 = ((cljs.core.seq_QMARK_.call(null,map__5464))?cljs.core.apply.call(null,cljs.core.hash_map,map__5464):map__5464);var status_text = cljs.core.get.call(null,map__5464__$1,new cljs.core.Keyword(null,"status-text","status-text",4371493274));var status = cljs.core.get.call(null,map__5464__$1,new cljs.core.Keyword(null,"status","status",4416389988));return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
ajax.core.GET.call(null,"/articles",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),foo.handler,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),foo.error_handler], null));
