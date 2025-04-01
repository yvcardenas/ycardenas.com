<?php
require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve the form values safely
    $firstname    = $_POST['firstname']     ?? '';
    $lastname     = $_POST['lastname']      ?? '';
    $email        = $_POST['email']         ?? '';
    $message      = $_POST['message']       ?? '';

    // Validate email more thoroughly if you like
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die('Please enter a valid email address.');
    }

    // Create a new PHPMailer
    $mail = new PHPMailer(true);

    try {
        // SMTP settings
        $mail->isSMTP();                                  
        $mail->Host       = 'smtp.gmail.com';          
        $mail->SMTPAuth   = true;                         
        $mail->Username   = 'ygcrdns@gmail.com';      
        $mail->Password   = 'xutj edev kzoy gytu';              
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;                        
        $mail->Port       = 587;                          

        // Set who the message is to be sent from
        $mail->setFrom('ygcrdns@gmail.com', 'Portfolio Contact Form');

        // Set who the message is to be sent to
        $mail->addAddress('ygcrdns@gmail.com', 'Admin');

        $mail->addReplyTo($email, "{$firstname} {$lastname}");

        // Email subject & body
        $mail->Subject = 'New Contact Form Submission';
        $mail->isHTML(true);
        $mail->Body    = "
            <p><strong>First Name:</strong> {$firstname}</p>
            <p><strong>Last Name:</strong> {$lastname}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Message:</strong> {$message}</p>
        ";
        // Plain text alternative 
        $mail->AltBody = "First Name: {$firstname}\nLast Name: {$lastname}\nEmail: {$email}\nMessage: {$message}";

        // Attempt to send the email
        $mail->send();

        // Redirect or echo success message
        echo 'Success: Your message has been sent!';

    } catch (Exception $e) {
        // If an error occurs, you can log it or show an error
        echo "Error: Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }

} else {
    // If this script was accessed without a POST request
    echo 'Invalid request type.';
}

