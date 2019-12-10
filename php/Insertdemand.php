<?php
require ("DBCon.php");
header("Content-type: text/html;charset=utf-8");
//ini_set("display_errors", "On");
//
//error_reporting(E_ALL | E_STRICT);
$conn = new mysqli($servername, $username, $password,$DBname,$port);
$conn->query("set names utf8");


$phonenum=$_POST['phonenum'];
$qqnum=$_POST['qqnum'];
// $aim=$_POST['aim'];
$username=$_POST['username'];
$content=$_POST['content'];
$end_time=$_POST['end_time'];
// $end_time="星期三";

// $headimgpath=$_POST['headimgpath'];
// INSERT INTO demand_table(phonenum,qqnum,username,demand_content,end_time) VALUE ('12312312311','12312312311','12312312311','12312312311','12312312311');
$sql = "INSERT INTO demand_table(phonenum,qqnum,username,demand_content,end_time) 
VALUE('{$phonenum}', '{$qqnum}', '{$username}','{$content}','{$end_time}')";


$result = $conn->query($sql);
if($result>0){
    echo "[{\"status\":\"1\"}]";//状态1代表成功
}else{
    echo "[{\"status\":\"0\"}]";//状态0代表失败
}