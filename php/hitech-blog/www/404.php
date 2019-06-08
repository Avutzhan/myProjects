<!--<?php 
	/*require_once "blocks/head.php";*/
?>-->

<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Ошибка 404 / Newhitech.com</title>
	<link rel="stylesheet" href="css/main.css" type="text/css">
	<link rel="stylesheet" href="css/aside.css" type="text/css">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="img/favicon.ico" rel="shortcut icon" type="image/x-icon">
	<link rel="stylesheet" href="css/font-awesome.min.css">

</head>
<body>
	<div id="wrapper">
		<div id="content">
			
			<?php 
				require_once "blocks/header.php";
			?>

			<div id="main">
				<div id="news">
					<h2 class="heading">Ошибка 404</h2>
					<div style="clear: both"><br></div>	
					<div class="block">
						Упс ошибка такой страницы нет 
					</div>
				</div>
			</div>

			<?php 
				require_once "blocks/aside.php";
			?>
		</div>
			<?php 
				require_once "blocks/footer.php";
			?>
	</div>

	<?php 
				require_once "blocks/scripts.php";
			?>
</body>
</html>
