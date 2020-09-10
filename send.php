<?php

$name = $_POST['name'];
$tel = $_POST['tel'];


$name = htmlspecialchars($name);  //Преобразование символов в сущности "мнемоники"
$tel = htmlspecialchars($tel);


$name = urldecode($name);   //Декодирование url
$tel = urldecode($tel);


$name = trim($name);    //Удаление пробельных символов с обеих сторон
$tel = trim($tel);


//Отправляем данные на почту


if (mail("artur.volokhin@mail.ru",
         "Новое письмо с сайта",
         "Имя: ".$name."\n".
         "Телефон: ".$tel."\n".
         "From: no-reply@mydomain.ru \r\n")

) {
    echo ('Письмо успешно отправлено!');
}

else {
    echo ('Есть ошибки! Проверьте данные.');
}

?>