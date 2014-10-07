<?php
  $data = file_get_contents("php://input");
  $image = base64_decode($data);  
  exit($image);
