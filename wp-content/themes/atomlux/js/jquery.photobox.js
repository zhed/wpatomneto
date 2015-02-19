/*!
    photobox v1.7.1
    (c) 2012 Yair Even Or <http://dropthebit.com>

    Uses jQuery-mousewheel Version: 3.0.6 by:
    (c) 2009 Brandon Aaron <http://brandonaaron.net>

    MIT-style license.
*/
(function(c){function $(a,b,g){1==b?(e.css({transform:"translateX(25%)",transition:".7s",opacity:0}),setTimeout(function(){r(y)},200)):-1==b&&(e.css({transform:"translateX(-25%)",transition:".7s",opacity:0}),setTimeout(function(){r(u)},200));1==g?h.addClass("show"):-1==g&&h.removeClass("show")}function M(a){var b,g=k.createElement("p").style,c=["ms","O","Moz","Webkit"];if(""==g[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(b=c.length;b--;)if(""==g[c[b]+a])return c[b]+a}function aa(a){a=a.keyCode; var b=d.keys;return 0<=b.close.indexOf(a)&&H()||0<=b.next.indexOf(a)&&r(u)||0<=b.prev.indexOf(a)&&r(y)||!0}function N(){r("pbPrevBtn"==this.id?y:u);return!1}function r(a,b,g){function c(){I.off(n).removeClass("change");d.counter&&C.find(".counter").text("("+(v+1)+" / "+l.length+")");d.title&&C.find(".title").text(l[v][1])}if(!a||0>a)a=0;f.addClass(a>v?"next":"prev");v=a;z=l[a][0];y=(v||(d.loop?l.length:0))-1;u=(v+1)%l.length||(d.loop?0:-1);O();f.removeClass("error");var h=setTimeout(function(){f.addClass("pbLoading")}, 50);d.loop||(P[a==l.length-1?"addClass":"removeClass"]("hide"),Q[0==a?"addClass":"removeClass"]("hide"));I.on(n,c).addClass("change");(b||p)&&c();d.thumbs&&q.changeActive(a,b,g);0<=y&&(R.src=l[y][0]);0<=u&&(S.src=l[u][0]);p&&f.addClass("hide");e.data("zoom",1);d.autoplay&&j.progress.reset();w=new Image;w.onload=function(){clearTimeout(h);var a=function(){e.off(n).css({transition:"none"});e[0].src=z;e[0].className="prepare";setTimeout(function(){e.removeAttr("style")[0].className="";f.removeClass("hide next prev"); setTimeout(function(){e[0].className="";e.on(n,T);p&&T()},0)},50)};f.removeClass("pbLoading").addClass("hide");e.removeAttr("style").removeClass("zoomable");if(b||p)a();else e.on(n,a)};w.onerror=function(){f.removeClass("pbLoading").addClass("error");e[0].src=U;w.onerror=null};w.src=z;D.save()}function T(){e.off(n);e.addClass("zoomable");m&&d.autoplay&&j.play();"function"==typeof E.callback&&E.callback()}function ba(a,b){var g=e.data("zoom")||1,d=e[0].getBoundingClientRect(),g=g+b/10;0.1>g&&(g=0.1); e.data("zoom",g).css({transform:"scale("+g+")"});if(d.height>s.clientHeight||d.width>s.clientWidth)c(k).on("mousemove.photobox",ca);else c(k).off("mousemove.photobox"),e[0].style[V]="50% 50%";return!1}function da(a,b){a.preventDefault();var c=E.thumbsList;c.css("height",c[0].clientHeight+10*b);c=C[0].clientHeight/2;F[0].style.cssText="margin-top: -"+c+"px; padding: "+c+"px 0;";h.hide().show(0);q.calc()}function ca(a){var b=100*((a.clientY/s.clientHeight*(s.clientHeight+200)-100)/s.clientHeight);a= (100*(a.clientX/s.clientWidth)).toFixed(2)+"% "+b.toFixed(2)+"%";e[0].style[V]=a}function O(){clearTimeout(j.autoPlayTimer);c(k).off("mousemove.photobox");w.onload=function(){};w.src=R.src=S.src=z}function H(){function a(){""!=f[0].className&&(f.removeClass("show hide"),e.removeAttr("class").removeAttr("style").off().data("zoom",1),ea&&setTimeout(function(){f.hide()},200))}O();G.prototype.setup();D.clear();f.removeClass("on").addClass("hide");e.on(n,a);p&&a();setTimeout(a,500)}function J(a){var b= a||x.event,g=[].slice.call(arguments,1),d=0,f=0,e=0;a=c.event.fix(b);a.type="mousewheel";b.wheelDelta&&(d=b.wheelDelta/120);b.detail&&(d=-b.detail/3);e=d;void 0!==b.axis&&b.axis===b.HORIZONTAL_AXIS&&(e=0,f=-1*d);void 0!==b.wheelDeltaY&&(e=b.wheelDeltaY/120);void 0!==b.wheelDeltaX&&(f=-1*b.wheelDeltaX/120);g.unshift(a,d,f,e);return(c.event.dispatch||c.event.handle).apply(this,g)}var k=document,x=window,G,A=[],E,d,l=[],v=-1,z,y,u,q,s,j,n="transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", p=!("placeholder"in k.createElement("input")),ea=!!x.ActiveXObject,W="ontouchend"in k,K,L,t=c(),U="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",V=M("transformOrigin"),fa=M("transition"),w={},R=new Image,S=new Image,e,Q,P,C,I,m,h,F,ga={loop:!0,thumbs:!0,counter:!0,title:!0,autoplay:!1,time:3E3,history:!0,hideFlash:!0,zoomable:!0,keys:{close:"27, 88, 67",prev:"37, 80",next:"39, 78"}},f=c('<div id="pbOverlay">').hide().append(c('<div class="pbLoader"><b></b><b></b><b></b></div>'), F=c('<div class="imageWrap">').append(e=c("<img>"),Q=c('<div id="pbPrevBtn" class="prevNext"><b></b></div>').on("click",N),P=c('<div id="pbNextBtn" class="prevNext"><b></b></div>').on("click",N)),c('<div id="pbCloseBtn">').on("click",H)[0],m=c('<div id="pbAutoplayBtn">').append(c('<div class="pbProgress">')),C=c('<div id="pbCaption">').append(I=c('<div class="pbCaptionText">').append('<div class="title"></div><div class="counter">'),h=c("<div>").addClass("pbThumbs")));c(k).ready(function(){p&&f.addClass("msie"); m.on("click",j.toggle);h.on("click","a",q.click);W&&h.css("overflow","auto");f.on("click","img",function(a){a.stopPropagation()});c(k.body).prepend(c(f));s=k.documentElement});c.fn.photobox=function(a,b,g){"string"!=typeof a&&(a="a");b=c.extend({},ga,b||{});a=new G(b,this,a);a.callback=g;A.push(a);D.load();return this};G=function(a,b,g){this.options=c.extend({},a);this.target=g;this.selector=c(b||k);this.thumbsList=null;a=this.imageLinksFilter(b.find(g));this.imageLinks=a[0];this.images=a[1];this.init()}; var X=x.MutationObserver||x.WebKitMutationObserver,ha=x.addEventListener;G.prototype={init:function(){var a=this;this.selector.data("_photobox",this);this.options.thumbs&&(this.thumbsList=q.generate(this.imageLinks));this.selector.on("click.photobox",this.target,function(b){b.preventDefault();a.open(this)});this.observerTimeout=null;1==this.selector[0].nodeType&&a.observeDOM(a.selector[0],function(){clearTimeout(a.observerTimeout);a.observerTimeout=setTimeout(function(){var b=a.imageLinksFilter(a.selector.find(a.target)); a.imageLinks=b[0];a.images=b[1];a.thumbsList=q.generate(a.imageLinks)},50)})},open:function(a){var b=c.inArray(a,this.imageLinks);if(-1==b)return!1;d=this.options;l=this.images;E=this;this.setup(1);f.on(n,function(){f.off(n).addClass("on");r(b,!0)}).addClass("show");p&&f.trigger("MSTransitionEnd");return!1},imageLinksFilter:function(a){var b=[];return[a.filter(function(){var a=this.firstElementChild||this.children[0];if(!a||!a.tagName||"img"!=a.tagName.toLowerCase())return!1;b.push([this.href,a.getAttribute("alt")|| a.getAttribute("title")||""]);return!0}),b]},observeDOM:function(a,b){X?(new X(function(a){(a[0].addedNodes.length||a[0].removedNodes.length)&&b()})).observe(a,{childList:!0,subtree:!0}):ha&&(a.addEventListener("DOMNodeInserted",b,!1),a.addEventListener("DOMNodeRemoved",b,!1))},setup:function(a){var b=a?"on":"off";e[0].src=U;a?(e.css({transition:"0s"}).removeAttr("style"),f.show(),h.html(this.thumbsList),f[d.thumbs?"addClass":"removeClass"]("thumbs"),d.thumbs&&(t.removeAttr("class"),c(x).on("resize.photobox", q.calc),q.calc()),2>this.images.length?f.removeClass("thumbs hasArrows hasCounter hasAutoplay"):(f.addClass("hasArrows hasCounter"),1E3<d.time?(f.addClass("hasAutoplay"),d.autoplay?j.progress.start():j.pause()):f.removeClass("hasAutoplay"))):c(x).off("resize.photobox");d.hideFlash&&c.each(["object","embed"],function(b,d){c(d).each(function(){a&&(this._photobox=this.style.visibility);this.style.visibility=a?"hidden":this._photobox})});c(k)[b]({"keydown.photobox":aa});"ontouchstart"in document.documentElement&& (f.removeClass("hasArrows"),F[b]("swipe",$));if(d.zoomable&&(F[b]({"mousewheel.photobox":ba}),!p))h[b]({"mousewheel.photobox":da})}};q={generate:function(a){var b=c("<ul>"),d,e=[],f,h;for(f=a.toArray().length;f--;)d=a[f],h=d.children[0].title||d.children[0].alt||"",e.push('<li><a href="'+d.href+'"><img src="'+d.children[0].src+'" alt="" title="'+h+'" /></a></li>');b.html(e.reverse().join(""));return b},click:function(a){a.preventDefault();t.removeClass("active");t=c(this).parent().addClass("active"); a=c(this.parentNode).index();return r(a,0,1)},changeActiveTimeout:null,changeActive:function(a,b,c){t.index();t.removeClass("active");t=h.find("li").eq(a).addClass("active");c||(clearTimeout(this.changeActiveTimeout),this.changeActiveTimeout=setTimeout(function(){var a=t[0].offsetLeft+t[0].clientWidth/2-s.clientWidth/2;b?h.delay(800):h.stop();h.animate({scrollLeft:a},500,"swing")},200))},calc:function(){K=h[0].clientWidth;L=h[0].firstChild.clientWidth;var a=L>K?"on":"off";!W&&h[a]("mousemove",q.move); return this},move:function(a){h[0].scrollLeft=a.pageX*(L/K)-500}};j={autoPlayTimer:!1,play:function(){j.autoPlayTimer=setTimeout(function(){r(u)},d.time);j.progress.start();m.removeClass("play");j.setTitle("Click to stop autoplay");d.autoplay=!0},pause:function(){clearTimeout(j.autoPlayTimer);j.progress.reset();m.addClass("play");j.setTitle("Click to resume autoplay");d.autoplay=!1},progress:{reset:function(){m.find("div").removeAttr("style");setTimeout(function(){m.removeClass("playing")},200)}, start:function(){p||m.find("div").css(fa,d.time+"ms");m.addClass("playing")}},setTitle:function(a){a&&m.prop("title",a+" (every "+d.time/1E3+" seconds)")},toggle:function(a){a.stopPropagation();j[d.autoplay?"pause":"play"]()}};var D={save:function(){"pushState"in window.history&&(decodeURIComponent(window.location.hash.slice(1))!=z&&d.history)&&window.history.pushState("photobox",k.title+"-"+l[v][1],window.location.pathname+window.location.search+"#"+encodeURIComponent(z))},load:function(){if(d&& !d.history)return!1;var a=decodeURIComponent(window.location.hash.slice(1)),b,c;if(!a&&f.hasClass("show"))H();else for(b=0;b<A.length;b++)for(c in A[b].images)if(A[b].images[c][0]==a)return A[b].open(A[b].imageLinks[c]),!0},clear:function(){d.history&&"pushState"in window.history&&window.history.pushState("photobox",k.title,window.location.pathname+window.location.search)}},Y=window.onpopstate;window.onpopstate=function(a){Y&&Y.apply(this,arguments);"photobox"==a.state&&D.load()};var B=["DOMMouseScroll", "mousewheel"];if(c.event.fixHooks)for(var Z=B.length;Z;)c.event.fixHooks[B[--Z]]=c.event.mouseHooks;c.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=B.length;a;)this.addEventListener(B[--a],J,!1);else this.onmousewheel=J},teardown:function(){if(this.removeEventListener)for(var a=B.length;a;)this.removeEventListener(B[--a],J,!1);else this.onmousewheel=null}};c.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel", a)}});c.event.special.swipe={setup:function(){c(this).bind("touchstart",c.event.special.swipe.handler)},teardown:function(){c(this).unbind("touchstart",c.event.special.swipe.handler)},handler:function(a){function b(){m.removeEventListener("touchmove",d);h=j=null}function d(e){e.preventDefault();var g=h-e.touches[0].pageX;e=j-e.touches[0].pageY;20<=Math.abs(g)?(b(),k=0<g?-1:1):20<=Math.abs(e)&&(b(),l=0<e?1:-1);a.type="swipe";f.unshift(a,k,l);return(c.event.dispatch||c.event.handle).apply(m,f)}var f= [].slice.call(arguments,1),e=a.originalEvent.touches,h,j,k=0,l=0,m=this;a=c.event.fix(a);1==e.length&&(h=e[0].pageX,j=e[0].pageY,this.addEventListener("touchmove",d,!1))}}})(jQuery);