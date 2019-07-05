<?php
session_start();

include_once('../includes/connection.php');

if (isset($_SESSION['logged_in'])) {

if(isset($_POST['title'], $_POST['content'])) {
    $title = $_POST['title'];
    $content = nl2br($_POST['content']);

    if (empty($title) or empty($content)) {
        $error = 'All fields are required';
    } else {
        $query = $pdo->prepare('INSERT INTO articles (article_title, article_content, article_timestamp) VALUES (?,?, ?)');
        $query->bindValue(1, $title);

        $query->bindValue(2, $content);

        $query->bindValue(3, time());


        $query->execute();

        header('Location: index.php');
    }
}
    ?>


    <html>

    <head>
        <title>Simple CMS</title>
        <link rel="stylesheet" href="../assets/style.css">
    </head>

    <body>
    <div class="container">
        <a href="index.php" id="logo">CMS</a>

        <br>

        <h4>Add Article</h4>

        <?php if (isset($error)) { ?>
            <small style="color: #aa0000;"> <?php echo $error; ?> </small>
            <br><br>
        <?php } ?>

        <form action="add.php" method="post" autocomplete="off">
            <input type="text" name="title" placeholder="title"> <br><br>

            <textarea name="content" id="" cols="50" rows="15" placeholder="content"></textarea> <br><br>
            <input type="submit" value="Add article" />
        </form>

    </div>
    </body>

    </html>


<?php
} else {
    header('Location: index.php');
}

?>
