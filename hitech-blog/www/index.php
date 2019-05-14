<!--<?php 
	/*require_once "blocks/head.php";*/
?>-->

<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Newhitech.com</title>
	<link rel="stylesheet" href="css/main.css" type="text/css">
	<link rel="stylesheet" href="css/main_page.css" type="text/css">
	<link rel="stylesheet" href="css/aside.css" type="text/css">
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
					<h2 class="heading">IT новости</h2>
					<div style="clear: both"><br></div>
					
					<!--Статья-->


					<?php 
						for ($i = 0; $i < 6; $i++)
							echo '<div class="article">
						<img src="https://d2jq2hx2dbkw6t.cloudfront.net/377/logo-text-mini.png" alt="Test" title="Test">

						<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </span>
					</div>';
					
					?>
					<a href="" title="Посмотреть больше статей">
						<div class="btn">
							Посмотреть больше
						</div>
					</a>

				</div>
			</div>

			<?php 
				require_once "blocks/aside.php";
			?>

			<div id="subscribe">
				<span>Подпишитесь чтобы быть в курсе</span>
				<div style="clear: both"><br></div>

				<script type="text/javascript" src="//vk.com/js/api/openapi.js?146"></script>
				

				 <!--VK Widget-- >
				<div id="vk_groups"></div>
				<script type="text/javascript">
				VK.Widgets.Group("vk_groups", {mode: 3, width: "500", color2: '4C3D3D'}, 20003922);
				</script>
				<div style="clear: both"><br></div>

				<!--Facebook-->
				<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=350&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="350" height="400" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
				<!--Twitter-->
				<a class="twitter-timeline" data-width="350" data-height="400" href="https://twitter.com/DautovAvutzhan">Tweets by DautovAvutzhan</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
			</div>

			<div id="sub_to_project">
				<span class="heading">Подписаться на проект</span>
				<div style="clear: both"><br></div>
				<p>Чтобы получить доступ ко всем функциям сайта оформите подписку на проект</p>
				<a href="" title="Посмотреть информацию о подписке">
					<div class="btn">
						Узнать детальнее о подписке
					</div>
				</a>
				<div style="clear: both"><br></div>
				<h2 class="heading">Создание онлайн магазина </h2>
				<div style="clear: both"><br></div>
				<img src="https://i.ytimg.com/vi/dk8gpz0o5TU/maxresdefault.jpg" alt="Test" title="Test">
			</div>
			<div style="clear: both"><br></div>
			<div id="web_sites">
				<span>Хотите создать сайт</span>
				<a href="" title="Заказать сайт">
					<div class="btn">
						Заказать сайт
					</div>
				</a>
			</div>
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


