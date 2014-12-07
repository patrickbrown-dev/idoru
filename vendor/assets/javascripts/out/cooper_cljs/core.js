// Compiled by ClojureScript 0.0-2371
goog.provide('cooper_cljs.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('goog.history.EventType');
goog.require('reagent.core');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
goog.require('secretary.core');
goog.require('goog.events');
cooper_cljs.core.fetch_articles = (function fetch_articles(){return ajax.core.GET.call(null,"/api/articles.json",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),cooper_cljs.core.handler], null));
});
cooper_cljs.core.index_view = (function index_view(articles){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4379__auto__ = (function iter__6201(s__6202){return (new cljs.core.LazySeq(null,(function (){var s__6202__$1 = s__6202;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6202__$1);if(temp__4126__auto__)
{var s__6202__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6202__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__6202__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__6204 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__6203 = (0);while(true){
if((i__6203 < size__4378__auto__))
{var article = cljs.core._nth.call(null,c__4377__auto__,i__6203);cljs.core.chunk_append.call(null,b__6204,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cooper_cljs.core.article_view,article], null));
{
var G__6205 = (i__6203 + (1));
i__6203 = G__6205;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6204),iter__6201.call(null,cljs.core.chunk_rest.call(null,s__6202__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6204),null);
}
} else
{var article = cljs.core.first.call(null,s__6202__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cooper_cljs.core.article_view,article], null),iter__6201.call(null,cljs.core.rest.call(null,s__6202__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4379__auto__.call(null,articles);
})()], null);
});
cooper_cljs.core.article_view = (function article_view(article){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),cljs.core.get.call(null,article,"url")], null),cljs.core.get.call(null,article,"title")], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-muted"], null)," (",cljs.core.get.call(null,article,"feed_title"),")"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-muted"], null),cljs.core.get.call(null,article,"published_at")], null)], null)], null);
});
cooper_cljs.core.handler = (function handler(data){return reagent.core.render_component.call(null,cooper_cljs.core.index_view.call(null,data),document.getElementById("app"));
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__4612__auto___6208 = (function (params__4613__auto__){if(cljs.core.map_QMARK_.call(null,params__4613__auto__))
{var map__6206 = params__4613__auto__;var map__6206__$1 = ((cljs.core.seq_QMARK_.call(null,map__6206))?cljs.core.apply.call(null,cljs.core.hash_map,map__6206):map__6206);return cooper_cljs.core.fetch_articles.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__4613__auto__))
{var vec__6207 = params__4613__auto__;return cooper_cljs.core.fetch_articles.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__4612__auto___6208);
cooper_cljs.core.hook_browser_navigation_BANG_ = (function hook_browser_navigation_BANG_(){var G__6210 = (new goog.History());goog.events.listen(G__6210,goog.history.EventType.NAVIGATE,((function (G__6210){
return (function (event){return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__6210))
);
G__6210.setEnabled(true);
return G__6210;
});
cooper_cljs.core.hook_browser_navigation_BANG_.call(null);

//# sourceMappingURL=core.js.map