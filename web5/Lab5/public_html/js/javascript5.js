count=25;
lastsize=[];
boolarr=[]
div_array=[]
Left=[];
Top=[];
size=[];
Id_array=[];
arr_color=["green","red","orange","blue","pink","yellow","black","gray","gold","chocolate"]
index_color=0;
document.getElementById("Head").innerHTML="Осталось фигур "+count;
for(var i = 0;i<count;i++)
{
	boolarr[i]=false;
	lastsize[i]=100;
	div_array[i]=document.createElement("div")
	div_array[i].id="box"+i;
	Id_array[i]="#box"+i;
	document.getElementById("form").appendChild(div_array[i]);
	if(index_color==arr_color.length)
	{index_color=0;}
	$(Id_array[i]).css({marginTop: "50px" ,background: arr_color[index_color],position: "absolute" , top: Math.floor(Math.random()*500)+"px" , left: Math.floor(Math.random()*1000)+"px",width: Math.floor((Math.random()*50)+50) +"px" ,height: Math.floor((Math.random()*50)+50) +"px"})
	index_color++;
}
function myClick(number)
{
			$("#box"+number).click(function()
			{
			index=Id_array.indexOf("#box"+number)
			if(boolarr[index]==true)
			{
				$("#box"+number).remove();
				lastsize.splice(index,1)
				boolarr.splice(index,1)
				div_array.splice(index,1);
				Left.splice(index,1);
				Top.splice(index,1);
				size.splice(index,1);
				Id_array.splice(index,1)
				count--;
				document.getElementById("Head").innerHTML="Осталось фигур "+count;
				if(count==0)
				{
					document.getElementById("Head").innerHTML="Фигур не осталось";
				}
					
			}
			})
}
for(var i =0;i<count;i++)
{
myClick(i);
}
function move()
{
			for(var i =0 ;i<count;i++)
			{
			Left[i]=Math.floor(Math.random()*1000);
			Top[i]=Math.floor(Math.random()*500);
			size[i]=Math.floor((Math.random()*50)+50);
			if(size[i]>lastsize[i])
			{
				boolarr[i]=true;
			}
			else if (size[i]==lastsize[i])
			{
				boolarr[i]=false;
			}
			else{
				boolarr[i]=false;
			}
			}
			for(var i = 0;i<count;i++)
			{
			$(Id_array[i]).animate({left: Left[i],top: Top[i],width: size[i],height:size[i]},2000)
			lastsize[i]=size[i];
			console.log(Id_array[i]);
			console.log(boolarr[i])
			}
			console.log(count);
			console.log(Id_array.length);
}
move()
$(document).ready(function()
{
			setInterval(function ()
		{
			move()
		},2000)
});