<?php
header("Access-Control-Allow-Origin: *");
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'vendor/autoload.php';



$mysqli = mysqli_connect('localhost', 'root', '', 'porte_ouverte');
$mysqli->set_charset('utf8');

$data = json_decode(file_get_contents('php://input'), true);

if($data['type'] == "add_user"){

    $formation = "";

    if($data['CG']){
        $formation.= 'CG/';
    }
    if($data['MCO']){
        $formation.= 'MCO/';
    }

    if($data['NDRC']){
        $formation.= 'NDRC/';
    }

    if($data['SIO']){
        $formation.= 'SIO/';
    }

    if($data['bachelor_info']){
        $formation.= 'Bachelor Informatique/';
    }
    if($data['bachelor_market']){
        $formation.= "Bachelor Marketing/";
    }

    if($data['newsletter']){
        $com = 1;
    }else{
        $com = 0;
    }

    $requete_add_user = "INSERT INTO users (nom, prenom, mail, telephone, adresse, ville, code_postal, formation, communication, heure_inscription) VALUES ('".$data['nom']."', '".$data['prenom']."', '".$data['mail']."', '".$data['tel']."', '".$data['adresse']."', '".$data['ville']."', '".$data['cp']."', '".$formation."', '".$com."', NOW())";

    if($mysqli->query($requete_add_user)){
        echo json_encode(TRUE);
    }else{
        echo json_encode($mysqli->error);
    }
}elseif($data['type'] == 'excel'){
    
    $requete_user = "SELECT * FROM users";
    $result_user = $mysqli->query($requete_user);
    $csv = "Nom;Prenom;Mail;Télephone;Adresse;Ville;Code Postale;Formation;Comunnication autorisée ?;Date:Heure;" . PHP_EOL;
    while($row = mysqli_fetch_array($result_user)){

        $csv .= $row['nom'] . ';' . $row['prenom'] . ';' . $row['mail'] . ';' . $row['telephone'] . ';' . $row['adresse'] . ';' . $row['ville'] . ';' . $row['code_postal'] . ';' . $row['formation'] . ';' . $row['communication'] . ';' . $row['heure_inscription'] . PHP_EOL;
    }

    file_put_contents('./tmp/Excel_file.csv', $csv);

    $mail = new PHPMailer(true);

    try {
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp-mail.outlook.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'guillemin.mathieu@outlook.com';                     //SMTP username
        $mail->Password   = 'A8u63q5c';                               //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;           //Enable implicit TLS encryption
        $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    
        //Recipients
        $mail->setFrom('guillemin.mathieu@outlook.com', 'Porte Ouvertes');
        $mail->addAddress($data['mail'], 'Joe User');     //Add a recipient             //Name is optional
    
    
        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'Document Excel d\'enregistrements aux portes-ouverte';
        $mail->Body    = 'Ci-joint, le document.';
        $mail->AltBody = 'Ci-joint, le document.';

        $mail->AddAttachment('./tmp/Excel_file.csv', 'Excel.csv');
    
        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
    
}