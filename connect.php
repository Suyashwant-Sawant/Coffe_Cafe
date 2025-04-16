<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $contact = $_POST['contact'];

    $conn = new mysqli('localhost','root','','contact1');
    if($conn->connect_error){
        die("failed" .$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into login(name, email, contact) values(?, ?, ?)");
        $stmt->bind_param("sss", $name, $email, $contact);
        $stmt->execute();
        echo "successfully done...";
        $stmt->close();
        $conn->close();
    }
?>