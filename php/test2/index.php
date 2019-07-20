<?php
require 'connect.php';
if(isset($_POST['buttomImport'])) {
    copy($_FILES['jsonFile']['tmp_name'], 'jsonFiles/'.$_FILES['jsonFile']['name']);
    $data = file_get_contents('jsonFiles/'.$_FILES['jsonFile']['name']);
    $product = json_decode($data);
    foreach ($product as $item) {
        $stmt = $conn->prepare('insert into product(name, price, quantity) values(:name, :price, :quantity)');
        $stmt->bindValue('name', $item->name);
        $stmt->bindValue('price', $item->price);
        $stmt->bindValue('quantity', $item->quantity);
        $stmt->execute();
    }
}
?>
<html>
	<head>
		<title>Import JSON File</title>
	</head>
	<body>
		<form method="post" enctype="multipart/form-data">
			JSON File <input type="file" name="jsonFile">
			<br>
			<input type="submit" value="Import" name="buttomImport">
		</form>
	</body>
</html>