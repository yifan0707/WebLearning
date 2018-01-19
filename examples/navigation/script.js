function connection(){
	console.log("worked");
}

var navStatus=true;
function hideNav(){
	if(navStatus){
		document.getElementById("navigation").style.left="-300px";
		navStatus=false;
	}else{
		document.getElementById("navigation").style.left="0px";
		navStatus=true;
	}
}