<?php

// configure
$from = ''; // Replace it with Your Hosting Admin email. REQUIRED!
$sendTo = ''; // Replace it with Your email. REQUIRED!
$subject = 'Nuovo messaggio dal sito';
$fields = array('name' => 'Name', 'email' => 'Email', 'subject' => 'Subject', 'message' => 'Message'); // array variable name => Text to appear in the email. If you added or deleted a field in the contact form, edit this array.
$okMessage = 'Contact form successfully submitted. Thank you, I will get back to you soon!';
$errorMessage = 'There was an error while submitting the form. Please try again later';

$url = 'https://docs.google.com/forms/d/e/1FAIpQLSe3c76-V1S75w-e_UYHPc_WFaW9t4ZH7xrGss4p2dUIhJj06Q/formResponse?&entry.1356265276=ciao&entry.1282836463=dfgdfg&entry.528392803=dfgdfg&entry.1308078063=dfgdfg';

	//Once again, we use file_get_contents to GET the URL in question.
	$contents = file_get_contents($url);

// let's do the sending

if(isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response'])):
    //your site secret key
    $secret = '6LdqmCAUAAAAANONcPUkgVpTSGGqm60cabVMVaON';
    //get verify response data
	
	
	
	//The URL with parameters / query string.
	$url = 'https://docs.google.com/forms/d/e/1FAIpQLSe3c76-V1S75w-e_UYHPc_WFaW9t4ZH7xrGss4p2dUIhJj06Q/formResponse?&entry.1356265276='.$fields[0].'&entry.1282836463=dfgdfg&entry.528392803=dfgdfg&entry.1308078063=dfgdfg';
	
	$url = 'https://docs.google.com/forms/d/e/1FAIpQLSe3c76-V1S75w-e_UYHPc_WFaW9t4ZH7xrGss4p2dUIhJj06Q/formResponse?&entry.1356265276=ciao&entry.1282836463=dfgdfg&entry.528392803=dfgdfg&entry.1308078063=dfgdfg';

	//Once again, we use file_get_contents to GET the URL in question.
	$contents = file_get_contents($url);


    $responseData = json_decode($verifyResponse);
    if($responseData->success):
	
		$c = curl_init('https://www.google.com/recaptcha/api/siteverify?secret='.$secret.'&response='.$_POST['g-recaptcha-response']);
		curl_setopt($c, CURLOPT_RETURNTRANSFER, 1);
		$verifyResponse = curl_exec($c);
		
        try
        {
            $emailText = nl2br("You have new message from Contact Form\n");

            foreach ($_POST as $key => $value) {

                if (isset($fields[$key])) {
                    $emailText .= nl2br("$fields[$key]: $value\n");
                }
            }

            $headers = array('Content-Type: text/html; charset="UTF-8";',
                'From: ' . $from,
                'Reply-To: ' . $from,
                'Return-Path: ' . $from,
            );
            
            mail($sendTo, $subject, $emailText, implode("\n", $headers));

            $responseArray = array('type' => 'success', 'message' => $okMessage);
        }
        catch (\Exception $e)
        {
            $responseArray = array('type' => 'danger', 'message' => $errorMessage);
        }

        if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
            $encoded = json_encode($responseArray);

            header('Content-Type: application/json');

            echo $encoded;
        }
        else {
            echo $responseArray['message'];
        }

    else:
        $errorMessage = 'Robot verification failed, please try again.';
        $responseArray = array('type' => 'danger', 'message' => $errorMessage);
        $encoded = json_encode($responseArray);

            header('Content-Type: application/json');

            echo $encoded;
    endif;
else:
    $errorMessage = 'Please click on the reCAPTCHA box.';
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
    $encoded = json_encode($responseArray);

            header('Content-Type: application/json');

            echo $encoded;
endif;

