var o_confCommon={centeredPage:false,headerDisplay:true,domainTitle:"espace client",domainUrl:"https://r.orange.fr/r/OGespaceclient_accueil",domainRef:"notchanged",searchEngines:[{display:"relation client",label:"besoin d'aide sur vos services...",title:"rechercher dans l'espace client",use:true,url:"//completion.ke.voila.fr/fr/completion_assistance/xml/fullxml",plugins:["Petale"],queryParamName:"kw",additionalParams:"dtd=2.0&cbf=BLCompletion.cmpl",blocks:[{baseId:"-ael",max:8,label:""}],submitFunc:function(b){var a=document.createElement("input");a.setAttribute("name","provenance");a.setAttribute("value","care");a.setAttribute("type","hidden");document.getElementById("formSearchCompletion").appendChild(a);document.getElementById("formSearchCompletion").action="http://assistance.orange.fr/recherche.php";document.getElementById("formSearchCompletion").submit()}}]};if(typeof o_bHeaderDeframe!="undefined"){o_confCommon.headerDeframe=o_bHeaderDeframe}function o_setWGService(a){a=a||false;var b="";if(o_confCommon.serviceTitle!=""){if(o_confCommon.serviceUrl!=""){b+='<a class="o_service'+(o_confCommon.serviceRef!=""?" o_r_"+o_confCommon.serviceRef:"")+'" title="'+o_confCommon.serviceTitle+'" href="'+o_confCommon.serviceUrl+'" target="'+o_confCommon.serviceTarget+'">'+o_confCommon.serviceTitle+"</a>"}else{b+='<span class="o_service">'+o_confCommon.serviceTitle+"</span>"}}if(!a){return b}if(!document.getElementById("o_service")){return false}var f=document.getElementById("o_service").getElementsByTagName("div");var e=false;var g=f.length;for(var d=0;d<g;d++){if(f[d].className.indexOf("o_titleBlock")!=-1){f=f[d];e=true;break}}if(!e){return}var h=[];h.concat(f.getElementsByTagName("a"),f.getElementsByTagName("span"));for(var d=h.length;d--;){if(h[d].className=="o_service"){f.removeChild(h[d])}}f.className="o_titleBlock "+(o_confCommon.serviceTitle!=""?"":"domainOnly");if(b!=""){var c=document.createElement("div");c.innerHTML=b;f.appendChild(c.firstChild)}}var bntUtils={widget:{carousel:{}}};bntUtils.defer={_readyCalled:false,_deferedList:null,deferEvent:function(b,a){if(typeof bntUtils.defer._deferedList!="function"){bntUtils.defer._bindReady();bntUtils.defer._deferedList=function(){b.call(a)}}else{var c=bntUtils.defer._deferedList;bntUtils.defer._deferedList=function(){c();b.call(a)}}},_bindReady:function(){if(document.readyState==="complete"){setTimeout(bntUtils.defer._ready,1);return}if(document.addEventListener){document.addEventListener("DOMContentLoaded",bntUtils.defer._ready,false)}bntUtils.addEventListener(window,"load",bntUtils.defer._ready)},_ready:function(){if(bntUtils.defer._readyCalled){return}if(!document.body){setTimeout(bntUtils.defer._ready,1);return}bntUtils.defer._readyCalled=true;bntUtils.defer._deferedList()}};bntUtils.addEventListener=function(b,a,c){if(b.addEventListener){b.addEventListener(a,c,false)}else{if(b.attachEvent){b.attachEvent("on"+a,c)}}};bntUtils.removeEventListener=function(b,a,c){if(b.removeEventListener){b.removeEventListener(a,c,false)}else{if(b.detachEvent){b.detachEvent("on"+a,c)}}};bntUtils.byClass=function(d,f){f=f||document;if(!f.getElementsByClassName){var c;var b=[];var e=new RegExp("(^|\\s)"+d+"(\\s|$)");for(var a=0,g=f.all.length;a<g;a+=1){c=f.all[a];if(e.test(c.className)){b.push(c)}}return b}return f.getElementsByClassName(d)};bntUtils.deferEvent=bntUtils.defer.deferEvent;bntUtils.addClass=function(b,a){if(!bntUtils.hasClass(b,a)){newClassName=b.className;newClassName+=" ";newClassName+=a;b.className=newClassName}};bntUtils.hasClass=function(b,a){return b.className.match(new RegExp("(\\s|^)"+a+"(\\s|$)"))};bntUtils.removeClass=function(c,a){if(bntUtils.hasClass(c,a)){var b=new RegExp("(\\s|^)"+a+"(\\s|$)");c.className=c.className.replace(b," ")}};bntUtils.destroy=function(a){if(typeof a=="string"){a=document.getElementById(a)}if(a){if(a.parentNode){a.parentNode.removeChild(a)}delete a}};bntUtils.preventDefault=function(a){a=a||window.event;if(a.preventDefault){a.preventDefault()}a.returnValue=false};bntUtils.stopPropagation=function(a){a=a||window.event;if("bubbles" in a){if(a.bubbles){a.stopPropagation()}}else{a.cancelBubble=true}};bntUtils.loadScript=function(node){if(typeof node=="string"){node=document.getElementById(node)}if(node){eval(node.innerHTML)}};bntUtils.getIeVersion=function(){var c=-1;if(navigator.appName=="Microsoft Internet Explorer"){var a=navigator.userAgent;var b=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");if(b.exec(a)!=null){c=parseFloat(RegExp.$1)}}return c};bntUtils.windowWidth=function(){return window.innerWidth?window.innerWidth:document.documentElement.clientWidth};bntUtils.windowHeight=function(){return window.innerHeight?window.innerHeight:document.documentElement.clientHeight};bntUtils.scrollX=function(){return window.scrollX?window.scrollX:document.documentElement.scrollLeft};bntUtils.scrollY=function(){return window.scrollY?window.scrollY:document.documentElement.scrollTop};bntUtils.includeCss=function(d,c){var a=document.head||document.getElementsByTagName("head")[0]||document.documentElement;var b=document.createElement("link");b.setAttribute("type","text/css");b.setAttribute("href",d);b.setAttribute("rel","stylesheet");if(c){a.insertBefore(b,c)}else{a.appendChild(b)}};bntUtils.widget.carousel.BaseCarousel=function(){this.currentPage=0;this.autoScrollDelay=3000;this.autoScrollLeftToRightWay=false;this.itemCountByPage=1};bntUtils.widget.carousel.BaseCarousel.prototype.getItemCount=function(){if(isIe){var b=0;for(var a=0;a<this.itemContainer.childNodes.length;a++){if(this.itemContainer.childNodes[a].nodeType===1){b++}}return b}return this.itemContainer.children.length};bntUtils.widget.carousel.BaseCarousel.prototype.getPageCount=function(){return Math.ceil(this.getItemCount()/this.itemCountByPage)};bntUtils.widget.carousel.BaseCarousel.prototype.getItemPosition=function(c){var a=-1;for(var b=0;b<this.itemContainer.children.length;b++){if(this.itemContainer.children[b].nodeType==1){a++}if(this.itemContainer.children[b].id==c){return a}}return -1};bntUtils.widget.carousel.BaseCarousel.prototype.getItemPage=function(b){var a=this.getItemPosition(b);if(a<0){return a}return Math.floor(a/this.itemCountByPage)};bntUtils.widget.carousel.BaseCarousel.prototype.scrollPrev=function(){this.scrollTo(this.currentPage-1)};bntUtils.widget.carousel.BaseCarousel.prototype.scrollNext=function(){this.scrollTo(this.currentPage+1)};bntUtils.widget.carousel.BaseCarousel.prototype.scrollTo=function(a){if(!this._isValidPage(a)){return}this._doScrollTo(a);this.currentPage=a};bntUtils.widget.carousel.BaseCarousel.prototype.startAutoScroll=function(){if(this.getItemCount()<2){return}var a=this;this.timerId=setInterval(function(){a._autoScroll()},this.autoScrollDelay)};bntUtils.widget.carousel.BaseCarousel.prototype.stopAutoScroll=function(){if(this.timerId!==null){clearInterval(this.timerId)}};bntUtils.widget.carousel.BaseCarousel.prototype._getPageId=function(a){return this.widgetNode.id+"-page"+a};bntUtils.widget.carousel.BaseCarousel.prototype._isValidPage=function(a){return a>=0&&a<this.getPageCount()};bntUtils.widget.carousel.BaseCarousel.prototype._autoScroll=function(){if(this.currentPage===0||this.currentPage===this.itemContainer.childNodes.length-1){this.autoScrollLeftToRightWay=!this.autoScrollLeftToRightWay}var a=this.autoScrollLeftToRightWay?this.currentPage+1:this.currentPage-1;this.scrollTo(a)};bntUtils.widget.carousel.PaginationCarousel=function(){this.itemCountByPage=5};bntUtils.widget.carousel.PaginationCarousel.prototype=new bntUtils.widget.carousel.BaseCarousel();bntUtils.widget.carousel.PaginationCarousel.prototype.constructor=bntUtils.widget.carousel.PaginationCarousel;bntUtils.widget.carousel.PaginationCarousel.prototype.startup=function(d,a,c){this.widgetNode=document.getElementById(d);this.windowNode=document.getElementById(a);this.itemContainer=document.getElementById(c);var b=this.getPageCount();if(b>1){this.prevArrowNode=this._createArrowNode("arrow prev","<",this._makeArrowOnclickEvent(false));this.nextArrowNode=this._createArrowNode("arrow next",">",this._makeArrowOnclickEvent(true));this.widgetNode.insertBefore(this.prevArrowNode,this.windowNode);this.widgetNode.appendChild(this.nextArrowNode)}this.scrollTo(0)};bntUtils.widget.carousel.PaginationCarousel.prototype._createArrowNode=function(c,b,a){var d=document.createElement("div");d.className=c;d.innerHTML='<a href="javascript:void(0)">'+b+"</a>";d.onclick=a;return d};bntUtils.widget.carousel.PaginationCarousel.prototype._enableArrow=function(b,c){var a=c?"removeClass":"addClass";bntUtils[a](b,"dis")};bntUtils.widget.carousel.PaginationCarousel.prototype._makeArrowOnclickEvent=function(b){var c=this,a=b?this.scrollNext:this.scrollPrev;return function(d){a.call(c);bntUtils.preventDefault(d)}};bntUtils.widget.carousel.PaginationCarousel.prototype._doScrollTo=function(a){var b=-this.windowNode.clientWidth*a;this.itemContainer.style.marginLeft=b+"px";if(this.getPageCount()>1){this._enableArrow(this.prevArrowNode,a>0);this._enableArrow(this.nextArrowNode,a<this.getPageCount()-1)}};bntUtils.widget.carousel.ContractCarousel=function(){this.itemCountByPage=3};bntUtils.widget.carousel.ContractCarousel.prototype=new bntUtils.widget.carousel.BaseCarousel();bntUtils.widget.carousel.ContractCarousel.prototype.constructor=bntUtils.widget.carousel.ContractCarousel;bntUtils.widget.carousel.ContractCarousel.prototype.startup=function(a,f,b){this.widgetNode=document.getElementById(a);this.windowNode=document.getElementById(f);this.itemContainer=document.getElementById(b);var e=this.itemContainer.getElementsByTagName("a");var h=e.length;var j=this;for(i=0;i<h;i++){e[i].onfocus=function(){this.parentNode.parentNode.parentNode.parentNode.scrollLeft=0;j.scrollTo(j.getItemPage(this.parentNode.parentNode.id))}}var c=this.getPageCount();if(c>1){var g=this._createPaginationNode();this.widgetNode.appendChild(g);this.paginationCarousel=new bntUtils.widget.carousel.PaginationCarousel();this.paginationCarousel.startup("contractCarouselPagination","contractCarouselPaginationWindow","contractCarouselPageContainer");var d=this._createArrowContainer();this.widgetNode.appendChild(d)}this.windowNode.style.overflowX="hidden";this.scrollTo(0)};bntUtils.widget.carousel.ContractCarousel.prototype._createPaginationNode=function(){var b=this.getPageCount(),e,c;e=document.createElement("div");e.id="contractCarouselPagination";e.className="pagination";var d=document.createElement("div");d.id="contractCarouselPaginationWindow";e.appendChild(d);var a=document.createElement("ul");a.id="contractCarouselPageContainer";d.appendChild(a);for(c=0;c<b;c++){a.appendChild(this._createPageNode(c))}return e};bntUtils.widget.carousel.ContractCarousel.prototype._createPageNode=function(a){var b=document.createElement("li");b.id=this._getPageId(a);b.innerHTML='<a href="#">'+(a+1)+"</a>";b.onclick=this._makePageOnclickEvent(a);return b};bntUtils.widget.carousel.ContractCarousel.prototype._makePageOnclickEvent=function(b){var a=this;return function(c){a.scrollTo.call(a,b);bntUtils.preventDefault(c)}};bntUtils.widget.carousel.ContractCarousel.prototype._createArrowContainer=function(){var a=document.createElement("ul");a.className="arrows";this.prevArrowNode=this._createArrowNode("prev","Pr&eacute;c&eacute;dent",this._makeArrowOnclickEvent(false));this.nextArrowNode=this._createArrowNode("next","Suivant",this._makeArrowOnclickEvent(true));a.appendChild(this.prevArrowNode);a.appendChild(this.nextArrowNode);return a};bntUtils.widget.carousel.ContractCarousel.prototype._createArrowNode=function(b,d,a){var c=document.createElement("li");c.innerHTML='<a href="#" class="'+b+'" title="'+d+'"></a>';c.onclick=a;return c};bntUtils.widget.carousel.ContractCarousel.prototype._enableArrow=function(b,c){var a=c?"removeClass":"addClass";bntUtils[a](b,"dis")};bntUtils.widget.carousel.ContractCarousel.prototype._makeArrowOnclickEvent=function(b){var c=this,a=b?this.scrollNext:this.scrollPrev;return function(d){a.call(c);bntUtils.preventDefault(d)}};bntUtils.widget.carousel.ContractCarousel.prototype._doScrollTo=function(a){var b=-this.windowNode.clientWidth*a;this.itemContainer.style.marginLeft=b+"px";if(this.getPageCount()>1){bntUtils.removeClass(document.getElementById(this._getPageId(this.currentPage)),"on");bntUtils.addClass(document.getElementById(this._getPageId(a)),"on");this.paginationCarousel.scrollTo(Math.floor(a/this.paginationCarousel.itemCountByPage));this._enableArrow(this.prevArrowNode,a>0);this._enableArrow(this.nextArrowNode,a<this.getPageCount()-1)}};bntUtils.widget.underlay={id:"necfe_underlay",show:function(){var a=this._getNode();a.style.display="block"},hide:function(){var a=this._getNode();a.style.display="none"},_getNode:function(){var a=document.getElementById(this.id);if(!a){a=document.createElement("div");a.setAttribute("id",this.id);a.style.display="none";var b=document.createElement("div");b.className="fe_underlay";a.appendChild(b);document.body.appendChild(a)}return a}};bntUtils.widget.Popin=function(){this.id="ecarePopin";this.closeHandler=null};bntUtils.widget.Popin.prototype.open=function(g,f,h,d){if(this.isOpened()){this.close()}if(typeof(d)!=="undefined"){this.callerElement=d}this._disablePageFields();var e=this._getNode(),c=this;f=f||{};h=h||{};h.url=h.url||"javascript:void(0)";h.js=h.js||function(){c.close()};h.html=h.html||"fermer";h.className=h.className||"btnClose";if(!document.getElementById("fe_popin_content")){this.popinNode=document.createElement("div");this.popinNode.className="fe_popin";this.popinNode.id="fe_popin_content"}else{this.popinNode=document.getElementById("fe_popin_content");this.popinNode.innerHTML=""}if(f.w){this.popinNode.style.width=f.w+"px"}if(f.h){this.popinNode.style.height=f.h+"px"}e.appendChild(this.popinNode);if(h.disabled!==true){var b=document.createElement("a");b.innerHTML=h.html;b.className=h.className;b.setAttribute("href",h.url);b.onclick=h.js;this.popinNode.appendChild(b)}var a;if(typeof(g)==="string"){a=document.createElement("div");a.innerHTML=g}else{a=g}this.popinNode.appendChild(a);bntUtils.widget.underlay.show();this.closeHandler=this._registerCloseShortcut();e.style.display="block";this.center();this.popinNode.tabIndex="1";this.popinNode.focus()};bntUtils.widget.Popin.prototype.close=function(){var a=this._getNode();if(this.closeHandler){bntUtils.removeEventListener(document,"keydown",this.closeHandler);this.closeHandler=null}a.style.display="none";bntUtils.widget.underlay.hide();bntUtils.destroy(this.popinNode);this._resetPageFields();if(this.callerElement!==undefined){this.callerElement.tabIndex="0";this.callerElement.focus()}};bntUtils.widget.Popin.prototype.center=function(){var b=bntUtils.windowWidth()-this.popinNode.offsetWidth,a=bntUtils.windowHeight()-this.popinNode.offsetHeight,d=((a<=0)?0:a/2)+bntUtils.scrollY(),c=((b<=0)?0:b/2)+bntUtils.scrollX();this.popinNode.style.top=d+"px";this.popinNode.style.left=c+"px"};bntUtils.widget.Popin.prototype.isOpened=function(){return this._getNode().style.display==="block"};bntUtils.widget.Popin.prototype._getNode=function(){var a=document.getElementById(this.id);if(!a){a=document.createElement("div");a.setAttribute("id",this.id);a.className="fe_popinMask";a.style.display="none";document.body.insertBefore(a,document.body.childNodes[0])}return a};bntUtils.widget.Popin.prototype._registerCloseShortcut=function(){var a=this;var b=function(c){c=c||window.event;if((c.keyCode||c.charCode)===27){a.close()}};bntUtils.addEventListener(document,"keydown",b);return b};bntUtils.widget.Popin.prototype._disablePageFields=function(){this.focusElement=new Array;var c,g=document.getElementsByTagName("a"),f=g.length,b=document.getElementsByTagName("input"),a=b.length,d=document.getElementsByTagName("textarea"),e=d.length;for(c=0;c<f;c++){this.focusElement.push(g[c])}for(c=0;c<a;c++){this.focusElement.push(b[c])}for(c=0;c<e;c++){this.focusElement.push(d[c])}this.focusElementLength=this.focusElement.length;for(c=0;c<this.focusElementLength;c++){this.focusElement[c].tabIndex="-1"}};bntUtils.widget.Popin.prototype._resetPageFields=function(){for(var a=0;a<this.focusElementLength;a++){this.focusElement[a].tabIndex=""}};bntUtils.widget.popin=new bntUtils.widget.Popin();bntUtils.widget.IccPopin=function(){};bntUtils.widget.IccPopin.prototype=new bntUtils.widget.Popin();bntUtils.widget.IccPopin.prototype.cancel=function(){setTimeout(function(){dontAsk("CLOSED")},200)};bntUtils.widget.IccPopin.prototype._registerCloseShortcut=function(){var a=this;var b=function(c){c=c||window.event;if((c.keyCode||c.charCode)===27){a.cancel()}};bntUtils.addEventListener(document,"keydown",b);return b};bntUtils.widget.iccPopin=new bntUtils.widget.IccPopin();isIe=navigator.userAgent.toLowerCase().indexOf("msie")+1;var necFe={rootUrl:"//espaceclientv3.orange.fr/",lib:{}};necFe.lib.Zone=function(){this.container=document.createElement("div")};necFe.lib.Zone.prototype.writeContent=function(){if(document.getElementById(this.zoneId)){this._appendChild()}else{bntUtils.deferEvent(this._appendChild,this)}};necFe.lib.Zone.prototype._appendChild=function(){var a=document.getElementById(this.zoneId);if(a){a.parentNode.insertBefore(this.container,a);a.parentNode.removeChild(a);this.container.setAttribute("id",this.zoneId)}};necFe.lib.Bandeau=function(){necFe.lib.Zone.call(this);this.arianeLinks=[];this.zoneId="necfe_bandeau";this.addContractPopinFlag=false;this.contractCarouselFlag=false;bntUtils.addClass(this.container,"bnt fe_clearfix")};necFe.lib.Bandeau.prototype=new necFe.lib.Zone();necFe.lib.Bandeau.prototype.constructor=new necFe.lib.Bandeau();necFe.lib.Bandeau.prototype._appendChild=function(){necFe.lib.Zone.prototype._appendChild.call(this);var a=bntUtils.getIeVersion();if(a!=-1){bntUtils.addClass(document.documentElement,"fe_ie"+a)}this.init();if(this.type==2){necFe.bandeau.removeShowContractsLink();necFe.bandeau.removeAddContractLink()}};necFe.lib.Bandeau.prototype.setTitle=function(a){document.getElementById("bntTitle").innerHTML=a};necFe.lib.Bandeau.prototype.hideTitle=function(){document.getElementById("bntTitle").style.display="none"};necFe.lib.Bandeau.prototype.onShowContractsLinkClick=function(b){var a=document.getElementById("showContractsBtn");if(a){bntUtils.addClass(a,"loading")}var c=(b.target)?b.target:b.srcElement;this.openShowContractsPopin(c);bntUtils.preventDefault(b)};necFe.lib.Bandeau.prototype.removeShowContractsLink=function(){bntUtils.destroy("showContractsBtn")};necFe.lib.Bandeau.prototype.openShowContractsPopin=function(b){if(this.contractCarouselHtml==undefined&&this.contractCarouselFlag==false){var a=this;this.contractCarouselFlag=true;bnt_includeJs(necFe.rootUrl+"ajax.php?operation=fetchCarouselZone",function(){a._initShowContractsPopin(a.contractCarouselHtml,b)})}else{if(this.contractCarouselHtml!=undefined){this._initShowContractsPopin(this.contractCarouselHtml,b)}}};necFe.lib.Bandeau.prototype._initShowContractsPopin=function(e,d){var c=document.getElementById("showContractsBtn");if(c){bntUtils.removeClass(c,"loading")}bntUtils.widget.popin.open(e,{w:457,h:407},"",d);bntUtils.destroy("carrouselLienExtra");bntUtils.destroy("carrouselAjoutCompte");if(this.ick){var a=document.getElementById("carrouselContrat"+this.ick);bntUtils.addClass(a,"currentContract");a.setAttribute("onclick","");var b=bntUtils.byClass("lienBas",a)[0];b.innerHTML="<p>en cours de consultation...</p>"}this.contractCarousel=new bntUtils.widget.carousel.ContractCarousel();this.contractCarousel.startup("carrouselComptes","contractCarouselWindow","contractContainer")};necFe.lib.Bandeau.prototype.onAddContractLinkClick=function(b){this.WTtag(["DCSext.wasc_famille_nc",necFe.bandeau.wascTdbAddLink,"DCSext.wasc_lien_nc",necFe.bandeau.wascLienAddLink]);if(typeof FE_PAGE!="undefined"){var a=document.getElementById("addContractBtn");if(a){bntUtils.addClass(a,"loading")}var c=(b.target)?b.target:b.srcElement;this.openAddContractPopin(c);bntUtils.preventDefault(b)}};necFe.lib.Bandeau.prototype.removeAddContractLink=function(){bntUtils.destroy("addContractBtn")};necFe.lib.Bandeau.prototype.openAddContractPopin=function(b){content={operation:"fetchAddContractPopin"};if(this.addContractHtml==undefined&&this.addContractPopinFlag==false){var a=this;this.addContractPopinFlag=true;fetchJsonRequest("/ajax.php",function(c,d){a.addContractHtml=c.popinContent;a._initAddContractPopin(a.addContractHtml,b)},content)}else{if(this.addContractPopinFlag==false){this._initAddContractPopin(this.addContractHtml,b)}}};necFe.lib.Bandeau.prototype._initAddContractPopin=function(c,b){var a=dojo.byId("addContractBtn");if(a){dojo.removeClass(a,"loading")}bntUtils.widget.popin.open(c,{w:775},"",b);bntUtils.loadScript("addContractInit");dojo.require("ecare.form."+addContractFormClass);addContractForm=new ecare.form[addContractFormClass]("ajoutCompte_");addContractForm.startup();this.addContractPopinFlag=false};necFe.lib.Bandeau.prototype.setCurrentTab=function(a){var b=document.getElementById(a);if(b){bntUtils.addClass(b,"active")}};necFe.lib.Bandeau.prototype.removeTabs=function(){bntUtils.destroy("bnt_boutons")};necFe.lib.Bandeau.prototype.createAriane=function(){this.ariane=document.getElementById("bnt_ariane");while(this.ariane.hasChildNodes()){this.ariane.removeChild(this.ariane.firstChild)}if(this.arianeLinks.length>0){for(var a=0;a<this.arianeLinks.length;a++){var c=document.createElement("li");var b;if(a==0){c.className="bnt_ariancmn"}if(this.arianeLinks.length>1&&a<this.arianeLinks.length-1){b=document.createElement("a");b.setAttribute("href",this.arianeLinks[a].href);b.wascLien=(this.arianeLinks[a].wasc!=undefined?this.arianeLinks[a].wasc:this.arianeLinks[a].name);b.onclick=function(){var d=(necFe.bandeau.wascLienArianeLink!=""?necFe.bandeau.wascLienArianeLink:this.wascLien);necFe.bandeau.WTtag(["DCSext.wasc_famille_nc",necFe.bandeau.wascTdbArianeLink,"DCSext.wasc_lien_nc",d])};b.innerHTML=this.arianeLinks[a].name}else{b=document.createElement("span");b.innerHTML=this.arianeLinks[a].name}c.appendChild(b);this.ariane.appendChild(c)}}};necFe.lib.Bandeau.prototype.WTtag=function(b){b=b||new Array();var a=b.concat(["DCSext.wasc_typeMT","clic_new_care"]);if(this.perimeter!=undefined&&this.perimeter!=""){a=a.concat(["DCSext.wasc_perimetre",this.perimeter])}if(typeof dcsMultiTrack=="function"){dcsMultiTrack.apply(null,a)}};necFe.lib.Menu=function(){necFe.lib.Zone.call(this);this.zoneId="necfe_menu"};necFe.lib.Menu.prototype=new necFe.lib.Zone();necFe.lib.Menu.prototype.constructor=new necFe.lib.Menu();necFe.lib.Menu.prototype._appendChild=function(){necFe.lib.Zone.prototype._appendChild.call(this);this.updateDom(necFe.section)};necFe.lib.Menu.prototype.updateDom=function(c){var e=document.getElementById(c);if(e!=null){if(bntUtils.hasClass(e,"necfe_static")){this._enableSection(e)}else{if(bntUtils.hasClass(e,"n2")){var a=e.parentNode;for(var b=0;b<a.childNodes.length&&a.childNodes[b].nodeType!=1;b++){}if(b>=a.childNodes.length){return}var d=a.childNodes[b];if(bntUtils.hasClass(d,"n1")&&(bntUtils.hasClass(d,"toHighlight1")||bntUtils.hasClass(d,"off"))){this._enableSection(e)}}}}};necFe.lib.Menu.prototype._enableSection=function(a){if(a!=null){a.className=a.className+" on"}};necFe.lib.Rebond=function(){necFe.lib.Zone.call(this);this.zoneId="necfe_rebond"};necFe.lib.Rebond.prototype=new necFe.lib.Zone();necFe.lib.Rebond.prototype.constructor=new necFe.lib.Rebond();necFe.lib.Rebond.prototype._appendChild=function(){necFe.lib.Zone.prototype._appendChild.call(this);var b=this.container.getElementsByTagName("script"),c=b.length,a;for(a=0;a<c;a++){if(b[a].src===""){bntUtils.loadScript(b[a])}else{bnt_includeJs(b[a].src)}}};oSoshCommon={bandeau:{writeContent:function(a){document.getElementById("header").innerHTML=decodeURIComponent(a.html);oSoshCommon.bandeau.init()},init:function(){var c=document.getElementById("menu").getElementsByTagName("ul")[0].childNodes;for(var b=0;b<c.length;b++){if(c[b].nodeName!=="#text"){var a=0;var d=c[b].childNodes;for(var e=0;e<d.length;e++){if(d[e].nodeName!=="#text"){a++}}if(a>1){c[b].onmouseover=oSoshCommon.bandeau._makeDisplayEvent("block");c[b].onmouseout=oSoshCommon.bandeau._makeDisplayEvent("none")}}}},_makeDisplayEvent:function(a){return function(b){this.children[1].style.display=a}}},footer:{writeContent:function(a){document.getElementById("footer").innerHTML=decodeURIComponent(a.html)}},popin:{writeContent:function(h){var k=document.getElementById("popins");k.innerHTML=decodeURIComponent(h.html);var g=document.getElementById("footer").getElementsByTagName("a");for(var e=0;e<g.length;e++){var f=/#(popin_.+)$/.exec(g[e].getAttribute("href"));if(f!==null){var b=document.createElement("div");b.innerHTML=document.getElementById(f[1]).innerHTML;b.className="popin_2";b.style.display="block";g[e].onclick=oSoshCommon.popin._makeOpenEvent(b);var a=undefined;var d=b.getElementsByTagName("a");for(var c=d.length-1;c===0;c--){if(bntUtils.hasClass(d[c],"btClose")){a=d[c];break}}if(a===undefined&&d.length>0){a=d[d.length-1]}if(a!==undefined){a.onclick=oSoshCommon.popin._makeCloseEvent()}}}k.parentNode.removeChild(k)},_makeOpenEvent:function(a){return function(b){bntUtils.widget.popin.open(a,{},{disabled:true},this);return false}},_makeCloseEvent:function(){return function(a){bntUtils.widget.popin.close();return false}}}};function necfe_init(e,h,j,n,k,c,l,b,g){g=g||"";var a=e?e.split(";"):new Array();var m=new Date();necFe.section=n;necFe.bandeau=new necFe.lib.Bandeau();necFe.menu=new necFe.lib.Menu();necFe.rebond=new necFe.lib.Rebond();for(var f in a){switch(a[f]){case"bandeau":necFe.bandeau.perimeter=j;necFe.bandeau.sectionId=n;necFe.bandeau.ick=k;necFe.bandeau.type=h;break;case"menu":necFe.menu.perimeter=j;necFe.menu.sectionId=n;break;case"rebond":necFe.rebond.perimeter=j;necFe.rebond.sectionId=n;break}}var d=bnt_getCookie("necFeDomaine");if(d!=""){necFe.rootUrl=d}bnt_includeJs(necFe.rootUrl+"js/necfe.php?zonetype="+e+"&sectionId="+n+"&internalContractKey="+k+"&lineNumber="+c+"&bodyLineNumber="+l+"&idPage="+b+"&flag="+g+"&type="+h+"&noCache="+m.getTime())}function bnt_getCookie(a){deb=document.cookie.indexOf(a+"=");if(deb>=0){deb+=a.length+1;fin=document.cookie.indexOf(";",deb);if(fin<0){fin=document.cookie.length}return unescape(document.cookie.substring(deb,fin))}return""}function bnt_afficherBandeau(c,b,g,a){if(!document.getElementById("necfe_bandeau")){document.write('<div id="necfe_bandeau"></div>')}necfe_init("bandeau",c,b,g,"",a,"","");var f=document.getElementById("necfe_bandeau");f.style.marginLeft="0";var e=bnt_getPosition(f).x;var d=e<20?20-e:0;necFe.bandeau.container.style.marginLeft=d+"px";necFe.bandeau.container.style.marginBottom="0px"}function bnt_includeJs(d,c){var b=document.head||document.getElementsByTagName("head")[0]||document.documentElement;var a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src",d);a.setAttribute("charset","ISO-8859-15");if(c!=undefined){a.onload=a.onreadystatechange=function(f,e){if(e||!a.readyState||/loaded|complete/.test(a.readyState)){a.onload=a.onreadystatechange=null;if(b&&a.parentNode){b.removeChild(a)}a=undefined;if(!e){c()}}}}b.insertBefore(a,b.firstChild)}function bnt_getPosition(a){var c=0,b=0;while(a!=null){c+=a.offsetLeft-a.scrollLeft;b+=a.offsetTop-a.scrollTop;a=a.offsetParent}return{x:c,y:b}}function stripslashes(a){a=a.replace(/\\'/g,"'");a=a.replace(/\\"/g,'"');a=a.replace(/\\0/g,"\0");a=a.replace(/\\\\/g,"\\");return a}function necfeWT(b,a){if(typeof dcsMultiTrack=="function"){dcsMultiTrack("DCSext.wasc_lien_nc",b,"DCSext.wasc_famille_nc",a,"DCS.dcsuri","/","WT.dl",22,"DCSext.wasc_typeMT","clic_new_care")}}function sendWTAndCapping(g,e,c,b,a,f,d){necfeWT(e,c);setCapping(b,a,f);setTimeout(function(){document.location.href=d},600);bntUtils.preventDefault(g)}function setCapping(b,a,c){elmt=document.createElement("img");elmt.src=necFe.rootUrl+"i/setCapping.php?ick="+b+"&mainCode="+a+"&promotionCode="+c+"&cappingType=1";document.body.appendChild(elmt)}function openFreeDayPopup(b,c){var a=necFe.rootUrl+"ajax.php?operation=fadet&idContract="+b+"&idUsage="+c;bnt_includeJs(a,function(){bntUtils.widget.popin.close();bntUtils.widget.popin.open(fadetBack.html,{w:540});bntUtils.widget.popin.center()})}function validateFreeDayPopup(b,d){var e=false;var c=false;if(document.getElementById("periode1")&&document.getElementById("periode1").checked==true){e=true}if(document.getElementById("periode2")&&document.getElementById("periode2").checked==true){c=true}if(e==true||c==true){var a=necFe.rootUrl+"ajax.php?operation=fadet&idContract="+b+"&idUsage="+d+"&validate=true&coche1="+e+"&coche2="+c;bnt_includeJs(a,function(){bntUtils.widget.popin.close();bntUtils.widget.popin.open(fadetBack.html,{w:540});bntUtils.widget.popin.center()})}else{document.getElementById("fadetError").style.display="block"}return false}var cookieManager={set:function(a,d,b){var c=null;if(b=="session"){c=escape(d)+"; expires=0; path=/"}else{var e=new Date();e.setDate(e.getDate()+b);c=escape(d)+((b==null)?"":"; expires="+e.toUTCString())+"; path=/"}document.cookie=a+"="+c},get:function(b){var c,a,e,d=document.cookie.split(";");for(c=0;c<d.length;c++){a=d[c].substr(0,d[c].indexOf("="));e=d[c].substr(d[c].indexOf("=")+1);a=a.replace(/^\s+|\s+$/g,"");if(a==b){return unescape(e)}}return null},del:function(a){this.set(a,"",-1)}};var p_alpha={active:true,codes:[38,38,40,40,37,39,37,39,66,65],keys:[],init:function(){if(this.active){bntUtils.addEventListener(document,"keydown",function(a){p_alpha.checkKeyCodes(a)})}},checkKeyCodes:function(a){a=a||window.event;keyCode=a.keyCode?a.keyCode:a.which;this.keys.push(keyCode);if(this.codes.toString().indexOf(this.keys.toString())<0){this.keys=[];this.keys.push(keyCode)}if(this.keys.toString()==this.codes.toString()){this.keys=[];this.load()}},load:function(){cookieManager.set("palpha","active",1);window.location.href="/telematique.php"}};window.onload=function(a){p_alpha.init()};