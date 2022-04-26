<!DOCTYPE html>
<!---->
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="css/css_join.css">
        <title>Меню</title>
    </head>
    <body>
        <p id="Header_menu">Здравствуйте,<?php 
        session_start();
        $get=$_SESSION['really_name'];
        echo $get;
        ?></p>
        <br>
        <br>
        <p id="Header">Статистики</p>
        <br>
        <br>
        <div class="join_style"><input class="button16" value="Моя статистика" type="button" onclick="location.href='mystatic.php'"></div>
        <br>
        <br>
        <br>
        <br>
        <div class="join_style"><input class="button16" value="Топ 10 игроков" type="button" onclick="location.href='static10.php'"></div>
        <br>
        <br>
        <br>
        <br>
        <div class="join_style"><input class="button16" value="Статистика всех игроков" type="button" onclick="location.href='staticeveryone.php'"></div>
        <br>
        <br>
        <br>
        <br>
        <div class="join_style"><input class="button16" value="Назад" type="button" onclick="location.href='start.php'"></div>
    </body>
</html>