<!DOCTYPE html>
<!---->
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="css/css_join.css">
        <title>Вход в систему</title>
    </head>
    <body>
        <?php
        if(count($_POST)>0)
        {
            session_start();
            $name_user=$_POST['name_user'];
            $password=$_POST['password'];
            $mistake="";
            $mistake2="";
            $regist_user=false;
            $check_pass="";
            $arr_file=file("data.txt");
            $str_check="";
            for($i=0;$i<count($arr_file);$i++)
            {
                $str_check= explode(" ", $arr_file[$i]);
                if($name_user==$str_check[0])
                {
                    $regist_user=true;;
                    $check_pass=$str_check[1];
                    $_SESSION['really_name']=$str_check[2];
                    $_SESSION['user_name']=$str_check[0];
                    $_SESSION['index']=$i;
                    break;
                }
            }
            if(!$regist_user)
            {
                $mistake="Такого имени не существует";
            }
            else
            {
                $mistake="";
                if($password!=$check_pass)
                {
                    $mistake2="Пароль не подходит";
                }
                else
                {
                    header("Location: start.php?get='$name_user'");
                }
            }
        }
        else
        {
            $mistake="";
            $mistake2="";
            $name_user="";
            $password="";
        }
        ?>
        <form id="Myform_join" method="post">
            <p id="Header">Вход в аккаунт</p>
            <p class="join_style">Логин <input class="input_my" name="name_user" value="<?php echo "$name_user";?>"><font class="mistakes">&ensp;&ensp;<?php echo "$mistake";?></font></p>
            <p class="join_style">Пароль <input class="input_my" type="password" name="password" value="<?php echo "$password";?>"><font class="mistakes">&ensp;&ensp;<?php echo "$mistake2";?></font></p>
            <br>
            <div class="join_style"><input class="button16" type="submit" value="Войти"> </div>
        </form>
        <br>
        <div class="join_style"><input class="button16" value="Регистрация" type="button" onclick="location.href='regist.php'"></div>
    </body>
</html>
