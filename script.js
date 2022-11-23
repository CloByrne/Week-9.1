//print from 0 to 10
function myfunction(){

	
	for(i=99;i>=1;i=i-1){
		var count = 99;
		if(count>=1){
			document.getElementById("main").innerHTML+="<br/>"+i+" bottles of beer on the wall, "+i+" bottles of beer. Take one down pass it around, "+(i-1)+" bottles of beer on the wall.";	
		}
		
		//else {
			//document.getElementById("main").innerHTML+="<br/> No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.";
		//}
	}
	document.getElementById("main").innerHTML+="<br>No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.";	
}

