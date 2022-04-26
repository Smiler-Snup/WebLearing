<!DOCTYPE html>
<!---->
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="css/css_join.css">
        <title>Ваша статистика</title>
    </head>
    <body>
        <p id="Header_menu">Здравствуйте,<?php 
        session_start();
        $get=$_SESSION['really_name'];
        echo $get;
        ?></p>
        <br>
        <br>
        <p id="Header">Ваша статистика</p>
        <br>
        <br>
        <br>
        <table class="result"><tr><th>Количество правильных ответов</th><th>Количество ошибок</th><th>Количество очков</th><tr>
        <?php
        $index=$_SESSION['index'];
        $arr=file("data.txt");
        $str_my=$arr[$index];
        $str_my= explode(" ",$str_my);
        (int)$str_my[3];
        (int)$str_my[4];
        $pos=$str_my[3]*50;
        $sum=$pos+$str_my[4];
        echo "<tr><th>$str_my[3]</th><th>$str_my[4]</th><th>$sum</th><tr>"; 
        ?></table>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="join_style"><input class="button16" value="Назад" type="button" onclick="location.href='general_static.php'"></div>
    </body>
</html>

