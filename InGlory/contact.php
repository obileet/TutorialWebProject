<?php
$errors  = '';
$myemail = 'mail@inglory.de';
if (empty($_POST['name']) || empty($_POST['email']) || empty($_POST['subject']) || empty($_POST['message'])) {
    $errors .= "\n Fehler: Bitte Füllen Sie diese Feld aus";
}

$name    = $_POST['name'];
$email   = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

if (!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/", $email)) {
    $errors .= "\n Fehler: Keine gültige E-Mail Adresse";
}

if (empty($errors)) {
    $to            = $myemail;
    $email_subject = "$subject";
    $email_body    = "\n Name: $name \n Email: $email \n Subject: $subject \n Message: \n $message";
    $headers       = "From: $email";
    
    mail($to, $email_subject, $email_body, $headers);
}
?>