<?php   
$_POST = json_decode(file_get_contents('php://input'),true); //! json decode 
echo var_dump($_POST);