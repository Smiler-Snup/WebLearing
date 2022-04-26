<!DOCTYPE html>
<!---->
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="css/css_join.css">
        <title>Игра</title>
    </head>
    <body>
        <p id="Header_menu">Здравствуйте,<?php 
        session_start();
        if(isset($_POST['names']))
        {
            $param= $_POST['names'];
            echo $param;
        }
        $get=$_SESSION['really_name'];
        echo $get;
        ?></p>
        <?php 
        $arr_answer=array();
        $arr_indexx=array();
        $arr_answers=array();
        $value;
        $move;
        while(count($arr_answer)!=5)
        {
            $value=rand(0,9);
            $move=false;
            for($j=0;$j<count($arr_answer);$j++)
            {
                if($arr_answer[$j]==$value)
                {
                    $move=true;
                    break;
                }
            }
            if($move==false)
            {
            $arr_answer[]=$value;
            }
        }
        for($i=0;$i<5;$i++)
        {
            if($i!=4)
            {
                $arr_indexx[]=rand(0,4);
            }
        }
        for($i=0;$i<count($arr_indexx);$i++)
        {
            $help=false;
            for($j=0;$j<count($arr_answers);$j++)
            {
                if($arr_answers[$j]==$arr_answer[$arr_indexx[$i]])
                {
                    $help=true;
                }
            }
            if($help==false)
            {
                $arr_answers[$j]=$arr_answer[$arr_indexx[$i]];
            }
        }
        
        $_SESSION['arr_answers']= $arr_answers;
        $json = json_encode(array($arr_answer));
        $json2 = json_encode(array($arr_indexx));
        ?>
        <p id="Advice">Запоминайте цифры</p>
        <p id="true_false"></p>
        <form id="form_questions"></form>
        <form id="form_number"></form>
        <script src="jquery/jquery-3.5.0.min.js"></script>
        <script>
            var name = <?php echo $json;?>;
            var phparr = <?php echo $json2;?>;
        </script>
        <script src="js/javascript7.js"></script>
        <div id="prost"><input class="button16" value="Завершить" type="button" onclick="location.href='start.php'"></div>
    </body>
</html>