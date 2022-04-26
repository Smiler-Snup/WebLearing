<?php 
    session_start();
    $arr_answers=$_SESSION["arr_answers"];
    $number=$_POST["numberr"];
    $bool_itog=0;
    for($i = 0 ; $i<count($arr_answers);$i++)
    {
        if($number==$arr_answers[$i])
        {
            unset($arr_answers[$i]);
            $arr_answers= array_values($arr_answers);
            $bool_itog=1;
            break;
        }
    }
     if($bool_itog==0)
    {
        $arr_files=file("data.txt");
        for($i = 0;$i<count($arr_files);$i++)
        {
            $temp_str= explode(" ",$arr_files[$i]);
            if($temp_str[0]==$_SESSION["user_name"])
            {
                $temp_lose=$temp_str[4];
                (int)$temp_lose=$temp_lose+1;
                $change_str=$temp_str[0]." ".$temp_str[1]." ".$temp_str[2]." ".$temp_str[3]." ".$temp_lose."\n";
                unset($arr_files[$i]);
                $arr_files[$i]=$change_str;
                $add_str="";
                for($j = 0;$j<count($arr_files);$j++)
                {
                    $add_str.="$arr_files[$j]";
                }
                file_put_contents("data.txt","$add_str");
                break;
            }
            
        }
    }
    else 
   {
        $arr_files=file("data.txt");
        for($i = 0;$i<count($arr_files);$i++)
        {
            $temp_str= explode(" ",$arr_files[$i]);
            if($temp_str[0]==$_SESSION["user_name"])
            {
                $temp_win=$temp_str[3];
                (int)$temp_win++;
                $change_str=$temp_str[0]." ".$temp_str[1]." ".$temp_str[2]." ".$temp_win." ".$temp_str[4];
                unset($arr_files[$i]);
                $arr_files[$i]=$change_str;
                $add_str="";
                for($j = 0;$j<count($arr_files);$j++)
                {
                    $add_str.="$arr_files[$j]";
                }
                file_put_contents("data.txt","$add_str");
                break;
            }
            
        }
   }
    if(count($arr_answers)==0)
    {
        $bool_itog=2;
    }
    $_SESSION["arr_answers"]=$arr_answers;
    echo $bool_itog;
?>