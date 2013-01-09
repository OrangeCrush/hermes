#!/usr/bin/node
/*
 *
 * INSTALLATION:
 *    install node.js (github.com/joyent/node)
 *    $ npm install nodemailer
 *    
 * USAGE:
 *    Server set up-
 *    $ node server.js
 *
 *    web request-
 *       http://yourserver.com:4444?a=send_toThis@whatever.com&m=this%20is%20a%20great%20message%20notice%20how%20the%20spaces%20format
 *       (just pass HTTP/GET with a=send_to & m=message
 */

//Configurations
var port = 4444;

var gmail_account = "Gandalf_Middle_Earth@gmail.com"
var gmail_pass    = "YouShallNotPass"

var subject = "You have Mail!"

var sent_from = "Thor Odinson <thisMeansNothing@asgard.com>"


var nodemailer = require("nodemailer"),
sys = require("sys"),
url = require("url"),
http = require("http");

http.createServer(function(request, response){
   if (url.parse(request.url).pathname != "/favicon.ico"){

      var query = url.parse(request.url,true).query;
      var send_to = query.a
      var message = query.m

      response.writeHeader(200, {"Content-Type": "text/plain"});
      response.write("Sending:</ br>")
      response.write(send_to + '</ br>')
      response.write(message + '</br>')

      // SMTP method: recomended.
      // Using SMTP will help you evade spam filters and
      // Most SMTP services will modify header data for you.
      // If you do not want to use gmail see github.com/andris9/nodemailer
      var transport = nodemailer.createTransport("SMTP",{
         service: "Gmail",
         auth: {
            user: gmail_account,
            pass: gmail_pass
         }
      });

      var mailOptions = {
         from: sent_from,
         to: send_to,
         subject: subject, 
         text: message
      };

      // send mail with defined transport object
      transport.sendMail(mailOptions, function(error, response){
         if(error){
            console.log("Error:")
            console.log(error)
         }
         else{
            console.log("Mail sent.")
         }
      });
   }

   response.end();
}).listen(port);



