<!DOCTYPE html>
<html>
<head>
	<title>basic tutorial of php - GlobalVariables(Superglobals)</title>
</head>
<body>
	<form method='post' action='<?php echo $_SERVER['PHP_SELF']; ?>'>
		<p>Name:<input type='text' name='fname'></p>
		<input type='submit'>
	</form>



<?php 
	//"$GLOBALS" is a global variable which is used to access global variables from anywhere in the PHP script
	$x=20;
	$y=25;
	/*
	!!!!!! In the example below, 'echo $z' will cause error message that $z is undefined

	function addition(){
		$z=$x+$y;
	}
	addition();
	echo $z;
	*/
	function addition(){
		$GLOBALS['z']=$GLOBALS['x']+$GLOBALS['y'];
	}
	addition();
	echo $z.'</br>';

	// $_SERVER is a PHP super global variable which holds information about headers, paths and script locations.
	//['PHP_SELF'], ['SERVER_NAME'],['HTTP_HOST'],['HTTP_REFERER'],['HTTP_USER_AGENT'],['SCRIPT_NAME'],ETC... 
	//https://www.w3schools.com/php/php_superglobals.asp
	echo $_SERVER['PHP_SELF'].'</br>';

	// $_REQUEST is ued to collect data after submitting an HTML form.
	if($_SERVER['REQUEST_METHOD']=='POST'){
		//in this case, both value and REQUEST will work perfectly
		$value=$_REQUEST['fname'];
		//$value=$_POST['fname'];
		if(empty($value)){
			echo "Name is empty";
		}else{
			echo $value;
		}
	}


	// $_POST
	// $_GET
	// both _POST and _GET are used to collect data after submitting an html form 

	
	// $_FILES
	// $_ENV
	// $_COOKIE
	// $SESSION	
?>
</body>
</html>