define("mods/nav",function(require,a,b){var c=require("core/chaos/jquery"),d=require("more/base"),e=d.extend({parseDom:function(){this.nodes={navBtn:c(".nav-toggler"),bodyNavMenu:c("body, .nav-menu"),$body:c("body"),navMenu:c(".nav-menu"),container:c("#container")}},build:function(){this.objs},setBound:function(){var a=this;this.bound={showNav:function(b){b.stopPropagation(),a.showNav()},closeNavi:function(){a.closeNavi()}}},showNav:function(){this.nodes.bodyNavMenu.addClass("nav-transition"),this.nodes.$body.toggleClass("body-nav-open"),this.nodes.navMenu.toggleClass("nav-open")},closeNavi:function(){var a=this;a.nodes.$body.hasClass("body-nav-open")&&(a.nodes.bodyNavMenu.addClass("nav-transition"),a.nodes.$body.toggleClass("body-nav-open"),a.nodes.navMenu.toggleClass("nav-open"))},setListener:function(a){this.bound;a="add"===a?"add":"remove"},setCustEvents:function(a){this.bound;a="add"===a?"on":"off"},setDomEvents:function(a){a="add"===a?"on":"off",this.nodes.navBtn[a]("click",this.bound.showNav),this.nodes.container[a]("click",this.bound.closeNavi),this.nodes.navMenu[a]("click","a",this.bound.closeNavi)}});b.exports=e}),define("conf/pl/nav",function(require,a,b){var c=(require("core/chaos/jquery"),require("mods/nav"));b.exports={init:function(){var a=this.objs={};a.nav=new c},attach:function(){},detach:function(){},destroy:function(){}}});