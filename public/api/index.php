<?php
header('Content-Type: text/html; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] == 'GET' && realpath(__FILE__) == realpath($_SERVER['SCRIPT_FILENAME'])) {
    header('HTTP/1.0 403 Forbidden', TRUE, 403);
    die(header('location: /index.html'));
}

$body = json_decode(file_get_contents("php://input"));

$userPhone = $body->userPhone;
$userName = $body->userName;
$senderMail = $body->senderMail;
// $senderMailPass = $body->senderMailPass;
$senderMailPass = 'Dfghjkiuy789'; //Не очень хорошая идея передавать пароль в объекте :-)
$senderMailServer = $body->senderMailServer;
$senderMailInfo = $body->senderMailInfo;
$userName = $body->userName;
$userPhone = $body->userPhone;
$siteUrl = $body->siteUrl;
$recipientMail = $body->recipientMail;

$textToLog = date('d-m-Y G:i:s') . ' - ' . $userPhone . ' - ' . $userName . PHP_EOL;

$message = '<h3>Была составлена заявка на звонок с сайта <strong><a href="' . $siteUrl . '" target="_blank">"' . $siteUrl . '"</a></strong></h3>
<p>Информация по клиенту:</p>' . $textToLog;

$title = $senderMailInfo . ' ' . date('d-m-Y G:i:s') . '!';
require_once "./SendMailSmtpClass.php"; // подключаем класс

$mailSMTP = new SendMailSmtpClass($senderMail, $senderMailPass, $senderMailServer, $senderMailInfo, 465);
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
$headers .= "From: " . $senderMailInfo . " <" . $senderMail . ">\r\n"; // от кого письмо


function mailToLog($text)
{
    $fileName = 'mail.log';

    if (!file_exists($fileName)) {
        $file = fopen($fileName, 'w');
        fclose($file);
    }

    $file = fopen($fileName, 'a');
    fwrite($file, $text);
    fclose($file);
}

try {

    //Письмо клиенту
    $result = $mailSMTP->send($recipientMail, $title, $message, $headers);

    if ($result === true) {
        $message = "Сообщение отправлено";
        mailToLog($textToLog);

        echo json_encode($message);

    } else {
        $message = "error";
        // echo $message;
        echo json_encode($result);
    }
} catch (Exception $e) {
    echo json_encode('Error: ' . $e);
    // echo 'Error: '.$e;
}
