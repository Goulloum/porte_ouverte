<?php


header("Access-Control-Allow-Origin: *");

$mysqli = mysqli_connect('localhost', 'root', '', 'porte_ouverte');
$mysqli->set_charset('utf8');

$data = json_decode(file_get_contents('php://input'), true);

if($data['type'] == "add_user"){

    $formation = "";

    if($data['CG']){
        $formation.= 'CG,';
    }
    if($data['MCO']){
        $formation.= 'MCO,';
    }

    if($data['NDRC']){
        $formation.= 'NDRC,';
    }

    if($data['SIO']){
        $formation.= 'SIO,';
    }

    if($data['bachelor_info']){
        $formation.= 'Bachelor Informatique,';
    }
    if($data['bachelor_market']){
        $formation.= "Bachelor Marketing,";
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
    $arr = [];
    while($row = mysqli_fetch_array($result_user)){
        $arr[] = [
            "Nom" => $row['nom'],
            "Prenom" => $row['prenom'],
            "Mail" => $row['mail'],
            "Téléphone" => $row['telephone'],
            "Adresse" => $row['adresse'],
            "Ville" => $row['ville'],
            "Code Postale" => $row['code_postal'],
            "Formation" => $row['formation'],
            "Communication autorisée ?" => $row['communication'],
            "Date:Heure" => $row['heure_inscription']
        ];
    }

    echo json_encode($arr);
    
}