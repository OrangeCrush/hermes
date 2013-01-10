#!/usr/bin/node

//Configurations
var port = 4444;

var gmail_account = "Gandalf@gmail.com";
var gmail_pass    = "YouShallNotPass";

var subject = "You've got mail!";

var sent_from = "Thor Odison <thisMeansNothing@asgard.com>";


var nodemailer = require("nodemailer"),
sys = require("sys"),
url = require("url"),
http = require("http");

http.createServer(function(request, response){
   if (url.parse(request.url).pathname != "/favicon.ico"){

      var query = url.parse(request.url,true).query;
      var send_to = query.a;
      var message = query.m;

      response.writeHeader(200, {"Content-Type": "text/plain"});
      response.write("Sending:\n");
      response.write(send_to + "\n");
      response.write(message + "\n");
      response.write("On port "+ port + "\n");

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
      transport.sendMail(mailOptions, function(error, response_1){
         if(error){
            response.write(error);
         }
         else{
            response.write("Sent succsessfully\n");
         }
      });
   }
   response.end();
}).listen(port);



