<?php
    session_start();
    include_once('../includes/connection.php');

    if (isset($_SESSION['logged_in'])) {
?>

<html>
    <head>
        <title>Simple CMS</title>
        <link rel="stylesheet" href="../assets/style.css">
    </head>

    <body>
        <div class="container">
            <a href="index.php" id="logo">CMS</a>
            <br /><br />

            <ol>
                <li><a href="add.php">Add Article</a></li>
                <li><a href="delete.php">Delete Article</a></li>
                <li><a href="logout.php">Logout</a></li>
            </ol>
        </div>
    </body>
</html>

<?php

    } else {
        if (isset($_POST['username'], $_POST['password'])) {
            $username = $_POST['username'];
            $password = $_POST['password'];
            if (empty($username) or empty($password)) {
                $error = 'All fields are required';
            } else {
                $query = $pdo->prepare("SELECT * FROM users WHERE user_name = ? AND user_password = ?");
                $query->bindValue(1, $username);
                $query->bindValue(2, $password);
                $query->execute();
                $num = $query->rowCount();
                if($num == 1) {
                    //user entered correct details
                    $_SESSION['logged_in'] = true;
                    header('Location: index.php');
                    exit();
                }else {
                    //user entered false details
                    $error = 'Bad Details';
                }
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
            <br /><br />

            <?php if (isset($error)) { ?>
                <small style="color: #aa0000;"> <?php echo $error; ?> </small>
                <br /><br />
            <?php } ?>

            <form action="index.php" method="post" autocomplete="off">
                <input type="text" name="username" placeholder="username"/>
                <input type="text" name="password" placeholder="password"/>
                <input type="submit" value="login"/>
            </form>
        </div>
    </body>
</html>
<?php
}
?>