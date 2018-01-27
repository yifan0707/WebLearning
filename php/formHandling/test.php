<!DOCTYPE html>
<html>
<head>
	<title>The is a test php file to testout the result of form handling</title>
</head>
<body>
	<p>The user name is: <?php echo test_data($_POST['username']) ?></p>
	<p>The user Email is: <?php echo test_data($_POST['useremail']) ?></p>

	<?php
		function test_data($value){
			$value=trim($value);
			$value=stripslashes($value);
			$value=htmlspecialchars($value);
			return $value;
		}
	?>
</body>
</html>