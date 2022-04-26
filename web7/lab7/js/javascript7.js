function myClick(number)
{
	$("#box2"+number).click(function()
	{
        if(click_bool!="2")
        {
	$.ajax(
                {
                    type:"POST",
                    url:"computing.php",
                    dataType:"html",
                    data:({numberr:number}),
                    success:function(data)
                    {
                        switch(data) {
                        case "0":  
                          $("#true_false").text("Ошибка");
                          click_bool=data;
                          break;
                        case "1":  
                          $("#true_false").text("Верно");
                          for(i = 0;i < arr_questions.length;i++)
                          {
                              if(number==arr_questions[i])
                              {
                                  $("#box1"+i).text(arr_questions[i]);
                                  break;
                              }
                          }
                          click_bool=data;
                          break;
                        case "2":  
                          $("#true_false").text("Победа");
                          for(i = 0;i < arr_questions.length;i++)
                          {
                              if(number==arr_questions[i])
                              {
                                  $("#box1"+i).text(arr_questions[i]);
                                  break;
                              }
                          }
                          setTimeout(function(){location.href = "http://localhost/lab7/start.php"},3000)
                          click_bool=data;
                          break;
                      }
                    }
        })
    }
})
}
$(document).ready(function()
{
$("#prost").css({position: "absolute" , top: $(window).height()-($(window).height())/5+"px" , left: ($(window).width()- 5*100)/1.5 +"px"})   
count2=10;
div_array2=[]
Id_array2=[];
Top2=0;
click_bool="0";
Left2=0;
count1=5;
div_array1=[]
Id_array1=[];
Left1=0;
arr_questions=[];
count_arr=0;
Array_index_questions = [];
console.log(name);
for(i = 0 ; i<name.length;i++)
{
    if(name[i]!=',')
    {
        arr_questions[count_arr]=name[i]
        count_arr++;
    }
}
count_arr=0;
for(i=0;i<4;i++)
{
    Check_value=false;
    for(j=0;j<Array_index_questions.length;j++)
    {
        if(Array_index_questions[j]==phparr[0][i])
        {
            Check_value=true;
            break;
        }
    }
    if(Check_value==false)
    {
    Array_index_questions[count_arr]=phparr[0][i];
    count_arr++;
    }
}
console.log(Array_index_questions);
for(i=0;i<Array_index_questions.length;i++)
{
    console.log(arr_questions[Array_index_questions[i]]);
}
for(var i = 0;i<count2;i++)
{
	div_array2[i]=document.createElement("div")
	div_array2[i].id="box2"+i;
	Id_array2[i]="#box2"+i;
	document.getElementById("form_number").appendChild(div_array2[i]);
	$(Id_array2[i]).css({color: "white" ,borderRadius: "15px" ,background: "black",position: "absolute" , top: $(window).height()-($(window).height())/1.8+Top2+"px" , left: ($(window).width()- 5*100)/2 + Left2+"px",width: "100px" ,height: "100px"})
        $(Id_array2[i]).text(i);
        Left2+=110;
        if(i == 4)
        {
            Top2+=120;
            Left2=0;
        }
}
for(var i = 0;i<count1;i++)
{
	div_array1[i]=document.createElement("div")
	div_array1[i].id="box1"+i;
	Id_array1[i]="#box1"+i;
	document.getElementById("form_number").appendChild(div_array1[i]);
	$(Id_array1[i]).css({color: "white" ,borderRadius: "15px" ,background: "#27261A",position: "absolute" , top: $(window).height()-($(window).height())/1.25+"px" , left: ($(window).width()- 5*100)/2 + Left1+"px",width: "100px" ,height: "100px"})
        $(Id_array1[i]).text(arr_questions[i]);
        Left1+=110;
}
setTimeout(My_hide, 2500);
});
function My_hide()
{
    for(i = 0 ; i<Array_index_questions.length;i++)
    {
        for(var j = 0 ;j<count1;j++)
        {
            if($('#box1'+j).html()==arr_questions[Array_index_questions[i]])
            {
                $('#box1'+j).empty();
            }
        }
    }
    for(var i =0;i<count2;i++)
    {
    myClick(i);
    }
    $("#Advice").text("Какие цифры были скрыты ?")
}