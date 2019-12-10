<?php
header("Access-Control-Allow-Origin: *");
$servername = "47.103.15.157";
$username = "root";
$password = "w@ng123";
$DBname = "doumingbai";
$port = "3366";
// 创建连接
$conn = new mysqli($servername, $username, $password,$DBname,$port);


$conn->close();

