<!DOCTYPE html>
<html>
<head>
	<title>Loop pho examples</title>
</head>
<body>


<?php 
	//for each loop only works only on arrays
	//foreach(arrayName as $value){}
	//count method is used to count the number of the elements
	$numbers=array("number1","number2","number3");
	echo count($numbers)."</br>";
	foreach($numbers as $x){
		echo $x."</br>";
	}

	//php accosciative array
	//there is two way creating inner value 
	//1. using "'name'=>'value'"
	//2. using $arrayName['name']='value';
	$infos=array("Alvin"=>"Future PHP programmer", "Ben"=>"Amazing tutor");
	echo $infos["Alvin"]."</br>";
	echo $infos["Ben"]."</br>";
	$infos["Anonymous"]="No Such person!";
	echo $infos["Anonymous"]."</br>";


	//creating function 
	//function functioname(){}
	function outputString($string){
		echo $string."</br>";
	}
	outputString("The string to be outputed.");
	
	//function that use default value
	function defaultValueFunction($variable="DEFAULT"){
		echo "$variable is the current value.</br>";
	}
	defaultValueFunction();
	defaultValueFunction(20);
?>



</body>
</html>