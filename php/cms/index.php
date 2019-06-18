<?php 
    include_once('includes/connection.php');
    include_once('includes/article.php');

    $article = new Article;
?>

<html>

<head>
    <title>Simple CMS</title>
    <link rel="stylesheet" href="assets/style.css">
</head>

<body>
    <div class="container">
        <a href="index.php" id="logo">CMS</a>
        
        <ol>
            <li>
                <a href="article.php?id=1">Article Title</a>
                - <small>Posted 10th Jan</small>
            </li>
        </ol>
    </div>
</body>

</html>
