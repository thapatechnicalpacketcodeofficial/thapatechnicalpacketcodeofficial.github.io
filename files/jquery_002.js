(function(c){var b=c.browser.msie&&parseInt(c.browser.version)==6&&typeof window.XMLHttpRequest!="object",d=null,a=[];c.modal=function(f,e){return c.modal.impl.init(f,e)};c.modal.close=function(){c.modal.impl.close()};c.fn.modal=function(e){return c.modal.impl.init(this,e)};c.modal.defaults={appendTo:"body",focus:true,opacity:50,overlayId:"simplemodal-overlay",overlayCss:{},containerId:"simplemodal-container",containerCss:{},dataId:"simplemodal-data",dataCss:{},minHeight:200,minWidth:300,maxHeight:null,maxWidth:null,autoResize:false,autoPosition:true,zIndex:1000,close:true,closeHTML:'<a class="modalCloseImg" title="Close"></a>',closeClass:"simplemodal-close",escClose:true,overlayClose:false,position:null,persist:false,onOpen:null,onShow:null,onClose:null};c.modal.impl={o:null,d:{},init:function(g,e){var f=this;if(f.d.data){return false}d=c.browser.msie&&!c.boxModel;f.o=c.extend({},c.modal.defaults,e);f.zIndex=f.o.zIndex;f.occb=false;if(typeof g=="object"){g=g instanceof jQuery?g:c(g);if(g.parent().parent().size()>0){f.d.parentNode=g.parent();if(!f.o.persist){f.d.orig=g.clone(true)}}}else{if(typeof g=="string"||typeof g=="number"){g=c("<div></div>").html(g)}else{alert("SimpleModal Error: Unsupported data type: "+typeof g);return f}}f.create(g);g=null;f.open();if(c.isFunction(f.o.onShow)){f.o.onShow.apply(f,[f.d])}return f},create:function(f){var e=this;a=e.getDimensions();if(b){e.d.iframe=c('<iframe src="javascript:false;"></iframe>').css(c.extend(e.o.iframeCss,{display:"none",opacity:0,position:"fixed",height:a[0],width:a[1],zIndex:e.o.zIndex,top:0,left:0})).appendTo(e.o.appendTo)}e.d.overlay=c("<div></div>").attr("id",e.o.overlayId).addClass("simplemodal-overlay").css(c.extend(e.o.overlayCss,{display:"none",opacity:e.o.opacity/100,height:a[0],width:a[1],position:"fixed",left:0,top:0,zIndex:e.o.zIndex+1})).appendTo(e.o.appendTo);e.d.container=c("<div></div>").attr("id",e.o.containerId).addClass("simplemodal-container").css(c.extend(e.o.containerCss,{display:"none",position:"fixed",zIndex:e.o.zIndex+2})).append(e.o.close&&e.o.closeHTML?c(e.o.closeHTML).addClass(e.o.closeClass):"").appendTo(e.o.appendTo);e.d.wrap=c("<div></div>").attr("tabIndex",-1).addClass("simplemodal-wrap").css({height:"100%",outline:0,width:"100%"}).appendTo(e.d.container);e.d.data=f.attr("id",f.attr("id")||e.o.dataId).addClass("simplemodal-data").css(c.extend(e.o.dataCss,{display:"none"})).appendTo("body");f=null;e.setContainerDimensions();e.d.data.appendTo(e.d.wrap);if(b||d){e.fixIE()}},bindEvents:function(){var e=this;c("."+e.o.closeClass).bind("click.simplemodal",function(f){f.preventDefault();e.close()});if(e.o.close&&e.o.overlayClose){e.d.overlay.bind("click.simplemodal",function(f){f.preventDefault();e.close()})}c(document).bind("keydown.simplemodal",function(f){if(e.o.focus&&f.keyCode==9){e.watchTab(f)}else{if((e.o.close&&e.o.escClose)&&f.keyCode==27){f.preventDefault();e.close()}}});c(window).bind("resize.simplemodal",function(){a=e.getDimensions();e.setContainerDimensions(true);if(b||d){e.fixIE()}else{e.d.iframe&&e.d.iframe.css({height:a[0],width:a[1]});e.d.overlay.css({height:a[0],width:a[1]})}})},unbindEvents:function(){c("."+this.o.closeClass).unbind("click.simplemodal");c(document).unbind("keydown.simplemodal");c(window).unbind("resize.simplemodal");this.d.overlay.unbind("click.simplemodal")},fixIE:function(){var e=this,f=e.o.position;c.each([e.d.iframe||null,e.d.overlay,e.d.container],function(r,k){if(k){var p="document.body.clientHeight",u="document.body.clientWidth",w="document.body.scrollHeight",t="document.body.scrollLeft",n="document.body.scrollTop",j="document.body.scrollWidth",h="document.documentElement.clientHeight",q="document.documentElement.clientWidth",o="document.documentElement.scrollLeft",x="document.documentElement.scrollTop",y=k[0].style;y.position="absolute";if(r<2){y.removeExpression("height");y.removeExpression("width");y.setExpression("height",""+w+" > "+p+" ? "+w+" : "+p+' + "px"');y.setExpression("width",""+j+" > "+u+" ? "+j+" : "+u+' + "px"')}else{var m,g;if(f&&f.constructor==Array){var v=f[0]?typeof f[0]=="number"?f[0].toString():f[0].replace(/px/,""):k.css("top").replace(/px/,"");m=v.indexOf("%")==-1?v+" + (t = "+x+" ? "+x+" : "+n+') + "px"':parseInt(v.replace(/%/,""))+" * (("+h+" || "+p+") / 100) + (t = "+x+" ? "+x+" : "+n+') + "px"';if(f[1]){var l=typeof f[1]=="number"?f[1].toString():f[1].replace(/px/,"");g=l.indexOf("%")==-1?l+" + (t = "+o+" ? "+o+" : "+t+') + "px"':parseInt(l.replace(/%/,""))+" * (("+q+" || "+u+") / 100) + (t = "+o+" ? "+o+" : "+t+') + "px"'}}else{m="("+h+" || "+p+") / 2 - (this.offsetHeight / 2) + (t = "+x+" ? "+x+" : "+n+') + "px"';g="("+q+" || "+u+") / 2 - (this.offsetWidth / 2) + (t = "+o+" ? "+o+" : "+t+') + "px"'}y.removeExpression("top");y.removeExpression("left");y.setExpression("top",m);y.setExpression("left",g)}}})},focus:function(h){var f=this,g=h||"first";var e=c(":input:enabled:visible:"+g,f.d.wrap);e.length>0?e.focus():f.d.wrap.focus()},getDimensions:function(){var f=c(window);var e=c.browser.opera&&c.browser.version>"9.5"&&c.fn.jquery<="1.2.6"?document.documentElement.clientHeight:c.browser.opera&&c.browser.version<"9.5"&&c.fn.jquery>"1.2.6"?window.innerHeight:f.height();return[e,f.width()]},getVal:function(e){return e=="auto"?0:e.indexOf("%")>0?e:parseInt(e.replace(/px/,""))},setContainerDimensions:function(h){var j=this;if(!h||(h&&j.o.autoResize)){var i=j.getVal(j.d.container.css("height")),e=j.getVal(j.d.container.css("width")),k=j.d.data.outerHeight(true),g=j.d.data.outerWidth(true);var f=j.o.maxHeight&&j.o.maxHeight<a[0]?j.o.maxHeight:a[0],l=j.o.maxWidth&&j.o.maxWidth<a[1]?j.o.maxWidth:a[1];if(!i){if(!k){i=j.o.minHeight}else{if(k>f){i=f}else{if(k<j.o.minHeight){i=j.o.minHeight}else{i=k}}}}else{i=i>f?f:i}if(!e){if(!g){e=j.o.minWidth}else{if(g>l){e=l}else{if(g<j.o.minWidth){e=j.o.minWidth}else{e=g}}}}else{e=e>l?l:e}j.d.container.css({height:i,width:e});if(k>i||g>e){j.d.wrap.css({overflow:"auto"})}}if(j.o.autoPosition){j.setPosition()}},setPosition:function(){var f=this,h,g,i=(a[0]/2)-(f.d.container.outerHeight(true)/2),e=(a[1]/2)-(f.d.container.outerWidth(true)/2);if(f.o.position&&Object.prototype.toString.call(f.o.position)==="[object Array]"){h=f.o.position[0]||i;g=f.o.position[1]||e}else{h=i;g=e}f.d.container.css({left:g,top:h})},watchTab:function(g){var f=this;if(c(g.target).parents(".simplemodal-container").length>0){f.inputs=c(":input:enabled:visible:first, :input:enabled:visible:last",f.d.data[0]);if((!g.shiftKey&&g.target==f.inputs[f.inputs.length-1])||(g.shiftKey&&g.target==f.inputs[0])||f.inputs.length==0){g.preventDefault();var h=g.shiftKey?"last":"first";setTimeout(function(){f.focus(h)},10)}}else{g.preventDefault();setTimeout(function(){f.focus()},10)}},open:function(){var e=this;e.d.iframe&&e.d.iframe.show();if(c.isFunction(e.o.onOpen)){e.o.onOpen.apply(e,[e.d])}else{e.d.overlay.show();e.d.container.show();e.d.data.show()}e.focus();e.bindEvents()},close:function(){var e=this;if(!e.d.data){return false}e.unbindEvents();if(c.isFunction(e.o.onClose)&&!e.occb){e.occb=true;e.o.onClose.apply(e,[e.d])}else{if(e.d.parentNode){if(e.o.persist){e.d.data.hide().appendTo(e.d.parentNode)}else{e.d.data.hide().remove();e.d.orig.appendTo(e.d.parentNode)}}else{e.d.data.hide().remove()}e.d.container.hide().remove();e.d.overlay.hide().remove();e.d.iframe&&e.d.iframe.hide().remove();e.d={}}}}})(jQuery);