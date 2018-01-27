<!DOCTYPE html>
<html>
<head>
	<title>Php Intro</title>
</head>
<body>
<form method='GET'>
	<input type='text' name='person' value="1">
	<button>Submit</button>
</form>


<?php
	echo 10;
	echo " ";
	echo 20-1;
	echo " number</br>";
	print "this is another way to print stuff</br>";
 	
	$name = $_GET['person'];
	$string1="Hello";
	$string2="world!";
	//using dot '.' to connect variable and string
	//using '.=' to appends one string to another
	echo $name." is a handsome fellow!</br>";
	$string1.=$string2;
	echo $string1."</br>";
	//strlen is the buildin method in the php
	//str_word_count("Hi Daniel") this count the number of the words
	//strrev("Hi Daniel") -> leinaD iH.   This out reverse the original sentance
	echo "String: 'Count Length' length is: ".strlen("Count Length")."</br>";
	
	//output the first index of the 
	echo strpos("Hi Daniel", "D")."</br>";
	//replacing the first word with the next word
	echo str_replace("Danial", "Alvin", "Hi Danial").'</br>';

	//creating an array
	$names=array('Daniel','Dennis','Michael');
	echo $names[0].'</br>';

	//creating an object
	class Car{
		function Car(){
			$this->model="something";
		}
	}

	$objectInstance=new Car();

	echo $objectInstance->model;
	echo "</br>";

	/*
	creating a constant 
	using: define(name,value,case-insensitive)
	the default value of the case-insentive component is FALSE!
	The constant value is constant
	*/
	define("CustomerName","CustomerName is Alvin");
	echo CustomerName."</br>";

	if(true){

	}elseif(true){

	}else{

	}


	$number=1;
	switch($number){
		case 'haha':
		//the conde that will perform if $number=='haha'
		break;
		case '1':
		echo "Switch case number 1";
		break;
		default:
		//the conde to be executed if the $number is different from all labels;
		echo "No number found";

	}



?>

</body>
</html>