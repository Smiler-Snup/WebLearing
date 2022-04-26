<!DOCTYPE html>
<!---->
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="css/css_join.css">
        <title>Статистика игроков</title>
    </head>
    <body>
        <p id="Header_menu">Здравствуйте,<?php 
        session_start();
        $get=$_SESSION['really_name'];
        echo $get;
        ?></p>
        <br>
        <br>
        <p id="Header">Статистика игроков</p>
        <br>
        <br>
        <br>
        <table class="result"><tr><th>Логин пользователя</th><th>Количество очков</th><tr>
        <?php
        $arr=file("data.txt"); 
        for($i=0;$i<count($arr);$i++)
        {
        $str_my=$arr[$i];
        $str_my= explode(" ",$str_my);
        (int)$str_my[3];
        (int)$str_my[4];
        $pos=$str_my[3]*50;
        $sum=$pos+$str_my[4];
        echo "<tr><th>$str_my[0]</th><th>$sum</th><tr>"; 
        }
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