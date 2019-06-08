<!--<?php 
	/*require_once "blocks/head.php";*/
?>-->

<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Обратная связь / Newhitech.com</title>
	<link rel="stylesheet" href="css/main.css" type="text/css">
	<link rel="stylesheet" href="css/aside.css" type="text/css">
	<link rel="stylesheet" href="css/form.css" type="text/css">
	<meta name="description" content="New Hi-Tech">
	<meta name="keywords" content="New Hi-Tech">
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
					<h2 class="heading">Обратная связь</h2>
					<div style="clear: both"><br></div>	

					<div class="block">
						Чтобы отправить нам сообщение, просто заполните форму и отправьте нам.

						<form>
							<div>
								<input type="text" id="name" placeholder="Ваше имя" onclick="$(this).css ('border-color', '#ccc')"><br>
								<input type="email" id="email" placeholder="Email.." onclick="$(this).css ('border-color', '#ccc')">
							</div>
							<div>
								<textarea id="message" placeholder="Введите само сообщение" onclick="$(this).css ('border-color', '#ccc')"></textarea>
							</div>
							<input type="button" id="send" class="btn" value="Отправить">
						</form>
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

<script>
$('#send').click (function () {
	var email = $('#email').val ();
	var name = $('#name').val ();
	var message = $('#message').val ();
	$.ajax({
		url:    	'ajax/kontakti.php',
		type:		'POST',
		cache: 		false,
		data:   	{'name':name, 'email':email, 'message':message},
		dataType:	'html',
		beforeSend: function () {
			$('#send').attr ("disabled", "disabled");
		},
		success: function(data) {
			if (data == true) {
				$('#name').val ("");
				$('#email').val ("");
				$('#message').val ("");
				$('#send').text ("Сообщение отправлено");
				$('#email').css ("border-color", "#60fc8c");
				$('#name').css ("border-color", "#60fc8c");
				$('#message').css ("border-color", "#60fc8c");
			} else {
				if (data == false)				
					alert ("Что-то пошло не так! Сообщение не отправлено");
				else {					
					switch (data) {
					case "Имя не указано":
					$('#name').css ("border-color", "#f7b4b4");
					break;
					case "Сообщение не указано":
					$('#message').css ("border-color", "#f7b4b4");
					break;
					case "Неправильный e-mail":
					$('#email').css ("border-color", "#f7b4b4");
					break;
					default:
					$('#email').css ("border-color", "#f7b4b4");
					$('#message').css ("border-color", "#f7b4b4");
					$('#name').css ("border-color", "#f7b4b4");
					}
				}
			}
			$('#send').removeAttr ("disabled");				
		}
	});
});
</script>
</body>
</html>


