
<?php
//Encoded Studio
if(!isset($_POST['submit'])
{
    //This page should not be accessed directly. The form should be submitted
    echo "error; The form has to be submitted";
}

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$messge = $_POST['message'];

//validate the form
if(empty($name) || empty($visitor_email))
{
    echo "name and email are compulsory";
    exit;
}

if(IsInjected($visitor_email))
{
    echo "bad email value";
    exit;
}

$email_from = "andecaleb005@gmail.com"; //<== update the mail
$email_subject = "New Form Submission";
$email_body = "You have a new message from $name.\n".
                "Here is the message:\n $message".

$to = "encodedstudiolab@gmail.com, andecaleb005@gmail.com"; // update the recipient mail
$headers = "Message From: $name";
$headers = "Reply to: $visitor_email";

//send the mail
mail($to, $email_subject, $email_body, $headers);

//done. Direct to successfully submitted page
header('Location: form-succesfully-submitted.html');

function IsInjected($str)
{
    $injections = array (
        '(\n+)',
        '(\r+)',
        '(\t+)',
        '(%0A+)',
        '(%0D+)',
        '(%08+)',
        '(%09+)'
    );

    $inject = join('|', $injections);
    $inject = "/$inject/i";

    if(preg_match($inject, $str))
    {
        return true;
    }else {
        return false;
    }
}

?>