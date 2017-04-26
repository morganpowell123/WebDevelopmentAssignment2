<?php
require 'connect.php';
$conn    = Connect();
$name    = $conn->real_escape_string($_POST['u_name']);
$email   = $conn->real_escape_string($_POST['u_email']);
$title    = $conn->real_escape_string($_POST['title']);
$message = $conn->real_escape_string($_POST['message']);
$query   = "INSERT into tb_cform (u_name,u_email,title,message) VALUES('" . $name . "','" . $email . "','" . $title . "','" . $message . "')";
$success = $conn->query($query);
 
if (!$success) {
    die("Couldn't enter data: ".$conn->error);
 
}

echo "Thank You For Contacting Us <br>";
 
$conn->close();

?>
