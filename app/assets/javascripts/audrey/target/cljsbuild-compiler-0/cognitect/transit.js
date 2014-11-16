// Compiled by ClojureScript 0.0-2156
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;if((other instanceof cljs.core.UUID))
{return (this$__$1.uuid === other.uuid);
} else
{if((other instanceof com.cognitect.transit.types.UUID))
{return (this$__$1.uuid === other.toString());
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return false;
} else
{return null;
}
}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;if((other instanceof cljs.core.UUID))
{return cljs.core._equiv.call(null,other,this$__$1);
} else
{return this$__$1.equiv(other);
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;
goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__5677_5681 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__5678_5682 = null;var count__5679_5683 = 0;var i__5680_5684 = 0;while(true){
if((i__5680_5684 < count__5679_5683))
{var k_5685 = cljs.core._nth.call(null,chunk__5678_5682,i__5680_5684);var v_5686 = (b[k_5685]);(a[k_5685] = v_5686);
{
var G__5687 = seq__5677_5681;
var G__5688 = chunk__5678_5682;
var G__5689 = count__5679_5683;
var G__5690 = (i__5680_5684 + 1);
seq__5677_5681 = G__5687;
chunk__5678_5682 = G__5688;
count__5679_5683 = G__5689;
i__5680_5684 = G__5690;
continue;
}
} else
{var temp__4092__auto___5691 = cljs.core.seq.call(null,seq__5677_5681);if(temp__4092__auto___5691)
{var seq__5677_5692__$1 = temp__4092__auto___5691;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5677_5692__$1))
{var c__4151__auto___5693 = cljs.core.chunk_first.call(null,seq__5677_5692__$1);{
var G__5694 = cljs.core.chunk_rest.call(null,seq__5677_5692__$1);
var G__5695 = c__4151__auto___5693;
var G__5696 = cljs.core.count.call(null,c__4151__auto___5693);
var G__5697 = 0;
seq__5677_5681 = G__5694;
chunk__5678_5682 = G__5695;
count__5679_5683 = G__5696;
i__5680_5684 = G__5697;
continue;
}
} else
{var k_5698 = cljs.core.first.call(null,seq__5677_5692__$1);var v_5699 = (b[k_5698]);(a[k_5698] = v_5699);
{
var G__5700 = cljs.core.next.call(null,seq__5677_5692__$1);
var G__5701 = null;
var G__5702 = 0;
var G__5703 = 0;
seq__5677_5681 = G__5700;
chunk__5678_5682 = G__5701;
count__5679_5683 = G__5702;
i__5680_5684 = G__5703;
continue;
}
}
} else
{}
}
break;
}
return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.cljs$lang$type = true;
cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cognitect.transit/MapBuilder");
});
cognitect.transit.MapBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){var self__ = this;
var _ = this;return cljs.core.assoc_BANG_.call(null,m,k,v);
});
cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,m);
});
cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});
cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){return (new cognitect.transit.MapBuilder());
});

/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.cljs$lang$type = true;
cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cognitect.transit/VectorBuilder");
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});
cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){var self__ = this;
var _ = this;return cljs.core.conj_BANG_.call(null,v,x);
});
cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,v);
});
cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});
cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){return (new cognitect.transit.VectorBuilder());
});
/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){return cljs.core.symbol.call(null,v);
}),":",(function (v){return cljs.core.keyword.call(null,v);
}),"set",(function (v){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){var i = 0;var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__5704 = (i + 2);
var G__5705 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + 1)]));
i = G__5704;
ret = G__5705;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",1015973339)))));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.cljs$lang$type = true;
cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cognitect.transit/KeywordHandler");
});
cognitect.transit.KeywordHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return ":";
});
cognitect.transit.KeywordHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){return (new cognitect.transit.KeywordHandler());
});

/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.cljs$lang$type = true;
cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cognitect.transit/SymbolHandler");
});
cognitect.transit.SymbolHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "$";
});
cognitect.transit.SymbolHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){return (new cognitect.transit.SymbolHandler());
});

/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.cljs$lang$type = true;
cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__5706_5710 = cljs.core.seq.call(null,v);var chunk__5707_5711 = null;var count__5708_5712 = 0;var i__5709_5713 = 0;while(true){
if((i__5709_5713 < count__5708_5712))
{var x_5714 = cljs.core._nth.call(null,chunk__5707_5711,i__5709_5713);ret.push(x_5714);
{
var G__5715 = seq__5706_5710;
var G__5716 = chunk__5707_5711;
var G__5717 = count__5708_5712;
var G__5718 = (i__5709_5713 + 1);
seq__5706_5710 = G__5715;
chunk__5707_5711 = G__5716;
count__5708_5712 = G__5717;
i__5709_5713 = G__5718;
continue;
}
} else
{var temp__4092__auto___5719 = cljs.core.seq.call(null,seq__5706_5710);if(temp__4092__auto___5719)
{var seq__5706_5720__$1 = temp__4092__auto___5719;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5706_5720__$1))
{var c__4151__auto___5721 = cljs.core.chunk_first.call(null,seq__5706_5720__$1);{
var G__5722 = cljs.core.chunk_rest.call(null,seq__5706_5720__$1);
var G__5723 = c__4151__auto___5721;
var G__5724 = cljs.core.count.call(null,c__4151__auto___5721);
var G__5725 = 0;
seq__5706_5710 = G__5722;
chunk__5707_5711 = G__5723;
count__5708_5712 = G__5724;
i__5709_5713 = G__5725;
continue;
}
} else
{var x_5726 = cljs.core.first.call(null,seq__5706_5720__$1);ret.push(x_5726);
{
var G__5727 = cljs.core.next.call(null,seq__5706_5720__$1);
var G__5728 = null;
var G__5729 = 0;
var G__5730 = 0;
seq__5706_5710 = G__5727;
chunk__5707_5711 = G__5728;
count__5708_5712 = G__5729;
i__5709_5713 = G__5730;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.ListHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){return (new cognitect.transit.ListHandler());
});

/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.cljs$lang$type = true;
cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cognitect.transit/MapHandler");
});
cognitect.transit.MapHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "map";
});
cognitect.transit.MapHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v;
});
cognitect.transit.MapHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){return (new cognitect.transit.MapHandler());
});

/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.cljs$lang$type = true;
cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__5731_5735 = cljs.core.seq.call(null,v);var chunk__5732_5736 = null;var count__5733_5737 = 0;var i__5734_5738 = 0;while(true){
if((i__5734_5738 < count__5733_5737))
{var x_5739 = cljs.core._nth.call(null,chunk__5732_5736,i__5734_5738);ret.push(x_5739);
{
var G__5740 = seq__5731_5735;
var G__5741 = chunk__5732_5736;
var G__5742 = count__5733_5737;
var G__5743 = (i__5734_5738 + 1);
seq__5731_5735 = G__5740;
chunk__5732_5736 = G__5741;
count__5733_5737 = G__5742;
i__5734_5738 = G__5743;
continue;
}
} else
{var temp__4092__auto___5744 = cljs.core.seq.call(null,seq__5731_5735);if(temp__4092__auto___5744)
{var seq__5731_5745__$1 = temp__4092__auto___5744;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5731_5745__$1))
{var c__4151__auto___5746 = cljs.core.chunk_first.call(null,seq__5731_5745__$1);{
var G__5747 = cljs.core.chunk_rest.call(null,seq__5731_5745__$1);
var G__5748 = c__4151__auto___5746;
var G__5749 = cljs.core.count.call(null,c__4151__auto___5746);
var G__5750 = 0;
seq__5731_5735 = G__5747;
chunk__5732_5736 = G__5748;
count__5733_5737 = G__5749;
i__5734_5738 = G__5750;
continue;
}
} else
{var x_5751 = cljs.core.first.call(null,seq__5731_5745__$1);ret.push(x_5751);
{
var G__5752 = cljs.core.next.call(null,seq__5731_5745__$1);
var G__5753 = null;
var G__5754 = 0;
var G__5755 = 0;
seq__5731_5735 = G__5752;
chunk__5732_5736 = G__5753;
count__5733_5737 = G__5754;
i__5734_5738 = G__5755;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.SetHandler.prototype.stringRep = (function (){var self__ = this;
var v = this;return null;
});
cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){return (new cognitect.transit.SetHandler());
});

/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.cljs$lang$type = true;
cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__5756_5760 = cljs.core.seq.call(null,v);var chunk__5757_5761 = null;var count__5758_5762 = 0;var i__5759_5763 = 0;while(true){
if((i__5759_5763 < count__5758_5762))
{var x_5764 = cljs.core._nth.call(null,chunk__5757_5761,i__5759_5763);ret.push(x_5764);
{
var G__5765 = seq__5756_5760;
var G__5766 = chunk__5757_5761;
var G__5767 = count__5758_5762;
var G__5768 = (i__5759_5763 + 1);
seq__5756_5760 = G__5765;
chunk__5757_5761 = G__5766;
count__5758_5762 = G__5767;
i__5759_5763 = G__5768;
continue;
}
} else
{var temp__4092__auto___5769 = cljs.core.seq.call(null,seq__5756_5760);if(temp__4092__auto___5769)
{var seq__5756_5770__$1 = temp__4092__auto___5769;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5756_5770__$1))
{var c__4151__auto___5771 = cljs.core.chunk_first.call(null,seq__5756_5770__$1);{
var G__5772 = cljs.core.chunk_rest.call(null,seq__5756_5770__$1);
var G__5773 = c__4151__auto___5771;
var G__5774 = cljs.core.count.call(null,c__4151__auto___5771);
var G__5775 = 0;
seq__5756_5760 = G__5772;
chunk__5757_5761 = G__5773;
count__5758_5762 = G__5774;
i__5759_5763 = G__5775;
continue;
}
} else
{var x_5776 = cljs.core.first.call(null,seq__5756_5770__$1);ret.push(x_5776);
{
var G__5777 = cljs.core.next.call(null,seq__5756_5770__$1);
var G__5778 = null;
var G__5779 = 0;
var G__5780 = 0;
seq__5756_5760 = G__5777;
chunk__5757_5761 = G__5778;
count__5758_5762 = G__5779;
i__5759_5763 = G__5780;
continue;
}
}
} else
{}
}
break;
}
return ret;
});
cognitect.transit.VectorHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){return (new cognitect.transit.VectorHandler());
});

/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.cljs$lang$type = true;
cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";
cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cognitect.transit/UUIDHandler");
});
cognitect.transit.UUIDHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "u";
});
cognitect.transit.UUIDHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.uuid;
});
cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){var self__ = this;
var this$ = this;return this$.rep(v);
});
cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){return (new cognitect.transit.UUIDHandler());
});
/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a JavaScript
* array of interleaved type constructors and handler instances for those
* type constructors.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var uuid_handler = (new cognitect.transit.UUIDHandler());var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentQueue,cljs.core.PersistentArrayMap,cljs.core.EmptyList,cljs.core.ValSeq,cljs.core.Subvec,cljs.core.Range,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentQueueSeq,cljs.core.IndexedSeq,cljs.core.ChunkedSeq,cljs.core.ChunkedCons,cljs.core.Keyword,cljs.core.PersistentVector,cljs.core.ArrayNodeSeq,cljs.core.RSeq,cljs.core.PersistentTreeSet,cljs.core.LazySeq,cljs.core.PersistentHashMap,cljs.core.NodeSeq,cljs.core.Cons,cljs.core.UUID,cljs.core.PersistentTreeMapSeq,cljs.core.Symbol,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.List,cljs.core.PersistentHashSet],[list_handler,map_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,list_handler,list_handler,keyword_handler,vector_handler,list_handler,list_handler,set_handler,list_handler,map_handler,list_handler,list_handler,uuid_handler,list_handler,symbol_handler,map_handler,list_handler,list_handler,set_handler]),new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(opts));return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
}), "handlers": (function (){var x5790 = cljs.core.clone.call(null,handlers);x5790.forEach = (function (f){var coll = this;var seq__5791 = cljs.core.seq.call(null,coll);var chunk__5792 = null;var count__5793 = 0;var i__5794 = 0;while(true){
if((i__5794 < count__5793))
{var vec__5795 = cljs.core._nth.call(null,chunk__5792,i__5794);var k = cljs.core.nth.call(null,vec__5795,0,null);var v = cljs.core.nth.call(null,vec__5795,1,null);f.call(null,v,k);
{
var G__5797 = seq__5791;
var G__5798 = chunk__5792;
var G__5799 = count__5793;
var G__5800 = (i__5794 + 1);
seq__5791 = G__5797;
chunk__5792 = G__5798;
count__5793 = G__5799;
i__5794 = G__5800;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__5791);if(temp__4092__auto__)
{var seq__5791__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5791__$1))
{var c__4151__auto__ = cljs.core.chunk_first.call(null,seq__5791__$1);{
var G__5801 = cljs.core.chunk_rest.call(null,seq__5791__$1);
var G__5802 = c__4151__auto__;
var G__5803 = cljs.core.count.call(null,c__4151__auto__);
var G__5804 = 0;
seq__5791 = G__5801;
chunk__5792 = G__5802;
count__5793 = G__5803;
i__5794 = G__5804;
continue;
}
} else
{var vec__5796 = cljs.core.first.call(null,seq__5791__$1);var k = cljs.core.nth.call(null,vec__5796,0,null);var v = cljs.core.nth.call(null,vec__5796,1,null);f.call(null,v,k);
{
var G__5805 = cljs.core.next.call(null,seq__5791__$1);
var G__5806 = null;
var G__5807 = 0;
var G__5808 = 0;
seq__5791 = G__5805;
chunk__5792 = G__5806;
count__5793 = G__5807;
i__5794 = G__5808;
continue;
}
}
} else
{return null;
}
}
break;
}
});
return x5790;
})(), "objectBuilder": (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,(function (obj,k,v){var G__5789 = obj;G__5789.push(kfn.call(null,k),vfn.call(null,v));
return G__5789;
}),["^ "],m);
})},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",1015973339)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t5812 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t5812 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta5813){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta5813 = meta5813;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t5812.cljs$lang$type = true;
cognitect.transit.t5812.cljs$lang$ctorStr = "cognitect.transit/t5812";
cognitect.transit.t5812.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cognitect.transit/t5812");
});
cognitect.transit.t5812.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t5812.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t5812.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t5812.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t5812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5814){var self__ = this;
var _5814__$1 = this;return self__.meta5813;
});
cognitect.transit.t5812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5814,meta5813__$1){var self__ = this;
var _5814__$1 = this;return (new cognitect.transit.t5812(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta5813__$1));
});
cognitect.transit.__GT_t5812 = (function __GT_t5812(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta5813){return (new cognitect.transit.t5812(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta5813));
});
}
return (new cognitect.transit.t5812(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){return com.cognitect.transit.types.isLink.call(null,x);
});
