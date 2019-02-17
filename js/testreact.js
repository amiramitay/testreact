
function playGame()
{
	var clickedTime;
	var createdTime;
	makeBox();

	function makeBox()
	{
		var time=Math.floor((Math.random() * 5000) + 1000);
		colors=["green","red","cyan","black","blue"];
		setTimeout(function()
		{	
			var top=Math.random()*300;
			var left=Math.random()*500;
			var circle=Math.floor((Math.random()*2) +0);
			var wide=Math.floor((Math.random()*2) +0);
			console.log(circle);
			console.log(wide);
			
			if(circle==1 || wide==1)
			{
				document.getElementById("box").style.width="200px";
				document.getElementById("box").style.borderRadius = "0px";
				if(circle==1)
					document.getElementById("box").style.borderRadius = "100px";

				if(circle!=1)
					document.getElementById("box").style.width="400px";
			}
			else
			{
				document.getElementById("box").style.width="200px";
				document.getElementById("box").style.borderRadius = "0px";
			}


			document.getElementById("box").style.top=top+"px";
			document.getElementById("box").style.left=left+"px";
			document.getElementById("box").style.display="block";
			document.getElementById("box").style.backgroundColor=getRandomColor();
			createdTime=Date.now();
			console.log(createdTime);
		},time);
		document.getElementById("box").onclick=function()
		{
			clickedTime=Date.now();
			console.log(clickedTime);
			sub(clickedTime,createdTime);
			document.getElementById("box").style.display="none";
			makeBox();
		}
	}


}
function getRandomColor (){
	var letters = "0123456789ABCDEF".split('');
	var color="#";
	console.log(color);
	for(var i=0;i<6;i++)
	{
		color+=letters[Math.round(Math.random()*15)];
	}
	console.log(color);
	return color;
}
function sub(a,b)
{
	var time=(a-b)/1000;;
	console.log(time);
	document.getElementById("time").innerHTML=time;
}









