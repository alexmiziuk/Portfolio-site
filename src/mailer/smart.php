<?php 

$name = $_POST['name'];
$surname = $_POST['surname']; // Получение значения из поля имени
$email = $_POST['email'];
$telephone = $_POST['telephone']; // Получение значения из поля электронной почты
$text = $_POST['message']; // Получение значения из поля сообщения

// Проверка наличия файла PHPMailerAutoload.php
if (!file_exists('phpmailer/PHPMailerAutoload.php')) {
	die('Файл PHPMailerAutoload.php не найден');
}

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'muzikbasss@gmail.com';                 // Наш логин
$mail->Password = 'jwxxadmphdcciurd';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('muzikbasss@gmail.com', 'Portfolio-site');   // От кого письмо 
$mail->addAddress('oleksandr.miziyk@gmail.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Podatki';
$mail->Body    = '
	Uporabnik je zapustil podatke <br> 
	Ime: ' . $name . ' <br>
	Priimek: ' . $surname . ' <br>
	Telefon: ' . $telephone . ' <br>
	Sporočilo: ' . $text . '<br>
	E-mail: ' . $email . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>