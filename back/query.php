<?php
header("Access-Control-Allow-Origin: *");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;
// use Dotenv;

require 'vendor/autoload.php';


// echo getenv("DB_USER");
// echo getenv("DB_HOST");
// echo getenv("DB_PASSWORD");
// echo getenv("DB_NAME");
// echo getenv("DB_PORT");

// $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
// $dotenv->load();

$mysqli = mysqli_connect(getenv("DB_HOST"), getenv("DB_USER"), getenv("DB_PASSWORD"), getenv("DB_NAME"), getenv("DB_PORT"));
if (!$mysqli) {
    echo mysqli_connect_error();
}
$mysqli->set_charset('utf8');


$requete_table = "CREATE TABLE IF NOT EXISTS `users` (
        `id` int(10) PRIMARY KEY  NOT NULL AUTO_INCREMENT,
        `prenom` varchar(150) NOT NULL,
        `nom` varchar(250) NOT NULL,
        `mail` varchar(250) NOT NULL,
        `telephone` varchar(15) NOT NULL,
        `adresse` varchar(500) NOT NULL,
        `ville` varchar(150) NOT NULL,
        `code_postal` varchar(50) NOT NULL,
        `formation` varchar(200) NOT NULL,
        `communication` tinyint(1) NOT NULL,
        `heure_inscription` datetime NOT NULL
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
      ";
#
if (!$mysqli->query($requete_table)) {
    echo $mysqli->error;
};



$data = json_decode(file_get_contents('php://input'), true);


if (empty($data)) {
    exit();
}

if ($data['type'] == "add_user") {

    $formation = "";

    if ($data['CG']) {
        $formation .= 'CG/';
    }
    if ($data['MCO']) {
        $formation .= 'MCO/';
    }

    if ($data['NDRC']) {
        $formation .= 'NDRC/';
    }

    if ($data['SIO']) {
        $formation .= 'SIO/';
    }
    if ($data['GPME']) {
        $formation .= 'GPME/';
    }

    if ($data['bachelor_info']) {
        $formation .= 'Bachelor Informatique/';
    }
    if ($data['bachelor_market']) {
        $formation .= "Bachelor Marketing/";
    }
    if ($data['bachelor_DCG']) {
        $formation .= "Bachelor DCG/";
    }


    if ($data['newsletter']) {
        $com = 1;
    } else {
        $com = 0;
    }

    $requete_add_user = "INSERT INTO users (nom, prenom, mail, telephone, adresse, ville, code_postal, formation, communication, heure_inscription) VALUES ('" . $data['nom'] . "', '" . $data['prenom'] . "', '" . $data['mail'] . "', '" . $data['tel'] . "', '" . $data['adresse'] . "', '" . $data['ville'] . "', '" . $data['cp'] . "', '" . $formation . "', '" . $com . "', NOW())";

    if ($mysqli->query($requete_add_user)) {
        echo json_encode(TRUE);
    } else {
        echo json_encode($mysqli->error);
    }
} elseif ($data['type'] == 'excel') {

    $requete_user = "SELECT * FROM users";
    $result_user = $mysqli->query($requete_user);
    $csv = "Nom;Prenom;Mail;Télephone;Adresse;Ville;Code Postale;Formation;Comunnication autorisée ?;Date:Heure;" . PHP_EOL;
    while ($row = mysqli_fetch_array($result_user)) {

        $csv .= $row['nom'] . ';' . $row['prenom'] . ';' . $row['mail'] . ';' . $row['telephone'] . ';' . $row['adresse'] . ';' . $row['ville'] . ';' . $row['code_postal'] . ';' . $row['formation'] . ';' . $row['communication'] . ';' . $row['heure_inscription'] . PHP_EOL;
    }

    file_put_contents('./tmp/Excel_file.csv', $csv);

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp-mail.outlook.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = getenv("EMAIL_USER");                     //SMTP username
        $mail->Password   = getenv("EMAIL_PASS");                               //SMTP password
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
        echo json_encode(TRUE);
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
