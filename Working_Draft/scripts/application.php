<?php
if($_POST){
  
  $con = sql_connect('', '', '')
    
  if(!$con) {
   die('connection failed', mysql_error());
  }
  
  my_select_db('', $con);
    
  $user_fname = $_POST('fname');
  $user_lname = $_POST('lname');
  $user_DOB = $_POST('DOB');
  $user_email = $_POST('email');
  $user_phone = $_POST('phone');
  $user_nomPartner = $_POST('nomPartner');
  $user_education = $_POST('education');
  $user_interest = $_POST('interest');
  $user_frequency = $_POST('frequency');

  $user_fname = mysql_real_escape_string($users_fname);
  $user_lname = mysql_real_escape_string($user_lname);
  $user_DOB = mysql_real_escape_string($user_DOB);
  $user_email = mysql_real_escape_string($user_email);
  $user_phone = mysql_real_escape_string($user_phone);
  $user_nomPartner = mysql_real_escape_string($user_nomPartner);
  $user_education = mysql_real_escape_string($user_education);
  $user_interest = mysql_real_escape_string($user_interest);
  $user_frequency = mysql_real_escape_string($user_frequency);
  
  $article_id =$_GET['id'];
  if(!is_numeric($article_id)
   die('no hacks for you.');
  $query = "INSERT INTO 'twart' . 'application'
   ('fname', 'lname', 'DOB', 'email', 'phone', 'nomPartner', 'education', 'interest', frequency )
    VALUES ('$user_fname', '$user_lname', '$user_DOB', '$user_email', '$user_phone', 
    '$user_nomPartner', '$user_education', '$user_interest', '$userfrequency');";
  
  sql_query($querry); 

  mysql_close($con); 

  echo "<h2>Application has been sent</h2>";

}
?>
