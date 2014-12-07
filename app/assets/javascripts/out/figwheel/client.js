// Compiled by ClojureScript 0.0-2371
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__12028,args){var map__12030 = p__12028;var map__12030__$1 = ((cljs.core.seq_QMARK_.call(null,map__12030))?cljs.core.apply.call(null,cljs.core.hash_map,map__12030):map__12030);var debug = cljs.core.get.call(null,map__12030__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__12028,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__12028,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__12031){
var p__12028 = cljs.core.first(arglist__12031);
var args = cljs.core.rest(arglist__12031);
return log__delegate(p__12028,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__12032){var map__12034 = p__12032;var map__12034__$1 = ((cljs.core.seq_QMARK_.call(null,map__12034))?cljs.core.apply.call(null,cljs.core.hash_map,map__12034):map__12034);var websocket_url = cljs.core.get.call(null,map__12034__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__12035,callback){var map__12037 = p__12035;var map__12037__$1 = ((cljs.core.seq_QMARK_.call(null,map__12037))?cljs.core.apply.call(null,cljs.core.hash_map,map__12037):map__12037);var msg = map__12037__$1;var dependency_file = cljs.core.get.call(null,map__12037__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__12037__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__12037__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3640__auto__ = dependency_file;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__12037,map__12037__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__12037,map__12037__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__12038,p__12039){var map__12042 = p__12038;var map__12042__$1 = ((cljs.core.seq_QMARK_.call(null,map__12042))?cljs.core.apply.call(null,cljs.core.hash_map,map__12042):map__12042);var opts = map__12042__$1;var url_rewriter = cljs.core.get.call(null,map__12042__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__12043 = p__12039;var map__12043__$1 = ((cljs.core.seq_QMARK_.call(null,map__12043))?cljs.core.apply.call(null,cljs.core.hash_map,map__12043):map__12043);var d = map__12043__$1;var file = cljs.core.get.call(null,map__12043__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__12044,p__12045){var map__12087 = p__12044;var map__12087__$1 = ((cljs.core.seq_QMARK_.call(null,map__12087))?cljs.core.apply.call(null,cljs.core.hash_map,map__12087):map__12087);var opts = map__12087__$1;var on_jsload = cljs.core.get.call(null,map__12087__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__12087__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__12088 = p__12045;var map__12088__$1 = ((cljs.core.seq_QMARK_.call(null,map__12088))?cljs.core.apply.call(null,cljs.core.hash_map,map__12088):map__12088);var files = cljs.core.get.call(null,map__12088__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__7538__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7538__auto__,map__12087,map__12087__$1,opts,on_jsload,before_jsload,map__12088,map__12088__$1,files){
return (function (){var f__7539__auto__ = (function (){var switch__7473__auto__ = ((function (c__7538__auto__,map__12087,map__12087__$1,opts,on_jsload,before_jsload,map__12088,map__12088__$1,files){
return (function (state_12111){var state_val_12112 = (state_12111[(1)]);if((state_val_12112 === (6)))
{var inst_12093 = (state_12111[(7)]);var inst_12102 = (state_12111[(2)]);var inst_12103 = cljs.core.PersistentVector.EMPTY_NODE;var inst_12104 = [inst_12093];var inst_12105 = (new cljs.core.PersistentVector(null,1,(5),inst_12103,inst_12104,null));var inst_12106 = cljs.core.apply.call(null,on_jsload,inst_12105);var state_12111__$1 = (function (){var statearr_12113 = state_12111;(statearr_12113[(8)] = inst_12102);
return statearr_12113;
})();var statearr_12114_12128 = state_12111__$1;(statearr_12114_12128[(2)] = inst_12106);
(statearr_12114_12128[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12112 === (5)))
{var inst_12109 = (state_12111[(2)]);var state_12111__$1 = state_12111;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12111__$1,inst_12109);
} else
{if((state_val_12112 === (4)))
{var state_12111__$1 = state_12111;var statearr_12115_12129 = state_12111__$1;(statearr_12115_12129[(2)] = null);
(statearr_12115_12129[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12112 === (3)))
{var inst_12093 = (state_12111[(7)]);var inst_12096 = console.debug("Figwheel: loaded these files");var inst_12097 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_12093);var inst_12098 = cljs.core.prn_str.call(null,inst_12097);var inst_12099 = console.log(inst_12098);var inst_12100 = cljs.core.async.timeout.call(null,(10));var state_12111__$1 = (function (){var statearr_12116 = state_12111;(statearr_12116[(9)] = inst_12099);
(statearr_12116[(10)] = inst_12096);
return statearr_12116;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12111__$1,(6),inst_12100);
} else
{if((state_val_12112 === (2)))
{var inst_12093 = (state_12111[(7)]);var inst_12093__$1 = (state_12111[(2)]);var inst_12094 = cljs.core.not_empty.call(null,inst_12093__$1);var state_12111__$1 = (function (){var statearr_12117 = state_12111;(statearr_12117[(7)] = inst_12093__$1);
return statearr_12117;
})();if(cljs.core.truth_(inst_12094))
{var statearr_12118_12130 = state_12111__$1;(statearr_12118_12130[(1)] = (3));
} else
{var statearr_12119_12131 = state_12111__$1;(statearr_12119_12131[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12112 === (1)))
{var inst_12089 = before_jsload.call(null,files);var inst_12090 = figwheel.client.add_request_urls.call(null,opts,files);var inst_12091 = figwheel.client.load_all_js_files.call(null,inst_12090);var state_12111__$1 = (function (){var statearr_12120 = state_12111;(statearr_12120[(11)] = inst_12089);
return statearr_12120;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12111__$1,(2),inst_12091);
} else
{return null;
}
}
}
}
}
}
});})(c__7538__auto__,map__12087,map__12087__$1,opts,on_jsload,before_jsload,map__12088,map__12088__$1,files))
;return ((function (switch__7473__auto__,c__7538__auto__,map__12087,map__12087__$1,opts,on_jsload,before_jsload,map__12088,map__12088__$1,files){
return (function() {
var state_machine__7474__auto__ = null;
var state_machine__7474__auto____0 = (function (){var statearr_12124 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12124[(0)] = state_machine__7474__auto__);
(statearr_12124[(1)] = (1));
return statearr_12124;
});
var state_machine__7474__auto____1 = (function (state_12111){while(true){
var ret_value__7475__auto__ = (function (){try{while(true){
var result__7476__auto__ = switch__7473__auto__.call(null,state_12111);if(cljs.core.keyword_identical_QMARK_.call(null,result__7476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7476__auto__;
}
break;
}
}catch (e12125){if((e12125 instanceof Object))
{var ex__7477__auto__ = e12125;var statearr_12126_12132 = state_12111;(statearr_12126_12132[(5)] = ex__7477__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12111);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12125;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12133 = state_12111;
state_12111 = G__12133;
continue;
}
} else
{return ret_value__7475__auto__;
}
break;
}
});
state_machine__7474__auto__ = function(state_12111){
switch(arguments.length){
case 0:
return state_machine__7474__auto____0.call(this);
case 1:
return state_machine__7474__auto____1.call(this,state_12111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7474__auto____0;
state_machine__7474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7474__auto____1;
return state_machine__7474__auto__;
})()
;})(switch__7473__auto__,c__7538__auto__,map__12087,map__12087__$1,opts,on_jsload,before_jsload,map__12088,map__12088__$1,files))
})();var state__7540__auto__ = (function (){var statearr_12127 = f__7539__auto__.call(null);(statearr_12127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7538__auto__);
return statearr_12127;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7540__auto__);
});})(c__7538__auto__,map__12087,map__12087__$1,opts,on_jsload,before_jsload,map__12088,map__12088__$1,files))
);
return c__7538__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__12134,link_href){var map__12136 = p__12134;var map__12136__$1 = ((cljs.core.seq_QMARK_.call(null,map__12136))?cljs.core.apply.call(null,cljs.core.hash_map,map__12136):map__12136);var request_url = cljs.core.get.call(null,map__12136__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__12136__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__7538__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7538__auto__,parent){
return (function (){var f__7539__auto__ = (function (){var switch__7473__auto__ = ((function (c__7538__auto__,parent){
return (function (state_12157){var state_val_12158 = (state_12157[(1)]);if((state_val_12158 === (2)))
{var inst_12154 = (state_12157[(2)]);var inst_12155 = parent.removeChild(orig_link);var state_12157__$1 = (function (){var statearr_12159 = state_12157;(statearr_12159[(7)] = inst_12154);
return statearr_12159;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12157__$1,inst_12155);
} else
{if((state_val_12158 === (1)))
{var inst_12152 = cljs.core.async.timeout.call(null,(200));var state_12157__$1 = state_12157;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12157__$1,(2),inst_12152);
} else
{return null;
}
}
});})(c__7538__auto__,parent))
;return ((function (switch__7473__auto__,c__7538__auto__,parent){
return (function() {
var state_machine__7474__auto__ = null;
var state_machine__7474__auto____0 = (function (){var statearr_12163 = [null,null,null,null,null,null,null,null];(statearr_12163[(0)] = state_machine__7474__auto__);
(statearr_12163[(1)] = (1));
return statearr_12163;
});
var state_machine__7474__auto____1 = (function (state_12157){while(true){
var ret_value__7475__auto__ = (function (){try{while(true){
var result__7476__auto__ = switch__7473__auto__.call(null,state_12157);if(cljs.core.keyword_identical_QMARK_.call(null,result__7476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7476__auto__;
}
break;
}
}catch (e12164){if((e12164 instanceof Object))
{var ex__7477__auto__ = e12164;var statearr_12165_12167 = state_12157;(statearr_12165_12167[(5)] = ex__7477__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12157);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12164;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12168 = state_12157;
state_12157 = G__12168;
continue;
}
} else
{return ret_value__7475__auto__;
}
break;
}
});
state_machine__7474__auto__ = function(state_12157){
switch(arguments.length){
case 0:
return state_machine__7474__auto____0.call(this);
case 1:
return state_machine__7474__auto____1.call(this,state_12157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7474__auto____0;
state_machine__7474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7474__auto____1;
return state_machine__7474__auto__;
})()
;})(switch__7473__auto__,c__7538__auto__,parent))
})();var state__7540__auto__ = (function (){var statearr_12166 = f__7539__auto__.call(null);(statearr_12166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7538__auto__);
return statearr_12166;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7540__auto__);
});})(c__7538__auto__,parent))
);
return c__7538__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__12169){var map__12171 = p__12169;var map__12171__$1 = ((cljs.core.seq_QMARK_.call(null,map__12171))?cljs.core.apply.call(null,cljs.core.hash_map,map__12171):map__12171);var f_data = map__12171__$1;var request_url = cljs.core.get.call(null,map__12171__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__12171__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__12172,files_msg){var map__12194 = p__12172;var map__12194__$1 = ((cljs.core.seq_QMARK_.call(null,map__12194))?cljs.core.apply.call(null,cljs.core.hash_map,map__12194):map__12194);var opts = map__12194__$1;var on_cssload = cljs.core.get.call(null,map__12194__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__12195_12215 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__12196_12216 = null;var count__12197_12217 = (0);var i__12198_12218 = (0);while(true){
if((i__12198_12218 < count__12197_12217))
{var f_12219 = cljs.core._nth.call(null,chunk__12196_12216,i__12198_12218);figwheel.client.reload_css_file.call(null,f_12219);
{
var G__12220 = seq__12195_12215;
var G__12221 = chunk__12196_12216;
var G__12222 = count__12197_12217;
var G__12223 = (i__12198_12218 + (1));
seq__12195_12215 = G__12220;
chunk__12196_12216 = G__12221;
count__12197_12217 = G__12222;
i__12198_12218 = G__12223;
continue;
}
} else
{var temp__4126__auto___12224 = cljs.core.seq.call(null,seq__12195_12215);if(temp__4126__auto___12224)
{var seq__12195_12225__$1 = temp__4126__auto___12224;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12195_12225__$1))
{var c__4410__auto___12226 = cljs.core.chunk_first.call(null,seq__12195_12225__$1);{
var G__12227 = cljs.core.chunk_rest.call(null,seq__12195_12225__$1);
var G__12228 = c__4410__auto___12226;
var G__12229 = cljs.core.count.call(null,c__4410__auto___12226);
var G__12230 = (0);
seq__12195_12215 = G__12227;
chunk__12196_12216 = G__12228;
count__12197_12217 = G__12229;
i__12198_12218 = G__12230;
continue;
}
} else
{var f_12231 = cljs.core.first.call(null,seq__12195_12225__$1);figwheel.client.reload_css_file.call(null,f_12231);
{
var G__12232 = cljs.core.next.call(null,seq__12195_12225__$1);
var G__12233 = null;
var G__12234 = (0);
var G__12235 = (0);
seq__12195_12215 = G__12232;
chunk__12196_12216 = G__12233;
count__12197_12217 = G__12234;
i__12198_12218 = G__12235;
continue;
}
}
} else
{}
}
break;
}
var c__7538__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7538__auto__,map__12194,map__12194__$1,opts,on_cssload){
return (function (){var f__7539__auto__ = (function (){var switch__7473__auto__ = ((function (c__7538__auto__,map__12194,map__12194__$1,opts,on_cssload){
return (function (state_12205){var state_val_12206 = (state_12205[(1)]);if((state_val_12206 === (2)))
{var inst_12201 = (state_12205[(2)]);var inst_12202 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_12203 = on_cssload.call(null,inst_12202);var state_12205__$1 = (function (){var statearr_12207 = state_12205;(statearr_12207[(7)] = inst_12201);
return statearr_12207;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12205__$1,inst_12203);
} else
{if((state_val_12206 === (1)))
{var inst_12199 = cljs.core.async.timeout.call(null,(100));var state_12205__$1 = state_12205;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12205__$1,(2),inst_12199);
} else
{return null;
}
}
});})(c__7538__auto__,map__12194,map__12194__$1,opts,on_cssload))
;return ((function (switch__7473__auto__,c__7538__auto__,map__12194,map__12194__$1,opts,on_cssload){
return (function() {
var state_machine__7474__auto__ = null;
var state_machine__7474__auto____0 = (function (){var statearr_12211 = [null,null,null,null,null,null,null,null];(statearr_12211[(0)] = state_machine__7474__auto__);
(statearr_12211[(1)] = (1));
return statearr_12211;
});
var state_machine__7474__auto____1 = (function (state_12205){while(true){
var ret_value__7475__auto__ = (function (){try{while(true){
var result__7476__auto__ = switch__7473__auto__.call(null,state_12205);if(cljs.core.keyword_identical_QMARK_.call(null,result__7476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7476__auto__;
}
break;
}
}catch (e12212){if((e12212 instanceof Object))
{var ex__7477__auto__ = e12212;var statearr_12213_12236 = state_12205;(statearr_12213_12236[(5)] = ex__7477__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12205);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12212;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12237 = state_12205;
state_12205 = G__12237;
continue;
}
} else
{return ret_value__7475__auto__;
}
break;
}
});
state_machine__7474__auto__ = function(state_12205){
switch(arguments.length){
case 0:
return state_machine__7474__auto____0.call(this);
case 1:
return state_machine__7474__auto____1.call(this,state_12205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7474__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7474__auto____0;
state_machine__7474__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7474__auto____1;
return state_machine__7474__auto__;
})()
;})(switch__7473__auto__,c__7538__auto__,map__12194,map__12194__$1,opts,on_cssload))
})();var state__7540__auto__ = (function (){var statearr_12214 = f__7539__auto__.call(null);(statearr_12214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7538__auto__);
return statearr_12214;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7540__auto__);
});})(c__7538__auto__,map__12194,map__12194__$1,opts,on_cssload))
);
return c__7538__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__12238){var map__12243 = p__12238;var map__12243__$1 = ((cljs.core.seq_QMARK_.call(null,map__12243))?cljs.core.apply.call(null,cljs.core.hash_map,map__12243):map__12243);var opts = map__12243__$1;var on_compile_fail = cljs.core.get.call(null,map__12243__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__12243__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__12243__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__12243__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__12243,map__12243__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__12244 = cljs.core._EQ_;var expr__12245 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__12244.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__12245)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__12244.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__12245)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__12244.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__12245)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__12243,map__12243__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__12243,map__12243__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__12243,map__12243__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__12243,map__12243__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__12243,map__12243__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__12243,map__12243__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__12243,map__12243__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__12243,map__12243__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__12243,map__12243__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj12250 = {"detail":url};return obj12250;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__12251){var map__12253 = p__12251;var map__12253__$1 = ((cljs.core.seq_QMARK_.call(null,map__12253))?cljs.core.apply.call(null,cljs.core.hash_map,map__12253):map__12253);var class$ = cljs.core.get.call(null,map__12253__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__12253__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__12254){var map__12260 = p__12254;var map__12260__$1 = ((cljs.core.seq_QMARK_.call(null,map__12260))?cljs.core.apply.call(null,cljs.core.hash_map,map__12260):map__12260);var ed = map__12260__$1;var exception_data = cljs.core.get.call(null,map__12260__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__12260__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__12261_12265 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__12262_12266 = null;var count__12263_12267 = (0);var i__12264_12268 = (0);while(true){
if((i__12264_12268 < count__12263_12267))
{var msg_12269 = cljs.core._nth.call(null,chunk__12262_12266,i__12264_12268);console.log(msg_12269);
{
var G__12270 = seq__12261_12265;
var G__12271 = chunk__12262_12266;
var G__12272 = count__12263_12267;
var G__12273 = (i__12264_12268 + (1));
seq__12261_12265 = G__12270;
chunk__12262_12266 = G__12271;
count__12263_12267 = G__12272;
i__12264_12268 = G__12273;
continue;
}
} else
{var temp__4126__auto___12274 = cljs.core.seq.call(null,seq__12261_12265);if(temp__4126__auto___12274)
{var seq__12261_12275__$1 = temp__4126__auto___12274;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12261_12275__$1))
{var c__4410__auto___12276 = cljs.core.chunk_first.call(null,seq__12261_12275__$1);{
var G__12277 = cljs.core.chunk_rest.call(null,seq__12261_12275__$1);
var G__12278 = c__4410__auto___12276;
var G__12279 = cljs.core.count.call(null,c__4410__auto___12276);
var G__12280 = (0);
seq__12261_12265 = G__12277;
chunk__12262_12266 = G__12278;
count__12263_12267 = G__12279;
i__12264_12268 = G__12280;
continue;
}
} else
{var msg_12281 = cljs.core.first.call(null,seq__12261_12275__$1);console.log(msg_12281);
{
var G__12282 = cljs.core.next.call(null,seq__12261_12275__$1);
var G__12283 = null;
var G__12284 = (0);
var G__12285 = (0);
seq__12261_12265 = G__12282;
chunk__12262_12266 = G__12283;
count__12263_12267 = G__12284;
i__12264_12268 = G__12285;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__3640__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__12286){var map__12288 = p__12286;var map__12288__$1 = ((cljs.core.seq_QMARK_.call(null,map__12288))?cljs.core.apply.call(null,cljs.core.hash_map,map__12288):map__12288);var opts = map__12288__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__12286 = null;if (arguments.length > 0) {
  p__12286 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__12286);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__12289){
var p__12286 = cljs.core.seq(arglist__12289);
return watch_and_reload__delegate(p__12286);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map