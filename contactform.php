<?php 

    if(isset($_POST['submit'])){
        $name=$_POST['name'];
        $subject=$_POST['subject'];
        $mailFrom=$_POST['mail'];
        $message=$_POST['message'];

        $mailto="director.newburgh@kindergatechildcare.com";
        $headers= "From: ".$mailFrom;
        $txt = "You have recieved an email from ".$name.".\n\n".$message;

        mail($mailto,$subject,$txt,$headers);
        header("Location: index.html?mailsend");

    }



?>