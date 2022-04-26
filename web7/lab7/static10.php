<!DOCTYPE html>
<!---->
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="css/css_join.css">
        <title>Топ 10 игроков</title>
    </head>
    <body>
        <p id="Header_menu">Здравствуйте,<?php 
        session_start();
        $get=$_SESSION['really_name'];
        echo $get;
        ?></p>
        <?php 
        $arr=file("data.txt");
        $count=0;
        $str_check10="";
        $arr_top=array();
        $t=count($arr);
        $max = 0;
        $index=-1;
        for($i = 0 ; $i<$t;$i++)
        {
            
            for($j = 0 ; $j<count($arr);$j++)
            {
                $arr_str= explode(" ",$arr[$j]);
                $sum=(int)$arr_str[3]*50 + (int)$arr_str[4]*1;
                if($sum>$max)
                {
                    $max=$sum;
                    $index=$j;
                }
            }
            if($max!=0)
            {
                $str_write= explode(" ", $arr[$index]);
                $arr_top[]="$str_write[0] $max\n";
                unset($arr[$index]);
                $arr= array_values($arr);
                $max=0;
                $index=-1;
                $count++;
            }
            else
            {
                break;
            }
            if(count($arr)==0 || $count==10)
            {
                break;
            }
        }
        if(count($arr_top)!=10)
        {
            $str_write_down="";
            for($i=0;$i<10;$i++)
            {
                if(empty($arr_top[$i]))
                {
                    $arr_top[]="None 0\n";
                }
                $str_write_down.=$arr_top[$i];
            }
        }
        else
        {
            $str_write_down="";
            for($i=0;$i<count($arr_top);$i++)
            {
                $str_write_down.=$arr_top[$i];
            }
        }
        file_put_contents("top_players.txt","$str_write_down");
        ?>
        <br>
        <br>
        <p id="Header">Топ 10 игроков</p>
        <br>
        <table class="result"><tr><th>Логин пользователя</th><th>Количество очков</th><tr>
        <?php
        $arr_file=file("top_players.txt");
        for($i=0;$i<count($arr_file);$i++)
        {
        $str_my=explode(" ",$arr_file[$i]);
        echo "<tr><th>$str_my[0]</th><th>$str_my[1]</th><tr>"; 
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