<?php;
// test attempt 2
  if($_post) {
    $connection = mysql_connect("", "", ".");
  
    if (!$connection) {
      die('could not connect: ' . mysql_error());
    }
  
    my_select_db("", $connection);
    
    $user_email = $_post['$scope.emailSub'];
    $user_email = mysql_real_escape_string($user_email);
  
    $articleid = $_GET['id'];
    if(!is_numeric($articleid))
      die('invalid article id');

    //ad if statement to check for preexisting email
    $query = "INSERT INTO 'twart' . 'subscriptions' 
     ('email') VALUES ('$user_email');";
    
    mysql_query($query);

    echo "<h3>Thanks for the subscription!</h3>";
    mysql_close($connection);
    //This is teh line used to input data:
    //INSERT INTO `Twart`.`subscriptions` (`email`) VALUES ('Thisisatest');
  }
?>
