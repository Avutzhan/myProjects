<html>

<head>
	<title>Search AutoComplete</title>
</head>
<script src="https://code.jquery.com/jquery-1.6.2.min.js" integrity="sha256-0W0HoDU0BfzslffvxQomIbx0Jfml6IlQeDlvsNxGDE8=" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/ui/1.8.20/jquery-ui.min.js" integrity="sha256-WS0RnlEWD7fRUj0gsEfSW0hG5SQ6MoYkE5Nk/SJwZIs=" crossorigin="anonymous"></script>
<link href="https://code.jquery.com/ui/1.8.20/themes/smoothness/jquery-ui.css" type="text/css" rel="stylesheet">
<script type="text/javascript">
	$(document).ready(function() {
		$('#productName').autocomplete({
			source: 'search.php'
		});
	});
</script>

<body>

	<form>
		Product Name <input type="text" id="productName">
	</form>

</body>

</html>