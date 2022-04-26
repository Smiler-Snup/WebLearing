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
        <p id="Header">Игровое меню</p>
        <br>
        <br>
        <div class="join_style"><input class="button16" value="Играть" type="button" onclick="location.href='game.php'" ></div>
        <br>
        <br>
        <br>
        <br>
        <div class="join_style"><input class="button16" value="Статистика" type="button" onclick="location.href='general_static.php'"></div>
        <br>
        <br>
        <br>
        <br>
        <div class="join_style"><input class="button16" value="Выйти" type="button" onclick="location.href='join.php'"></div>
    </body>
</html>