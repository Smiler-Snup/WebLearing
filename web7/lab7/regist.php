<!DOCTYPE html>
<!--if($name_user!="admin")
            {
                $mistake="Такого имени не существует";
            }
            else
            {
                $mistake="";
                if($password!="admin")
                {
                    $mistake2="Пароль не подходит";
                }
                else
                {
                    $mistake2="";
                    header("Location: start.php");
                }
            }-->
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="css/css_join.css">
        <title>Регистрация</title>
    </head>
    <body>
        <?php
        if(count($_POST)>0)
        {
            session_start();
            $name_user=trim($_POST['name_user']);
            $password=trim($_POST['password']);
            $really_name=trim($_POST['really_name']);
            $password2=trim($_POST['password2']);
            $mistake="";
            $mistake2="";
            $mistake3="";
            $mistake0="";
            $arr_file=file("data.txt");
            $str_check="";
            $regist_user = true;
            for($i=0;$i<count($arr_file);$i++)
            {
                $str_check=$arr_file[$i];
                $str_check= explode(" ", $str_check);
                if($name_user==$str_check[0])
                {
                    $regist_user=false;
                    break;
                }
            }
            if(strlen($really_name)<2)
            {
                $mistake0="Имя слишком короткое";
            }
            elseif(strlen($name_user)<2)
            {
                $mistake="Логин слишком короткий";
            }
            elseif(!$regist_user) 
            {
                $mistake="Игрок с таким логином уже зарегистрирован";
            } 
            elseif(strlen($password)<4) 
            {
                $mistake2="Пароль должен состоять минимум из 4 символов";
            } 
            elseif($password!=$password2) 
            {
                $mistake3="Пароли не совпадают";
            } 
            else
            {
                $_SESSION['really_name']=$really_name;
                $_SESSION['index']=count($arr_file);
                $_SESSION['user_name']=$name_user;
                file_put_contents("data.txt","$name_user $password $really_name 0 0\n",FILE_APPEND);
                header("Location: start.php");

            }
        }
        else
        {
            $mistake="";
            $mistake2="";
            $mistake3="";
            $mistake0="";
            $name_user="";
            $password="";
            $really_name="";
            $password2="";    
        }
        ?>
        <form id="Myform_join" method="post">
            <p id="Header">Регистрация</p>
            <p class="join_style">Имя пользователя <input class="input_my" name="really_name" value="<?php echo "$really_name";?>"><font class="mistakes">&ensp;&ensp;<?php echo "$mistake0";?></font></p>
            <p class="join_style">Логин <input class="input_my" name="name_user" value="<?php echo "$name_user";?>"><font class="mistakes">&ensp;&ensp;<?php echo "$mistake";?></font></p>
            <p class="join_style">Пароль <input class="input_my" type="password" name="password" value="<?php echo "$password";?>"><font class="mistakes">&ensp;&ensp;<?php echo "$mistake2";?></font></p>
            <p class="join_style">Повторите пароль <input class="input_my" type="password" name="password2" value="<?php echo "$password2";?>"><font class="mistakes">&ensp;&ensp;<?php echo "$mistake3";?></font></p>
            <br>
            <div class="join_style"><input class="button16" type="submit" value="Зарегистрироваться"> </div>
        </form>
        <br>
        <div class="join_style"><input class="button16" value="Войти в аккаунт" type="button" onclick="location.href='join.php'"></div>
    </body>
</html>