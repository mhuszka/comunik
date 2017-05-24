<?php
$error = array();


if ($_SERVER["REQUEST_METHOD"] == "GET") {


    if (empty($_GET["nom"])) {

        $error['nom'] = true;

    } else {

        $error['nom'] = false;

    }


    if (empty($_GET["mail"])) {

        $error['mail'] = true;

    } else {

        $error['mail'] = false;

    }


    if(empty($_GET['message'])){

        $error['message'] = true;

    }else{

        $error['message'] = false;
    }
    
    
    if(!in_array(true, $error)){
        mail('reginaphalange088@laposte.net', 'Mail venant du site', $_GET["message"], 'From: "'.$_GET["nom"].'"<'.$_GET["mail"].'>');
    }
}


/*
    AVEC PHPMAILER

if(!in_array(true, $error)){

    require('PHPMailer/PHPMailerAutoload.php'); 

    $mail = new PHPMailer();
    $mail->Host = 'smtp.laposte.net';
    $mail->isSMTP();

    $mail->SMTPAuth = true;
    $mail->Port = 465; // 25 Par défaut
    $mail->SMTPSecure = "ssl";
    
    // Authentification
    $mail->Username = "reginaphalange088@laposte.net";
    $mail->Password = "Facile4deviner";

    // Expéditeur
    $mail->SetFrom($_GET["mail"], $_GET["nom"]);
    // Destinataire
    $mail->AddAddress('reginaphalange088@laposte.net', 'Phalange Regina');

    // Votre message
    $mail->MsgHTML($_GET["message"]);

    // Envoi du mail avec gestion des erreurs
    $mail->Send();
}*/

    

echo json_encode($error); 

?>    


