<?php
require 'database.php';
if(isset($_POST['save'])) {

	// Find account by username
	$stmt = $conn->prepare('select * from account where username = :username');
	$stmt->bindValue('username', $_POST['username']);
	$stmt->execute();
	$account = $stmt->fetch(PDO::FETCH_OBJ);

	// Update account information
	$stmt = $conn->prepare('update account set password = :password,
		fullname = :fullname, email = :email where username = :username');
	$stmt->bindValue('username', $_POST['username']);
	$stmt->bindValue('password', $_POST['password'] == '' ? $account->password : $_POST['password']);
	$stmt->bindValue('fullname', $_POST['fullname']);
	$stmt->bindValue('email', $_POST['email']);
	$stmt->execute();
	header('location:index.php');
}

$stmt = $conn->prepare('select * from account where username = :username');
$stmt->bindValue('username', $_GET['username']);
$stmt->execute();
$account = $stmt->fetch(PDO::FETCH_OBJ);

?>
<form method="post">
	<fieldset>
		<legend>Account Information</legend>
		<table cellpadding="2" cellspacing="2">
			<tr>
				<td>Username</td>
				<td><?php echo $account->username; ?>
					<input type="hidden" name="username"
						value="<?php echo $account->username; ?>"></td>
			</tr>
			<tr>
				<td>Password</td>
				<td><input type="password" name="password"></td>
			</tr>
			<tr>
				<td>Full Name</td>
				<td><input type="text" name="fullname" value="<?php echo $account->fullname; ?>"></td>
			</tr>
			<tr>
				<td>Email</td>
				<td><input type="text" name="email" value="<?php echo $account->email; ?>"></td>
			</tr>
			<tr>
				<td>&nbsp;</td>
				<td><input type="submit" name="save" value="Save"></td>
			</tr>
		</table>
	</fieldset>
</form>