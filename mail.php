<?php 
/* email recipient */
$myemail = "wiichanfaps@gmail.com";

/* all form inputs using check_input function */

$comments = check_input($_POST['comments']);

$message = "Greetings!,

    Comment was received

    Comments: $comments

    End of message
    ";

mail($myemail, $subject ,$message);

header('location: index.html');

exit();

function check_input($data, $problem='')
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        if ($problem && strlen($data) ==0)
        {
            show_error($problem);
        }
        return $data;
    }
function show_error($myerror)
    {
        ?>
            <html>
            <body>
            <b>Please correct the following error:</b><br />
            <?php echo $myerror; ?>
            </body>
            </html>
        <?php
        exit();
    }


?>  