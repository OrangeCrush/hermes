<body>

<h1 id="toc_1">Hermes</h1>
<p>
A set of tools for sending email.
<hr />
</p>

<h2 id="toc_1.1">Node.js</h2>

<h3 id="toc_1.1.1">Installation</h3>
<p>
After Installing Node (joyent/node) and npm (Should be included with node 0.8+)
</p>
<pre>
   git clone https://github.com/OrangeCrush/hermes
   cd hermes
   npm install nodemailer
</pre>

<p>
nodemailer is a great project check it out at <br>
<a href="http://github.com/andris9/nodemailer">nodemailer</a>
</p>


<h3 id="toc_1.1.2">Configuration</h3>
<p>
Configuration options are available at the top of /server.js
</p>

<h3 id="toc_1.1.3">Starting the server</h3>
<p>
After installing, to start the server run:
</p>
<pre>
   node server.js
</pre>

<h3 id="toc_1.1.4">Sending Email</h3>
<p>
Make a web request to your server, on port 4444 (See configuration for customization)<br>
Pass the recipient address with the a parameter<br>
Pass the message with the m parameter<br>
</p>

<p>
Browser:
</p>
<pre>
   http://yourServer:4444?a=send_to_me@whatever.com&amp;m=I%20am%20a%20Message
</pre>

<h2 id="toc_1.2">PHP</h2>

<p>
The PHP code here takes a bit more formatting and uses the sendmail method instead of gmail<br>
DEPRECATED.
</p>

</body>
</html>
