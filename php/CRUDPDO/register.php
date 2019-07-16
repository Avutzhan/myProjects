<?php
require 'database.php';
if(isset($_POST['save'])) {
	$stmt = $conn->prepare('insert into account(username, password, fullname, email)
		values(:username, :password, :fullname, :email)');
	$stmt->bindValue('username', $_POST['username']);
	$stmt->bindValue('password', $_POST['password']);
	$stmt->bindValue('fullname', $_POST['fullname']);
	$stmt->bindValue('email', $_POST['email']);
	$stmt->execute();
	header('location:index.php');
}
?>
<form method="post">
	<fieldset>
		<legend>Account Information</legend>
		<table cellpadding="2" cellspacing="2">
			<tr>
				<td>Username</td>
				<td><input type="text" name="username"></td>
			</tr>
			<tr>
				<td>Password</td>
				<td><input type="password" name="password"></td>
			</tr>
			<tr>
				<td>Full Name</td>
				<td><input type="text" name="fullname"></td>
			</tr>
			<tr>
				<td>Email</td>
				<td><input type="text" name="email"></td>
			</tr>
			<tr>
				<td>&nbsp;</td>
				<td><input type="submit" name="save" value="Save"></td>
			</tr>
		</table>
	</fieldset>
</form>