define("mods/trans/bloglist",function(require,a,b){var c=require("common/transmission"),d=new c,e=d.register.bind(d);e("blogArticleList",{url:"",cache:!0}),b.exports=d}),define("mods/bloglist",function(require,a,b){var c=require("core/chaos/jquery"),d=require("more/base"),e=require("common/channel"),f=require("common/location"),g=require("kit/env/browser"),h=require("mods/trans/bloglist"),i=require("mods/util/getFormatedUrl"),j=require("vendor/bower/nprogress"),k=d.extend({parseDom:function(){this.nodes={root:c("section.posts")}},build:function(){},setBound:function(){var a=this;this.bound={getContent:function(b){a.getContent(c(this),b)},onAttach:function(){a.onAttach()},checkUpdate:function(){a.checkUpdate()},onDetach:function(){a.onDetach()}}},setDomEvents:function(a){this.bound,this.nodes,g.MOBILE?"touchend":"click";a="add"===a?"delegate":"undelegate"},setListener:function(a){var b=this.bound;a="add"===a?"add":"remove",e[a]("locationChange",b.checkUpdate)},setCustEvents:function(a){var b=this.bound;a="add"===a?"on":"off",this[a]("attach",b.onAttach),this[a]("detach",b.onDetach)},matchUrl:function(a){return a=i(a),/^(\/page\/[\d]+\/|\/tag\/.*|($)|\/)(\?.*|\#.*|$)/.test(a)},checkUpdate:function(){var a=this,b=f.get().url,c="/"+f.get().path,d=this.get("currentUrl"),e=a.nodes.root.attr("data-filled");a.nodes.root.removeAttr("data-filled"),d!==b&&this.matchUrl(c)&&"true"!==e&&(this.set("currentUrl",b),this.getContent(b))},getContent:function(a){var b=this;j.start(),h.request("blogArticleList",{url:a,type:"get",dataType:"html",onSuccess:function(a){a=c(a).find("section.posts").html(),b.nodes.root.html(a),window.scrollTo(0,1)},onFailure:function(){c.log("网络错误")},onComplete:function(){j.done()}})},onAttach:function(){this.nodes;this.checkUpdate(),this.set("currentUrl",f.get().url)},onDetach:function(){this.set("currentUrl","")}});b.exports=k}),define("conf/pl/bloglist",function(require,a,b){var c=(require("core/chaos/jquery"),require("mods/bloglist"));b.exports={init:function(){var a=this.objs={};a.blog=new c},attach:function(){},detach:function(){},destroy:function(){}}});