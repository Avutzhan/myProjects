<?php
require 'product.php';
$listProducts = array();

$product1 = new Product();
$product1->id = 'p1';
$product1->name = 'Product 1';
$product1->price = 100;
array_push($listProducts, $product1);

$product2 = new Product();
$product2->id = 'p2';
$product2->name = 'Product 2';
$product2->price = 200;
array_push($listProducts, $product2);

$product3 = new Product();
$product3->id = 'p3';
$product3->name = 'Product 3';
$product3->price = 300;
array_push($listProducts, $product3);

echo json_encode($listProducts);
?>