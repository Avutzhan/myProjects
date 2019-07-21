<?php
require 'connect.php';
$stmt = $con->prepare('select * from product where name like :keyword');
$stmt->bindValue('keyword', '%'.$_GET['term'].'%');
$stmt->execute();
$result = array();
while($product = $stmt->fetch(PDO::FETCH_OBJ)) {
	array_push($result, $product->name);
}
echo json_encode($result);
?>