var days = document.getElementById("days");
var color = document.getElementById("color");
function hexclock()
{
	var time = new Date();
	var h = (time.getHours()%12).toString();
	var m = time.getMinutes().toString();
	var s = time.getSeconds().toString();
	var mon = time.getMonth().toString();
	var days_new = -(time.getDate()-1);
	if(h.length<2)
	{
		h="0"+h;
	}
	if(m.length<2)
	{
		m="0"+m;
	}
	if(s.length<2)
	{
		s="0"+s;
	}
	for(i=11;i>=mon;i--)
	{
		switch(i)
		{
			case 11:
				days_new += 31;
				break;
			case 10:
				days_new += 30;
				break;
			case 9:
				days_new += 31;
				break;
			case 8:
				days_new += 30;
				break;
			case 7:
				days_new += 31;
				break;
			case 6:
				days_new += 31;
				break;
			case 5:
				days_new += 30;
				break;
			case 4:
				days_new += 31;
				break;
			case 3:
				days_new += 30;
				break;
			case 2:
				days_new += 31;
				break;
			case 1:
				days_new += 28;
				break;
			case 0:
				days_new  += 31;
				break;
				
		}
	}
	var days_old=days_new+13;
	var colorString = "#"+h +m +s;
	days.textContent = "         "+days_new+" дней"+"           "+days_old+" дней";
	color.textContent = colorString;
	document.body.style.background = colorString;
}

hexclock();
setInterval(hexclock,1000);