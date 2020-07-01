<?php

$recepient = "danikk10001@yandex.ru";
$sitename = "Я и мой город";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$text = trim($_POST["msg"]);
$message = "Посетитель $name оставил отзыв о сайте:\n $text. \n E-Mail для связи с посетителем: $email";

$pagetitle = "Новый отзыв о сайте \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>
