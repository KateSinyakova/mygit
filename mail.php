<?php
require 'phpmailer/PHPmailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$title = "Тема письма";
foreach ($_POST as $key => $value) {
  if ($value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject") {
    $body .= "
    " . (($c = !$c) ? '<tr>' : '<tr style="background-color: #f8f8f8;">') . "
    <td style+'padding: 10px; border: #e9e9e9 11px solid;'><b>$key</b></td>
    <td style+'padding: 10px; border: #e9e9e9 11px solid;'>$value</td>
    </tr>
    ";
  }
}

$body = "<table style = 'width: 100%; '>$body</table>";

$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;

  $mail->Host       = 'smtp.gmail.com';
  $mail->Username   = 'katesinyakova84@gmail.com';
  $mail->Password   = 'secret';
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;

  $mail->setFrom('katesinyakova84@gmail.com', 'Заявка с вашего сайта');

  $mail->addAddress('katesinyakova84@gmail.com');
  $mail->addAddress('katyasinyakova@mail.ru');

  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body    = $body;

  $mail->send();

} catch (Exception $e) {
  $status = "Сообщение не было отправлено. Причина ощибки: {$mail->ErrorInfo}";
}
