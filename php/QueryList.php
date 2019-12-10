<?php
require ("DBCon.php");
header("Content-type: text/html;charset=utf-8");
//ini_set("display_errors", "On");
//
//error_reporting(E_ALL | E_STRICT);
$conn = new mysqli($servername, $username, $password,$DBname,$port);

$conn->query("set names utf8");
$sql = "SELECT * FROM demand_table";
// 检测连接
$result = $conn->query($sql);
$jarr = array();

if ($result->num_rows > 0) {
    // 输出数据
    while($row = $result->fetch_assoc()) {
        $count =count($row);
        for($i=0;$i<$count;$i++){
            unset($row[$i]);
        }
        array_push($jarr,$row);
        $str=json_encode($jarr);//将数组进行json编码
        $arr=json_decode($str);//再进行json解码
    }
    print_r($str);
} else {
    echo "error";
//    echo mysqli_error($result);;
}

$conn->close();
