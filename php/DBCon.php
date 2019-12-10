<?php
header("Access-Control-Allow-Origin: *");
$servername = "服务器ip";
$username = "用户名";
$password = "数据库密码";
$DBname = "数据表名";
$port = "端口号";
// 创建连接
$conn = new mysqli($servername, $username, $password,$DBname,$port);


$conn->close();

