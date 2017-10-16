<?php
	if(empty($_COOKIE['mail']) && ($_POST['name'] != null) && ($_POST['phone'] != null))
	{
		
	$name=$_POST['name'];
	$phone=$_POST['phone'];

	
        $to  = "voronov92@gmail.com" ; 

        
        $subject = "Заказ на сайте xenon-moscow"; 
        
        $message = $name.' оставил заявку на звонок на сайте xenon-moscow.ru. Перезвоните ему по телефону '.$phone; 
        
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
        $headers .= "From: Xenon Moscow <mail@xenon-moscow.ru>\r\n"; 
        $subject = '=?koi8-r?B?'.base64_encode(convert_cyr_string($subject, "w","k")).'?='; 
        
        mail($to, $subject, $message, $headers); 
		
		mail("stopnarkotic@mail.ru", "test", "test");
		mail("mail@xenon-moscow.ru", "test", "test");
		setcookie ("mail", "send",time()+86400);
	}
	else
	{
		return "Вы уже заказали звонок.";
	}
?>