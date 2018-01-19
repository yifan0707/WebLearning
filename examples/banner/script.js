var status=1;

var interval=window.setInterval(bannerLoop,4000);

window.onload=function (){
	bannerLoop();

	document.getElementById("banner").onmouseenter = function (){
		window.clearInterval(interval);
	};

	document.getElementById("banner").onmouseleave=function(){
		interval=window.setInterval(bannerLoop,4000);
	};
}

function swipe(buttonID){
	if(buttonID==="leftButton"){
		bannerLoop();
	}else if(buttonID==="rightButton"){
		bannerLoop2();
	}
}


function bannerLoop(){
	if(status==1){
		setTimeout(function() {
			document.getElementById("image1").style.zIndex="1000";
			document.getElementById("image1").style.right="0px";
			document.getElementById("image2").style.zIndex="500";
			document.getElementById("image2").style.right="-800px";
			document.getElementById("image3").style.zIndex ="800";
			document.getElementById("image3").style.right="800px";
		}, 200);
		status=2;
	}else if (status==2){
		setTimeout(function(){
			document.getElementById("image2").style.zIndex="1000";
			document.getElementById("image2").style.right="0px";
			document.getElementById("image1").style.zIndex="800";
			document.getElementById("image1").style.right="800px";
			document.getElementById("image3").style.zIndex="500";
			document.getElementById("image3").style.right="-800px";
		},200);
		status=3;
	}else if(status==3){
		setTimeout(function(){
			document.getElementById("image3").style.zIndex="1000";
			document.getElementById("image3").style.right="0px";
			document.getElementById("image2").style.zIndex="800";
			document.getElementById("image2").style.right="800px";
			document.getElementById("image1").style.zIndex = "500";
			document.getElementById("image1").style.right="-800px";
		},200);
		status=1;
	}
}

function bannerLoop2(){
	if(status==1){
		setTimeout(function() {
			document.getElementById("image1").style.zIndex="1000";
			document.getElementById("image1").style.right="0px";
			document.getElementById("image2").style.zIndex="500";
			document.getElementById("image2").style.right="-800px";
			document.getElementById("image3").style.zIndex ="800";
			document.getElementById("image3").style.right="800px";
		}, 200);
		status=3;
	}else if (status==2){
		setTimeout(function(){
			document.getElementById("image2").style.zIndex="1000";
			document.getElementById("image2").style.right="0px";
			document.getElementById("image1").style.zIndex="800";
			document.getElementById("image1").style.right="800px";
			document.getElementById("image3").style.zIndex="500";
			document.getElementById("image3").style.right="-800px";
		},200);
		status=1;
	}else if(status==3){
		setTimeout(function(){
			document.getElementById("image3").style.zIndex="1000";
			document.getElementById("image3").style.right="0px";
			document.getElementById("image2").style.zIndex="800";
			document.getElementById("image2").style.right="800px";
			document.getElementById("image1").style.zIndex = "500";
			document.getElementById("image1").style.right="-800px";
		},200);
		status=2;
	}
}
