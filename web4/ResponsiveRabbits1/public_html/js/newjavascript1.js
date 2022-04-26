class Question
{
	constructor(answer,general_question,type,name,button_name,number)
	{
		this.answer=answer;
		this.general_question=general_question;
		this.type=type;
		this.name=name;
		this.button_name=button_name;
		this.number=number;
		this.array_question=[];
		this.content_question="";
		this.button_content="";
		this.flag_change=false;
		this.choice_answer=[];
		this.content_choice="";
	}
	clean_my_object()
	{
		this.content_question="";
		this.button_content="";
		this.flag_change=false;
		var Mycounter = this.choice_answer.length
		for(var i = 0;i<Mycounter;i++)
		{
		this.choice_answer.shift();
		}
		this.content_choice="";
	}
	return_answer()
	{
		return this.answer;
	}
	return_number()
	{
		return this.number;
	}
	make_button(number)
	{
		if(this.flag_change==false)
		{
		this.button_content="";
		this.button_content+="<input id='button_menu' type='button' value='Вопрос"+number+"' onclick='make_global_content("+this.number+")' name='"+this.button_name+"'><br>"
		}
		else
		{
			this.button_content="";
			this.button_content+="<input id='button_menu_ready' type='button' value='Вопрос"+number+"' onclick='make_global_content("+this.number+")' name='"+this.button_name+"'><br>"
		}
			
	}
	return_button_content()
	{
		return this.button_content;
	}
	return_text_general()
	{
		return this.general_question;
	}
	return_general_question()
	{
		return "<p class='Question_Head'>"+this.general_question+"</p>"
	}
	add_question(answer)
	{
		this.array_question.push(answer);
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
	return_answer_choice()
	{
		switch(this.type)
		{
			case 1:
				return this.choice_answer[0]
			case 2:
				return this.choice_answer[0]
			case 3:
				return this.choice_answer[0]
			case 4:
				this.choice_answer.sort();
				for(var i = 0;i<this.choice_answer.length;i++)
				{
					this.content_choice+=this.choice_answer[i];
					if(i!=this.choice_answer.length-1)
					{
						this.content_choice+=",";
					}
				}
				return this.content_choice;
		}
	}
	change_content(lastnumber)
	{
			if(lastnumber==this.number)
			{
				switch(this.type)
				{
			case 1:
				this.content_question="";
				for(var i =0;i<this.array_question.length;i++)
				{
					if(document.forms[0].elements[i].checked)
					{
						this.flag_change=true;
						this.choice_answer[0]=this.array_question[i];
						this.content_question+="<p class='Questions'><input type='radio' checked name='"+this.name+"' value='"+this.array_question[i]+"' >"+this.array_question[i]+"</p>";
					}
					else{
					this.content_question+="<p class='Questions'><input type='radio' name='"+this.name+"' value='"+this.array_question[i]+"' >"+this.array_question[i]+"</p>";
					}
				}
				break;
			case 2:
					this.content_question="";
					var check_prop=0;
					var a=" ";
					while(check_prop<100)
					{
						var check_string="";
						var b = new Array(check_prop).join(a);
						for(var i = 0 ;i<b.length;i++)
						{
							check_string+=b[i];
						}
						if(document.forms[0].elements[0].value!=check_string)
						{
							this.flag_change=true;
						}
						else
						{
							this.flag_change=false;
							break;
						}
						check_prop++;
					}
					this.content_question+="<p class='Questions'><input name='"+this.name+"' value='"+document.forms[0].elements[0].value+"'>";
					this.choice_answer[0]=document.forms[0].elements[0].value;
				break;
			case 3:
				this.content_question="";
				this.content_question+="<p class='Questions'><select name='"+this.name+"' size=4 >";
				for(var i =0;i<this.array_question.length;i++)
				{
					if(document.forms[0].elements[0].value==this.array_question[i])
					{
						this.flag_change=true;
						this.content_question+="<option selected value='"+this.array_question[i]+"'>"+this.array_question[i];
						this.choice_answer[0]=this.array_question[i];
					}
					else{
					this.content_question+="<option value='"+this.array_question[i]+"'>"+this.array_question[i];
					}
				}
				this.content_question+="</select>"
				break;
			case 4:
				this.content_question="";
				var temp ;
				var green=new Array(this.array_question.length);
				for(var i =0;i<this.array_question.length;i++)
				{
					if(document.forms[0].elements[i].checked)
					{
						temp=false;
						this.content_question+="<p  class='Questions'><input type='checkbox' checked name='"+(this.name+(i+1))+"'>"+this.array_question[i]+"</p>";
						green[i]=true;
						for(var j = 0;j<this.choice_answer.length;j++)
						{
							if(this.choice_answer[j]==this.array_question[i])
							{
								temp=true;
								break;
							}
						}
						if(temp==false)
						{
						this.choice_answer.push(this.array_question[i]);
						}
						temp=false;
					}
					else
					{
					for(var j = 0;j<this.choice_answer.length;j++)
					{
						if(this.choice_answer[j]==this.array_question[i])
						{
							this.choice_answer.splice(j,1)
						}
					}
					this.content_question+="<p  class='Questions'><input type='checkbox' name='"+(this.name+(i+1))+"'>"+this.array_question[i]+"</p>";
					green[i]=false;
					}
				}
				for(var i = 0;i<green.length;i++)
				{
					if(green[i]==true)
					{
						this.flag_change=true;
						break;
					}
					else{
						this.flag_change=false;
					}
				}
				break;
				}		
			}
	}
	make_content()
	{
		switch(this.type)
		{
			case 1:
				for(var i =0;i<this.array_question.length;i++)
				{
					this.content_question+="<p class='Questions'><input type='radio' name='"+this.name+"' value='"+this.array_question[i]+"' >"+this.array_question[i]+"</p>";
				}
				break;
			case 2:
					this.content_question+="<p class='Questions'><input name='"+this.name+"' >";
				break;
			case 3:
				this.content_question+="<p class='Questions'><select name='"+this.name+"' size=4 >";
				for(var i =0;i<this.array_question.length;i++)
				{
					this.content_question+="<option value='"+this.array_question[i]+"'>"+this.array_question[i];
				}
				this.content_question+="</select>"
				break;
			case 4:
				for(var i =0;i<this.array_question.length;i++)
				{
					this.content_question+="<p  class='Questions'><input type='checkbox' name='"+(this.name+(i+1))+"'>"+this.array_question[i]+"</p>";
				}
				break;
		}		
	}
	return_content_question()
	{
		return this.content_question;
	}
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
Question_one=new Question("13 планет","Количество планет в солнечной системе?",1,"question1","button_1",1);
Question_one.add_question("13 планет");
Question_one.add_question("9 планет");
Question_one.add_question("8 планет");
Question_one.add_question("11 планет"); 
Question_two=new Question("Юпитер","Самая большая планета в солнечной системе?",1,"question2","button_2",2);
Question_two.add_question("Юпитер");
Question_two.add_question("Уран");
Question_two.add_question("Земля");
Question_two.add_question("Сатурн");
Question_three=new Question("8","Количество спутников у Нептуна? (Число)",2,"question3","button_3",3)
Question_four = new Question("Водород и гелий","Химический состав Сатурна?",3,"question4","button_4",4)
Question_four.add_question("Водород и углекислый газ")
Question_four.add_question("Водород и гелий")
Question_four.add_question("Сероводород и метан")
Question_four.add_question("Хлор и азот")
Question_four.add_question("Этан и водяной пар")
Question_four.add_question("Водород и сероводород")
Question_five=new Question("Нептун,Сатурн,Юпитер","Какие планеты относятся к газовым гигантам?",4,"question5","button_5",5)
Question_five.add_question("Сатурн")
Question_five.add_question("Марс")
Question_five.add_question("Меркурий")
Question_five.add_question("Нептун")
Question_five.add_question("Юпитер")
Array_questions=[];
Array_questions.push(Question_one);
Array_questions.push(Question_two);
Array_questions.push(Question_three);
Array_questions.push(Question_four);
Array_questions.push(Question_five);
global_content="";
button_menu=[];
button_content="";
Timer = 60;
lastnumber=0;
start_content ="<p class='Myhead'>Опросник <br>Предмет 'Астрономия'"
start_content+="<br>Тема 'Состав и масштаб солнечной системы'<br>"
start_content+="<br><input id='button_start' type='button' value='Начать' onclick='start()' name='startb'><br>" 
start_content+="<br><input id='button_start' type='button' value='Настройки' onclick='setting()' name='setb'></p>"
start_content_without_set=start_content;
use_setting=false;
bocheck1=false;
bocheck2=false;
document.getElementById("form").innerHTML=start_content;
var T = document.createElement("p");
T.id="Time_style";
Array_choice=[];
function hexclock()
{
	T.innerText="";
	Timer=Timer-1;
	if(Timer==-1)
	{
		finish_test();
	}
	else
	{
	Ttext=document.createTextNode("Осталось "+Timer+" секунд(ы/а)");
	T.appendChild(Ttext);
	document.getElementById("form").appendChild(T);
	}
}
function make_buttons_menu()
{
	for(var i = 0;i<button_menu.length;i++)
	{
		button_menu.splice(i);
	}
	button_menu[0]="<p>"
	for(var i = 0;i<Array_questions.length;i++)
	{
		button_menu.push(Array_questions[i].return_button_content())
	}
	button_menu[Array_questions.length+1]="<input id='button_finish' type='button' value='Закончить' onclick='finish_test()' name='question6_b'><br>";
	button_menu[Array_questions.length+2]="</p>";
}
function make_button_content()
{
	button_content="";
	for(var i = 0;i<button_menu.length;i++)
	{
		button_content+=button_menu[i];
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
function make_global_content(number)
{
	for(var i = 0;i<Array_questions.length;i++)
	{
		Array_questions[i].change_content(lastnumber);
	}
	for(var i = 0;i<Array_questions.length;i++)
	{
		Array_questions[i].make_button(" "+(i+1));
	}
	make_buttons_menu()
	make_button_content()
	for(var i = 0;i<Array_questions.length;i++)
	{
		if(Array_questions[i].return_number()==number)
		{
			global_content=Array_questions[i].return_general_question()+Array_questions[i].return_content_question()+button_content;
			lastnumber=Array_questions[i].return_number();
			break;
		}
	}
	document.getElementById("form").innerHTML=global_content;
	T.innerText="";
	Ttext=document.createTextNode("Осталось "+Timer+" секунд(ы/а)");
	T.appendChild(Ttext);
	document.getElementById("form").appendChild(T);
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
					Array_questions[i].mix_up();
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
				Array_questions[i].mix_up();
			}
		}
	}
	for(var i = 0;i<Array_questions.length;i++)
	{
		Array_questions[i].make_content();
		Array_questions[i].make_button(" "+(i+1));
	}
	make_buttons_menu()
	make_button_content()
	global_content=Array_questions[0].return_general_question()+Array_questions[0].return_content_question()+button_content;
	lastnumber=Array_questions[0].return_number();
	document.getElementById("form").innerHTML=global_content+T.textContent;
	Ttext=document.createTextNode("Осталось "+Timer+" секунд(ы/а)");
	T.appendChild(Ttext);
	document.getElementById("form").appendChild(T);
	S=setInterval(hexclock,1000);
	make_global_content(0)
}
function finish_test()
{
	right=0;
	wrong=0;
	make_global_content(lastnumber)
	clearInterval(S);
	document.getElementById("form").removeChild(T);
	finish_content="";
	finish_content+="<p class='Myhead'>Результаты опроса</p>"
	finish_content+="<table class='table_text' border='2' ><tr><td>№ Вопроса</td><td>Вопрос</td><td>Ответ на вопрос</td><td>Ваш ответ</td><td>Итог</td></tr>"
	for(var i = 0 ;i<Array_questions.length;i++)
	{
	Array_choice.push(Array_questions[i].return_answer_choice())
	finish_content+="<tr><td>"+(i+1)+"</td><td>"
	finish_content+=Array_questions[i].return_text_general()+"</td><td>";
	finish_content+=Array_questions[i].return_answer()
	finish_content+="</td><td>"
	if(Array_choice[i]==undefined || Array_choice[i]=="")
	{
		finish_content+="Ответ не дан";
	}
	else{
		finish_content+=Array_choice[i];
	}
	finish_content+="</td>"
	if(Array_choice[i]==Array_questions[i].return_answer())
	{
		finish_content+="<td class='Answer_right'>Правильно";
		right++;
	}
	else{
		finish_content+="<td class='Answer_wrong'>Неправильно";
		wrong++;
	}
	finish_content+="</td>"
	}
	finish_content+="</table>"
	finish_content+="<pre><p id='button_again_text'>Правильных ответов: "+right+"     Неправильных ответов: "+wrong+"</p></pre>"
	finish_content+="<p id='button_again_text'><input id='button_again' type='button' onclick='but_Reset()' value='Перезапустить'></p>"
	document.getElementById("form").innerHTML=finish_content;
}
function but_Reset()
{
	global_content="";
	button_menu.splice();
	button_content="";
	Timer = 60;
	lastnumber=0;
	start_content ="<p class='Myhead'>Опросник <br>Предмет 'Астрономия'"
	start_content+="<br>Тема 'Состав и масштаб солнечной системы'<br>"
	start_content+="<br><input id='button_start' type='button' value='Начать' onclick='start()' name='startb'><br>" 
	start_content+="<br><input id='button_start' type='button' value='Настройки' onclick='setting()' name='setb'></p>"
	start_content_without_set=start_content;
	use_setting=false;
	bocheck1=false;
	bocheck2=false;
	for(var i =0;i<Array_questions.length;i++)
	{
		Array_choice.shift()
		Array_questions[i].clean_my_object();
	}
	Mycounter = Array_questions.length;
	for(var i =0;i<Mycounter;i++)
	{
		Array_questions.shift();
	}
	Array_questions.push(Question_one);
	Array_questions.push(Question_two);
	Array_questions.push(Question_three);
	Array_questions.push(Question_four);
	Array_questions.push(Question_five);
	document.getElementById("form").innerHTML=start_content;
}