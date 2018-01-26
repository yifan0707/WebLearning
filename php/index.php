<!DOCTYPE html>
<html>
<head>
	<title>Php Intro</title>
</head>
<body>
<form method='GET'>
	<input type='text' name='person'>
	<button>Submit</button>
</form>


<?php
	echo 10;
	echo " ";
	echo 20-1;
	echo " number</br>";
	print "this is another way to print stuff</br>";

	$name = $_GET['person'];
	//using dot '.' to connect variable and string
	echo $name." is a handsome fellow!</br>";
	//strlen is the buildin method in the php
	//str_word_count("Hi Daniel") this count the number of the words
	//strrev("Hi Daniel") -> leinaD iH.   This out reverse the original sentance
	echo "String: 'Count Length' length is: ".strlen("Count Length")."</br>";
	//output the first index of the 
	echo strpos("Hi Daniel", "D")."</br>";
	//replacing the first word with the next word
	echo str_replace("Danial", "Alvin", "Hi Danial").'</br>';

	$names=array('Daniel','Dennis','Michael');
	echo $names[0];


?>

</body>
</html>