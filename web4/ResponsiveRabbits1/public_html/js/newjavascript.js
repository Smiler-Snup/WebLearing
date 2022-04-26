class Answer
{
	constructor()
	{
		this.answer1="";
		this.answer2="";
		this.answer3="";
		this.answer4="";
		this.answer5=[];
		this.temp_index=0;
		this.string_answer5="";
	}
	clean_answers()
	{
		this.answer1="";
		this.answer2="";
		this.answer3="";
		this.answer4="";
		this.string_answer5="";
		for(var i =0;i<this.answer5.length;i++)
		{
			this.answer5.slice(i);
		}
	}
	add_answer1(answer1)
	{
		this.answer1=answer1;
	}
	add_answer2(answer2)
	{
		this.answer2=answer2;
	}
	add_answer3(answer3)
	{
		this.answer3=answer3;
	}
	add_answer4(answer4)
	{
		this.answer4=answer4;
	}
	add_answer5(answer5)
	{
		this.answer5.push(answer5);
	}
	remove_answer5(answer5)
	{
		this.temp_index=this.answer5.indexOf(answer5);
		if(this.temp_index!=-1)
		{
			this.answer5.splice(this.temp_index,1)
		}
	}
	return_answer1()
	{
		return this.answer1;
	}
	return_answer2()
	{
		return this.answer2;
	}
	return_answer3()
	{
		return this.answer3;
	}
	return_answer4()
	{
		return this.answer4;
	}
	return_answer5()
	{
		this.string_answer5="";
		for(var i = 0;i<this.answer5.length;i++)
		{
			this.string_answer5+=this.answer5[i];
			if(i!=this.answer5.length-1)
			{
				this.string_answer5+=",";
			}
			
		}
		return this.string_answer5;
	}
}
class Question
{
	constructor(answer,general_question)
	{
		this.answer=answer;
		this.general_question=general_question;
		this.content_question="";
		this.array_question=[];
		this.index=0;
		this.temp=[]
		this.flag_change=false;
	}
	add_question(question)
	{
		this.array_question[this.index]=question;
		this.index+=1;
	}
	mix_up()
	{
	var j, temp;
	for(var i = this.array_question.length - 1; i > 0; i--)
	{
		j = Math.floor(Math.random()*(i + 1));
		temp = this.array_question[j];
		this.array_question[j] = this.array_question[i];
		this.array_question[i] = temp;
	}
	}
	clean_array_full()
	{
		this.index=0;
		this.content_question="";
		this.flag_change=false;
		var Mycounter=this.array_question.length;
		for(var i = 0;i<Mycounter;i++)
		{
			this.array_question.shift();
		}
	}
	mix_up_special()
	{
	var j, temp;
	for(var i = this.array_question.length - 1; i > 0; i--)
	{
		j = Math.floor(Math.random()*(i + 1));
		if(i!=0 && j!=0 && i!=1 && j!=1 && i!=(this.array_question.length-1) && j!=(this.array_question-1))
		{
		temp = this.array_question[j];
		this.array_question[j] = this.array_question[i];
		this.array_question[i] = temp;
		}
	}
	}
	make_content()
	{
		for(var i=0;i<this.array_question.length;i++)
		{
			this.content_question+=this.array_question[i];
		}
	}
	return_array_question()
	{
		return this.array_question;
	}
	
	return_question()
	{
		return this.content_question;
	}
	return_general_question()
	{
		return this.general_question;
	}
	return_answer()
	{
		return this.answer;
	}
	clean_array(number,message)
	{
		var Mycounter=this.temp.length;
		for(var i = 0;i<Mycounter;i++)
		{
			this.temp.shift();
		}
		for(var i =0;i<this.array_question.length;i++)
		{
			if(i!=number)
			{
				this.temp[i]=this.array_question[i]
			}
			else
			{
				this.temp[number]=message;
			}
		}
		var Mycounter=this.array_question.length;
		for(var i = 0;i<Mycounter;i++)
		{
			this.array_question.shift();
		}
		for(var i = 0;i<this.temp.length;i++)
		{
			this.array_question[i]=this.temp[i];
		}
		this.content_question="";
	}
	clean_array_two(number,message,lastnumber,lastmessage)
	{
		var Mycounter=this.temp.length;
		for(var i = 0;i<Mycounter;i++)
		{
			this.temp.shift();
		}
		for(var i =0;i<this.array_question.length;i++)
		{
			if(i!=number)
			{
				if(i!=lastnumber)
				{
				this.temp[i]=this.array_question[i]
				}
			
				else
				{
					this.temp[lastnumber]=lastmessage;
				}
			}
			else
			{
				this.temp[number]=message;
			}
		}	
		for(var i = 0;i<this.temp.length;i++)
		{
			this.array_question[i]=this.temp[i];
		}
		this.content_question="";
	}
}

start_content ="<p class='Myhead'>Опросник <br>Предмет 'Астрономия'"
start_content+="<br>Тема 'Состав и масштаб солнечной системы'<br>"
start_content+="<br><input id='button_start' type='button' value='Начать' onclick='start()' name='startb'><br>" 
start_content+="<br><input id='button_start' type='button' value='Настройки' onclick='setting()' name='setb'></p>"
document.getElementById("form").innerHTML = start_content;
start_content_without_set=start_content;
use_setting=false;
bocheck1=false;
bocheck2=false;
Array_questions=[];
Answer_user = new Answer();
Question_one=new Question("13 планет","<p class='Question_Head'>Количество планет в солнечной системе?</p>");
Question_one.add_question("<p class='Questions'><input type='radio' name='question1_radio' value='13'> 13 планет</p>");
Question_one.add_question("<p class='Questions'><input type='radio' name='question1_radio' value='9'>&nbsp&nbsp&nbsp9 планет </p>");
Question_one.add_question("<p class='Questions'><input type='radio'	name='question1_radio' value='8'>&nbsp&nbsp&nbsp8 планет </p>");
Question_one.add_question("<p class='Questions'><input type='radio'	name='question1_radio' value='11'> 11 планет </p>"); 
Question_two=new Question("Юпитер","<p class='Question_Head'>Самая большая планета в солнечной системе?</p>");
Question_two.add_question("<p class='Questions'><input type='radio' name='question2_radio' value='Юпитер'> Юпитер</p>");
Question_two.add_question("<p class='Questions'><input type='radio' name='question2_radio' value='Уран'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspУран</p>");
Question_two.add_question("<p class='Questions'><input type='radio' name='question2_radio' value='Земля'>&nbsp&nbsp&nbsp&nbspЗемля </p>");
Question_two.add_question("<p class='Questions'><input type='radio' name='question2_radio' value='Сатурн'>&nbsp&nbspСатурн </p>");
Question_three=new Question("8","<p class='Question_Head'>Количество спутников у Нептуна?<br>(Вести число)</p>")
Question_three.add_question("<p class='Questions'><input name='question3_input' autofocus>")
Question_four = new Question("Водород и гелий","<p class='Question_Head'>Химический состав Сатурна?</p>")
Question_four.add_question("<p class='Questions'>")
Question_four.add_question("<select name='question4_select' size=4 >")
Question_four.add_question("<option value='Водород и углекислый газ'>Водород и углекислый газ")
Question_four.add_question("<option value='Водород и гелий'>Водород и гелий")
Question_four.add_question("<option value='Сероводород и метан'>Сероводород и метан")
Question_four.add_question("<option value='Хлор и азот'>Хлор и азот")
Question_four.add_question("<option value='Этан и водяной пар'>Этан и водяной пар")
Question_four.add_question("<option value='Водород и сероводород'>Водород и сероводород")
Question_four.add_question("</select>")
Question_five=new Question("Сатурн,Нептун,Юпитер","<p class='Question_Head'>Какие планеты относятся к газовым гигантам? ")
Question_five.add_question("<p  class='Questions'><input type='checkbox' name='question5_1'>Сатурн</p>")
Question_five.add_question("<p  class='Questions'><input type='checkbox' name='question5_2'>Марс</p>")
Question_five.add_question("<p  class='Questions'><input type='checkbox' name='question5_3'>Меркурий</p>")
Question_five.add_question("<p  class='Questions'><input type='checkbox' name='question5_4'>Нептун</p>")
Question_five.add_question("<p  class='Questions'><input type='checkbox' name='question5_5'>Юпитер</p>")
button_menu=[];
button_menu[0]="<p>"
button_menu[1]="<input id='button_menu' type='button' value='Вопрос 1' onclick='question1()' name='question1_b'><br>"
button_menu[2]="<input id='button_menu' type='button' value='Вопрос 2' onclick='question2()' name='question2_b'><br>"
button_menu[3]="<input id='button_menu' type='button' value='Вопрос 3' onclick='question3()' name='question3_b'><br>"
button_menu[4]="<input id='button_menu' type='button' value='Вопрос 4' onclick='question4()' name='question4_b'><br>"
button_menu[5]="<input id='button_menu' type='button' value='Вопрос 5' onclick='question5()' name='question5_b'><br>"
button_menu[6]="<input id='button_finish' type='button' value='Закончить' onclick='finish_test()' name='question6_b'><br>"
button_menu[7]="</p>"
Array_questions.push(Question_one);
Array_questions.push(Question_two);
Array_questions.push(Question_three);
Array_questions.push(Question_four);
Array_questions.push(Question_five)
global_content="";
Timer = 60;
var T = document.createElement("p");
T.id="Time_style";
var index_array=0;
stop_timer=true;
time_reset=false;
function but_Reset()
{
	Timer=60;
	global_content="";
	index_array=0;
	stop_timer=true;
	start_content="";
	start_content ="<p class='Myhead'>Опросник <br>Предмет 'Астрономия'"
	start_content+="<br>Тема 'Состав и масштаб солнечной системы'<br>"
	start_content+="<br><input id='button_start' type='button' value='Начать' onclick='start()' name='startb'><br>" 
	start_content+="<br><input id='button_start' type='button' value='Настройки' onclick='setting()' name='setb'></p>"
	document.getElementById("form").innerHTML = start_content;
	start_content_without_set=start_content;
	use_setting=false;
	bocheck1=false;
	bocheck2=false;
	time_reset=true;
	clearInterval(S);
	for(var i = 0;i<Array_questions.length;i++)
	{
		Array_questions[i].clean_array_full();
	}
	for(var i = 0;i<Array_questions.length;i++)
	{
		Array_questions.splice(i);
	}
	Answer_user.clean_answers();
	Question_one.add_question("<p class='Questions'><input type='radio' name='question1_radio' value='13'> 13 планет</p>");
	Question_one.add_question("<p class='Questions'><input type='radio' name='question1_radio' value='9'>&nbsp&nbsp&nbsp9 планет </p>");
	Question_one.add_question("<p class='Questions'><input type='radio'	name='question1_radio' value='8'>&nbsp&nbsp&nbsp8 планет </p>");
	Question_one.add_question("<p class='Questions'><input type='radio'	name='question1_radio' value='11'> 11 планет </p>"); 
	Question_two.add_question("<p class='Questions'><input type='radio' name='question2_radio' value='Юпитер'> Юпитер</p>");
	Question_two.add_question("<p class='Questions'><input type='radio' name='question2_radio' value='Уран'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspУран</p>");
	Question_two.add_question("<p class='Questions'><input type='radio' name='question2_radio' value='Земля'>&nbsp&nbsp&nbsp&nbspЗемля </p>");
	Question_two.add_question("<p class='Questions'><input type='radio' name='question2_radio' value='Сатурн'>&nbsp&nbspСатурн </p>");
	Question_three.add_question("<p class='Questions'><input name='question3_input' autofocus>")
	Question_four.add_question("<p class='Questions'>")
	Question_four.add_question("<select name='question4_select' size=4 >")
	Question_four.add_question("<option value='Водород и углекислый газ'>Водород и углекислый газ")
	Question_four.add_question("<option value='Водород и гелий'>Водород и гелий")
	Question_four.add_question("<option value='Сероводород и метан'>Сероводород и метан")
	Question_four.add_question("<option value='Хлор и азот'>Хлор и азот")
	Question_four.add_question("<option value='Этан и водяной пар'>Этан и водяной пар")
	Question_four.add_question("<option value='Водород и сероводород'>Водород и сероводород")
	Question_four.add_question("</select>")
	Question_five.add_question("<p  class='Questions'><input type='checkbox' name='question5_1'>Сатурн</p>")
	Question_five.add_question("<p  class='Questions'><input type='checkbox' name='question5_2'>Марс</p>")
	Question_five.add_question("<p  class='Questions'><input type='checkbox' name='question5_3'>Меркурий</p>")
	Question_five.add_question("<p  class='Questions'><input type='checkbox' name='question5_4'>Нептун</p>")
	Question_five.add_question("<p  class='Questions'><input type='checkbox' name='question5_5'>Юпитер</p>")
	Array_questions.push(Question_one);
	Array_questions.push(Question_two);
	Array_questions.push(Question_three);
	Array_questions.push(Question_four);
	Array_questions.push(Question_five)
	button_menu[0]="<p>"
	button_menu[1]="<input id='button_menu' type='button' value='Вопрос 1' onclick='question1()' name='question1_b'><br>"
	button_menu[2]="<input id='button_menu' type='button' value='Вопрос 2' onclick='question2()' name='question2_b'><br>"
	button_menu[3]="<input id='button_menu' type='button' value='Вопрос 3' onclick='question3()' name='question3_b'><br>"
	button_menu[4]="<input id='button_menu' type='button' value='Вопрос 4' onclick='question4()' name='question4_b'><br>"
	button_menu[5]="<input id='button_menu' type='button' value='Вопрос 5' onclick='question5()' name='question5_b'><br>"
	button_menu[6]="<input id='button_finish' type='button' value='Закончить' onclick='finish_test()' name='question6_b'><br>"
	button_menu[7]="</p>"
	T.innerText="";
	lastnumber1=0;
	lastmessage1="";
	bool_try1=false;
	lastnumber2=0;
	lastmessage2="";
	bool_try2=false;
	lastnumber3=0;
	lastmessage3="";
	bool_try3=false;
	green1=false;
	green2=false;
	green3=false;
	green4=false;
	green5=false;
}
function start()
{	
	if(use_setting==true)
	{
		if(document.getElementById("form").check1.checked)
		{
			shuffle(Array_questions);
		}
		if(document.getElementById("form").check2.checked)
		{
			for(var i = 0;i<Array_questions.length;i++)
			{
				if(Array_questions[i].return_answer()!="Водород и гелий")
				{
					Array_questions[i].mix_up();
				}
				else
				{
					Array_questions[i].mix_up_special();
				}
			}
		}
	}
	else
	{
		if(bocheck1==true)
		{
			shuffle(Array_questions);
		}
		if(bocheck2==true)
		{
			for(var i = 0;i<Array_questions.length;i++)
			{
				if(Array_questions[i].return_answer()!="Водород и гелий")
				{
				Array_questions[i].mix_up();
				}
				else{
					Array_questions[i].mix_up_special();
				}
			}
		}
	}
	Array_questions[0].make_content();
	Array_questions[1].make_content();
	Array_questions[2].make_content();
	Array_questions[3].make_content();
	Array_questions[4].make_content();
	global_content=Array_questions[0].return_general_question()+Array_questions[0].return_question()+make_button_content();
	document.getElementById("form").innerHTML=global_content+T.textContent;
	Ttext=document.createTextNode("Осталось "+Timer+" секунд(ы/а)");
	T.appendChild(Ttext);
	document.getElementById("form").appendChild(T);
	S=setInterval(hexclock,1000);
}
lastnumber1=0;
lastmessage1="";
bool_try1=false;
lastnumber2=0;
lastmessage2="";
bool_try2=false;
lastnumber3=0;
lastmessage3="";
bool_try3=false;
green1=false;
green2=false;
green3=false;
green4=false;
green5=false;
function check_point(check_message,message,lastmessage,bool_try,lastnumber)
{
	for(var i =0;i<Array_questions[index_array].return_array_question().length;i++)
			{
			if(Array_questions[index_array].return_array_question()[i]==check_message ||Array_questions[index_array].return_array_question()[i]==message){
					if(bool_try==false)
					{
					Array_questions[index_array].clean_array(i,message);
					Array_questions[index_array].make_content();
					return [i,true,check_message];
					}
					else
					{
					Array_questions[index_array].clean_array_two(i,message,lastnumber,lastmessage);
					Array_questions[index_array].make_content();
					return [i,true,check_message];
					}
					
			}
			}
}
function check_point2(message,message2)
{
	for(var i = 0;i<Array_questions[index_array].return_array_question().length;i++)
			{
				if(Array_questions[index_array].return_array_question()[i]==message)
				{
					Array_questions[index_array].clean_array(i,message2)
					Array_questions[index_array].make_content();
				}
			}
}
function make_button_content()
{
	content="";
	for(var i = 0;i<button_menu.length;i++)
	{
		content+=button_menu[i];
	}
	return content;
}
function view_question()
{
	if(Array_questions[index_array].return_answer()=="13 планет")
	{
		if(document.getElementById("form").question1_radio.value=="13")
		{
			help_array=check_point("<p class='Questions'><input type='radio' name='question1_radio' value='13'> 13 планет</p>","<p class='Questions'><input type='radio'  checked name='question1_radio' value='13'> 13 планет</p>",lastmessage1,bool_try1,lastnumber1);
			lastnumber1=help_array[0];	
			bool_try1=help_array[1];
			lastmessage1=help_array[2];
			change_buttons();
			Answer_user.add_answer1("13 планет")
		}
		if(document.getElementById("form").question1_radio.value=="8")
		{
			help_array=check_point("<p class='Questions'><input type='radio'	name='question1_radio' value='8'>&nbsp&nbsp&nbsp8 планет </p>","<p class='Questions'><input type='radio' checked	name='question1_radio' value='8'>&nbsp&nbsp&nbsp8 планет </p>",lastmessage1,bool_try1,lastnumber1);
			lastnumber1=help_array[0];
			bool_try1=help_array[1];
			lastmessage1=help_array[2];
			change_buttons();
			Answer_user.add_answer1("8 планет")
		}
		if(document.getElementById("form").question1_radio.value=="9")
		{
			help_array=check_point("<p class='Questions'><input type='radio' name='question1_radio' value='9'>&nbsp&nbsp&nbsp9 планет </p>","<p class='Questions'><input type='radio' checked	name='question1_radio' value='9'>&nbsp&nbsp&nbsp9 планет </p>",lastmessage1,bool_try1,lastnumber1);
			lastnumber1=help_array[0];	
			bool_try1=help_array[1];
			lastmessage1=help_array[2];
			change_buttons();
			Answer_user.add_answer1("9 планет")
		}
		if(document.getElementById("form").question1_radio.value=="11")
		{
			help_array=check_point("<p class='Questions'><input type='radio'	name='question1_radio' value='11'> 11 планет </p>","<p class='Questions'><input type='radio'	checked name='question1_radio' value='11'> 11 планет </p>",lastmessage1,bool_try1,lastnumber1);
			lastnumber1=help_array[0];	
			bool_try1=help_array[1];
			lastmessage1=help_array[2];
			change_buttons();
			Answer_user.add_answer1("11 планет")
		}
	}
	if(Array_questions[index_array].return_answer()=="Юпитер")
	{
		if(document.getElementById("form").question2_radio.value=="Юпитер")
		{
			help_array=check_point("<p class='Questions'><input type='radio' name='question2_radio' value='Юпитер'> Юпитер</p>","<p class='Questions'><input type='radio' checked name='question2_radio' value='Юпитер'> Юпитер</p>",lastmessage2,bool_try2,lastnumber2);
			lastnumber2=help_array[0];	
			bool_try2=help_array[1];
			lastmessage2=help_array[2];
			change_buttons();
			Answer_user.add_answer2("Юпитер")
		}
		if(document.getElementById("form").question2_radio.value=="Уран")
		{
			help_array=check_point("<p class='Questions'><input type='radio' name='question2_radio' value='Уран'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspУран</p>","<p class='Questions'><input type='radio' checked name='question2_radio' value='Уран'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspУран</p>",lastmessage2,bool_try2,lastnumber2);
			lastnumber2=help_array[0];	
			bool_try2=help_array[1];
			lastmessage2=help_array[2];
			change_buttons();
			Answer_user.add_answer2("Уран")
		}
		if(document.getElementById("form").question2_radio.value=="Земля")
		{
			help_array=check_point("<p class='Questions'><input type='radio' name='question2_radio' value='Земля'>&nbsp&nbsp&nbsp&nbspЗемля </p>","<p class='Questions'><input type='radio' checked name='question2_radio' value='Земля'>&nbsp&nbsp&nbsp&nbspЗемля </p>",lastmessage2,bool_try2,lastnumber2);
			lastnumber2=help_array[0];	
			bool_try2=help_array[1];
			lastmessage2=help_array[2];
			change_buttons();
			Answer_user.add_answer2("Земля")
		}
		if(document.getElementById("form").question2_radio.value=="Сатурн")
		{
			help_array=check_point("<p class='Questions'><input type='radio' name='question2_radio' value='Сатурн'>&nbsp&nbspСатурн </p>","<p class='Questions'><input type='radio' checked name='question2_radio' value='Сатурн'>&nbsp&nbspСатурн </p>",lastmessage2,bool_try2,lastnumber2);
			lastnumber2=help_array[0];	
			bool_try2=help_array[1];
			lastmessage2=help_array[2];
			change_buttons();
			Answer_user.add_answer2("Сатурн")
		}
	}
	if(Array_questions[index_array].return_answer()=="8")
	{
		check_prop=0;
		a=" ";
		while(check_prop<100)
		{
			check_string="";
			b = new Array(check_prop).join(a);
			for(var i = 0 ;i<b.length;i++)
			{
				check_string+=b[i];
			}
			if(document.getElementById("form").question3_input.value!=check_string)
			{
				c=true;
			}
			else
			{
				c=false;
				break;
			}
			check_prop++;
		}
		if(c==true)
		{
			change_buttons();
			Answer_user.add_answer3(document.getElementById("form").question3_input.value)
		}
		else
		{
			change_buttons_red();
		}	
		Answer_3=document.getElementById("form").question3_input.value;
		Array_questions[index_array].clean_array(0,"<p class='Questions'><input name='question3_input' value='"+Answer_3+"' >")
		Array_questions[index_array].make_content();
		
	}
	if(Array_questions[index_array].return_answer()=="Водород и гелий")
	{
		if(document.getElementById("form").question4_select.value=="Этан и водяной пар")
		{
			help_array=check_point("<option value='Этан и водяной пар'>Этан и водяной пар","<option selected value='Этан и водяной пар'>Этан и водяной пар",lastmessage3,bool_try3,lastnumber3);
			lastnumber3=help_array[0];	
			bool_try3=help_array[1];
			lastmessage3=help_array[2];
			change_buttons();
			Answer_user.add_answer4("Этан и водяной пар");
		}
		if(document.getElementById("form").question4_select.value=="Сероводород и метан")
		{
			help_array=check_point("<option value='Сероводород и метан'>Сероводород и метан","<option selected value='Сероводород и метан'>Сероводород и метан",lastmessage3,bool_try3,lastnumber3);
			lastnumber3=help_array[0];	
			bool_try3=help_array[1];
			lastmessage3=help_array[2];
			change_buttons();
			Answer_user.add_answer4("Сероводород и метан");
		}
		if(document.getElementById("form").question4_select.value=="Хлор и азот")
		{
			help_array=check_point("<option value='Хлор и азот'>Хлор и азот","<option selected value='Хлор и азот'>Хлор и азот",lastmessage3,bool_try3,lastnumber3);
			lastnumber3=help_array[0];	
			bool_try3=help_array[1];
			lastmessage3=help_array[2];
			change_buttons();
			Answer_user.add_answer4("Хлор и азот");
		}
		if(document.getElementById("form").question4_select.value=="Водород и сероводород")
		{
			help_array=check_point("<option value='Водород и сероводород'>Водород и сероводород","<option selected value='Водород и сероводород'>Водород и сероводород",lastmessage3,bool_try3,lastnumber3);
			lastnumber3=help_array[0];	
			bool_try3=help_array[1];
			lastmessage3=help_array[2];
			change_buttons();
			Answer_user.add_answer4("Водород и сероводород");
		}
		if(document.getElementById("form").question4_select.value=="Водород и гелий")
		{
			help_array=check_point("<option value='Водород и гелий'>Водород и гелий","<option selected value='Водород и гелий'>Водород и гелий",lastmessage3,bool_try3,lastnumber3);
			lastnumber3=help_array[0];	
			bool_try3=help_array[1];
			lastmessage3=help_array[2];
			change_buttons();
			Answer_user.add_answer4("Водород и гелий");
		}
		if(document.getElementById("form").question4_select.value=="Водород и углекислый газ")
		{
			help_array=check_point("<option value='Водород и углекислый газ'>Водород и углекислый газ","<option selected value='Водород и углекислый газ'>Водород и углекислый газ",lastmessage3,bool_try3,lastnumber3);
			lastnumber3=help_array[0];	
			bool_try3=help_array[1];
			lastmessage3=help_array[2];
			change_buttons();
			Answer_user.add_answer4("Водород и углекислый газ");
		}
	}
	if(Array_questions[index_array].return_answer()=="Сатурн,Нептун,Юпитер")
	{
		if(document.getElementById("form").question5_1.checked)
		{
			check_point2("<p  class='Questions'><input type='checkbox' name='question5_1'>Сатурн</p>","<p  class='Questions'><input type='checkbox' checked name='question5_1'>Сатурн</p>")
			green1=true;
			Answer_user.add_answer5("Сатурн")
		}
		else
		{
			check_point2("<p  class='Questions'><input type='checkbox' checked name='question5_1'>Сатурн</p>","<p  class='Questions'><input type='checkbox' name='question5_1'>Сатурн</p>")
			green1=false
			Answer_user.remove_answer5("Сатурн");
		}
		if(document.getElementById("form").question5_4.checked)
		{
			check_point2("<p  class='Questions'><input type='checkbox' name='question5_4'>Нептун</p>","<p  class='Questions'><input type='checkbox' checked name='question5_4'>Нептун</p>")
			green4=true;
			Answer_user.add_answer5("Нептун")
		}
		else
		{
			check_point2("<p  class='Questions'><input type='checkbox' checked name='question5_4'>Нептун</p>","<p  class='Questions'><input type='checkbox' name='question5_4'>Нептун</p>")
			green4=false;
			Answer_user.remove_answer5("Нептун");
		}
		if(document.getElementById("form").question5_5.checked)
		{
			check_point2("<p  class='Questions'><input type='checkbox' name='question5_5'>Юпитер</p>","<p  class='Questions'><input type='checkbox' checked name='question5_5'>Юпитер</p>")
			green5=true;
			Answer_user.add_answer5("Юпитер")
		}
		else
		{
			check_point2("<p  class='Questions'><input type='checkbox' checked name='question5_5'>Юпитер</p>","<p  class='Questions'><input type='checkbox' name='question5_5'>Юпитер</p>")
			green5=false;
			Answer_user.remove_answer5("Юпитер");
		}
		if(document.getElementById("form").question5_2.checked)
		{
			check_point2("<p  class='Questions'><input type='checkbox' name='question5_2'>Марс</p>","<p  class='Questions'><input type='checkbox' checked name='question5_2'>Марс</p>")
			green2=true;
			Answer_user.add_answer5("Марс")
		}
		else
		{
			check_point2("<p  class='Questions'><input type='checkbox' checked name='question5_2'>Марс</p>","<p  class='Questions'><input type='checkbox' name='question5_2'>Марс</p>")
			green2=false;
			Answer_user.remove_answer5("Марс");
		}
		if(document.getElementById("form").question5_3.checked)
		{
			check_point2("<p  class='Questions'><input type='checkbox' name='question5_3'>Меркурий</p>","<p  class='Questions'><input type='checkbox' checked name='question5_3'>Меркурий</p>")
			green3=true;
			Answer_user.add_answer5("Меркурий")
		}
		else
		{
			check_point2("<p  class='Questions'><input type='checkbox' checked name='question5_3'>Меркурий</p>","<p  class='Questions'><input type='checkbox' name='question5_3'>Меркурий</p>")
			green3=false;
			Answer_user.remove_answer5("Меркурий");
		}
		if(green1==false && green2==false && green3==false && green4==false && green5==false)
		{
			change_buttons_red();
		}
		else
		{
			change_buttons();
		}
	}
}
function change_buttons()
{
	if(index_array==0)
	{
		button_menu[1]="<input id='button_menu_ready' type='button' value='Вопрос 1' onclick='question1()' name='question1_b'><br>";
	}
	if(index_array==1)
	{
		button_menu[2]="<input id='button_menu_ready' type='button' value='Вопрос 2' onclick='question2()' name='question2_b'><br>";
	}
	if(index_array==2)
	{
		button_menu[3]="<input id='button_menu_ready' type='button' value='Вопрос 3' onclick='question3()' name='question3_b'><br>";
	}
	if(index_array==3)
	{
		button_menu[4]="<input id='button_menu_ready' type='button' value='Вопрос 4' onclick='question4()' name='question4_b'><br>";
	}
	if(index_array==4)
	{
		button_menu[5]="<input id='button_menu_ready' type='button' value='Вопрос 5' onclick='question5()' name='question5_b'><br>";
	}
}
function change_buttons_red()
{
	if(index_array==0)
	{
		button_menu[1]="<input id='button_menu' type='button' value='Вопрос 1' onclick='question1()' name='question1_b'><br>";
	}
	if(index_array==1)
	{
		button_menu[2]="<input id='button_menu' type='button' value='Вопрос 2' onclick='question2()' name='question2_b'><br>";
	}
	if(index_array==2)
	{
		button_menu[3]="<input id='button_menu' type='button' value='Вопрос 3' onclick='question3()' name='question3_b'><br>";
	}
	if(index_array==3)
	{
		button_menu[4]="<input id='button_menu' type='button' value='Вопрос 4' onclick='question4()' name='question4_b'><br>";
	}
	if(index_array==4)
	{
		button_menu[5]="<input id='button_menu' type='button' value='Вопрос 5' onclick='question5()' name='question5_b'><br>";
	}
}
function hexclock()
{
	if(Timer==0)
	{
		finish_test()
	}
	if(stop_timer==true)
	{
	T.innerText="";
	Timer=Timer-1;
	Ttext=document.createTextNode("Осталось "+Timer+" секунд(ы/а)");
	T.appendChild(Ttext);
	document.getElementById("form").appendChild(T);
	}
}
function shuffle(arr){
	var j, temp;
	for(var i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}
function question1()
{
	view_question();
	global_content=Array_questions[0].return_general_question()+Array_questions[0].return_question()+make_button_content();
	index_array=0;
	document.getElementById("form").innerHTML=global_content;
	T.innerText="";
	Ttext=document.createTextNode("Осталось "+Timer+" секунд(ы/а)");
	T.appendChild(Ttext);
	document.getElementById("form").appendChild(T);
}
function question2()
{
	view_question();
	global_content=Array_questions[1].return_general_question()+Array_questions[1].return_question()+make_button_content();
	index_array=1;
	document.getElementById("form").innerHTML=global_content;
	T.innerText="";
	Ttext=document.createTextNode("Осталось "+Timer+" секунд(ы/а)");
	T.appendChild(Ttext);
	document.getElementById("form").appendChild(T);
}
function question3()
{
	view_question();
	global_content=Array_questions[2].return_general_question()+Array_questions[2].return_question()+make_button_content();
	index_array=2;
	document.getElementById("form").innerHTML=global_content;
	T.innerText="";
	Ttext=document.createTextNode("Осталось "+Timer+" секунд(ы/а)");
	T.appendChild(Ttext);
	document.getElementById("form").appendChild(T);
}
function question4()
{
	view_question();
	global_content=Array_questions[3].return_general_question()+Array_questions[3].return_question()+make_button_content();
	index_array=3;
	document.getElementById("form").innerHTML=global_content;
	T.innerText="";
	Ttext=document.createTextNode("Осталось "+Timer+" секунд(ы/а)");
	T.appendChild(Ttext);
	document.getElementById("form").appendChild(T);
}
function question5()
{
	view_question();
	global_content=Array_questions[4].return_general_question()+Array_questions[4].return_question()+make_button_content();
	index_array=4;
	document.getElementById("form").innerHTML=global_content;
	T.innerText="";
	Ttext=document.createTextNode("Осталось "+Timer+" секунд(ы/а)");
	T.appendChild(Ttext);
	document.getElementById("form").appendChild(T);
}
function setting()
{
	if(use_setting==false){
		if(bocheck1==false && bocheck2==false)
		{
			start_content+="<pre><div class='setting'><input id='check_setting'  type='checkbox' name='check1'>Изменить порядок вопросов"
			start_content+="         <input id='check_setting'  type='checkbox' name='check2'>Изменить порядок ответов</div></pre>"
		}
		else if(bocheck1==true && bocheck2==false)
		{
			start_content+="<pre><div class='setting'><input id='check_setting' checked=0 type='checkbox' name='check1'>Изменить порядок вопросов"
			start_content+="         <input id='check_setting'  type='checkbox' name='check2'>Изменить порядок ответов</div></pre>"
		}
		else if(bocheck1==false && bocheck2==true)
		{
			start_content+="<pre><div class='setting'><input id='check_setting'  type='checkbox' name='check1'>Изменить порядок вопросов"
			start_content+="         <input id='check_setting'  type='checkbox' checked=0 name='check2'>Изменить порядок ответов</div></pre>"
		}
		else
		{
			start_content+="<pre><div class='setting'><input id='check_setting' checked=0 type='checkbox' name='check1'>Изменить порядок вопросов"
			start_content+="         <input id='check_setting'  type='checkbox' checked=0 name='check2'>Изменить порядок ответов</div></pre>"
		}
	document.getElementById("form").innerHTML = start_content;
	use_setting=true;
	}
	else{
		if(document.getElementById("form").check1.checked)
		{
			bocheck1=true;
		}
		else{
			bocheck1=false;
		}
		if(document.getElementById("form").check2.checked)
		{
			bocheck2=true;
		}
		else{
			bocheck2=false;
		}
		start_content=start_content_without_set;
		document.getElementById("form").innerHTML = start_content_without_set;
		use_setting=false;
	}
}
function finish_test()
{
		if(stop_timer==true)
		{
		document.getElementById("form").removeChild(T);
		view_question()
		stop_timer=false;
		finish_content="";
		finish_content+="<p class='Myhead'>Результаты опроса</p>"
		finish_content+="<table class='table_text' border='2' ><tr><td>№ Вопроса</td><td>Ответ на вопрос</td><td>Ваш ответ</td><td>Итог</td></tr>"
		for(var i = 0;i<Array_questions.length;i++)
		{
		finish_content+="<tr><td>"+(i+1)+"</td><td>"
		finish_content+=Array_questions[i].return_answer()
		finish_content+="</td><td>"
		if(Array_questions[i].return_answer()=="13 планет")
		{
			if(Answer_user.return_answer1()=="")
			{
				finish_content+="Ответ не дан";
			}
			else
			{
				finish_content+=Answer_user.return_answer1()
			}
			finish_content+="</td>"
			if(Answer_user.return_answer1()==Array_questions[i].return_answer())
			{
				finish_content+="<td class='Answer_right'>Правильно";
			}
			else
			{
				finish_content+="<td class='Answer_wrong'>Неправильно";
			}
		}
		else if(Array_questions[i].return_answer()=="Юпитер")
		{
		if(Answer_user.return_answer2()=="")	
		{
			finish_content+="Ответ не дан";
		}
		else
		{
			finish_content+=Answer_user.return_answer2()
		}
		finish_content+="</td>"
		if(Answer_user.return_answer2()==Array_questions[i].return_answer())
		{
			finish_content+="<td class='Answer_right'>Правильно";
		}
		else
		{
			finish_content+="<td class='Answer_wrong'>Неправильно";
		}
		}
		else if(Array_questions[i].return_answer()=="8")
			{
		if(Answer_user.return_answer3()=="")	
		{
			finish_content+="Ответ не дан";
		}
		else
		{
			finish_content+=Answer_user.return_answer3()
		}
		finish_content+="</td>"
		if(Answer_user.return_answer3()==Array_questions[i].return_answer())
		{
			finish_content+="<td class='Answer_right'>Правильно";
		}
		else
		{
			finish_content+="<td class='Answer_wrong'>Неправильно";
		}
		}
		else if(Array_questions[i].return_answer()=="Водород и гелий")
		{
		if(Answer_user.return_answer4()=="")	
		{
			finish_content+="Ответ не дан";
		}
		else
		{
			finish_content+=Answer_user.return_answer4()
		}
		finish_content+="</td>"
		if(Answer_user.return_answer4()==Array_questions[i].return_answer())
		{
			finish_content+="<td class='Answer_right'>Правильно";
		}
		else
		{
			finish_content+="<td class='Answer_wrong'>Неправильно";
		}
		}
		else
		{
			if(Answer_user.return_answer5()=="")	
			{
				finish_content+="Ответ не дан";
			}
			else
			{
				finish_content+=Answer_user.return_answer5()
			}
			finish_content+="</td>"
			if(Answer_user.return_answer5()==Array_questions[i].return_answer())
			{
			finish_content+="<td class='Answer_right'>Правильно";
			}
			else
			{
			finish_content+="<td class='Answer_wrong'>Неправильно";
			}
		}
		finish_content+="</td></tr>"
		}
		finish_content+="</table>"
		finish_content+="<p id='button_again_text'><input id='button_again' type='button' onclick='but_Reset()' value='Перезапустить'></p>"
		document.getElementById("form").innerHTML=finish_content;
		}
}