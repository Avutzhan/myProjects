<?php
require 'database.php';

if(isset($_GET['action']) && $_GET['action']=='delete'){
	$stmt = $conn->prepare('delete from account where username = :username');
	$stmt->bindValue('username', $_GET['username']);
	$stmt->execute();
}

$stmt = $conn->prepare('select * from account');
$stmt->execute();
?>
<a href="register.php">Register</a>
<br>
<br>
<table cellpadding="2" cellspacing="2" border="1">
	<tr>
		<th>Username</th>
		<th>Full Name</th>
		<th>Email</th>
		<th>Option</th>
	</tr>
	<?php while($account = $stmt->fetch(PDO::FETCH_OBJ)) { ?>
	<tr>
		<td><?php echo $account->username; ?></td>
		<td><?php echo $account->fullname; ?></td>
		<td><?php echo $account->email; ?></td>
		<td><a
			href="index.php?username=<?php echo $account->username; ?>
				&action=delete" onclick="return confirm('Are you sure?')">Delete</a>
			| <a href="edit.php?username=<?php echo $account->username; ?>">Edit</a>
		</td>
	</tr>
	<?php } ?>
</table>