<?php
/*
 * Here is a sample driver to get you started using hermes.
 * It is meant to be linked with a simple web form on the client side.
 *
 */

try {
   require('hermes.class.php');
   $email_list = "Comma, Sepertated, List, Of, Emails";
   $hermes = new Hermes($email_list);

   //Set other Data here
   $contact = htmlentities($_POST["contact"]);
   $body = htmlentities($_POST["body"]);

   $date = "Question reguarding 217madison.com";

   $hermes->notify($date, $body."\n\n\n\nReply to:".$contact);
   $hermes->log("Email Form Submitted:\nbody: $body \ncontact: $contact");

   $hermes->log("Email Form Called without HTTP/POST data set. Erroring out.");

}
catch(exception $ex)
{
   $hermes->alert(get_defined_vars(), __FILE__, __LINE__);
   $hermes->log("Error Processing Email form:\n $ex");
   die();	
}

?>
