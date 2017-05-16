<?php 
/* email recipient */
$myemail = "wiichanfaps@gmail.com";

/* all form inputs using check_input function */

$comments = check_input($_POST['comments']);

$message = "Yo!,

    Comment was received

    Comments: $comments

    End of message
    ";

mail($myemail, $message);

header('location: index.html');

exit();
?>  