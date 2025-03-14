import React from 'react'


const EmailServer = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-xl">Email Server</h1>
      <article>
        <p>
          While I was having good time creating web applications, working with HTTP requests, and handling databases,I wanted to set up an email server of my own I already knew Linux operating system administration and I had experience with command line interface(Bash Scripting), so I decided to set up an email server on a Linux machine it would be fun and I will learn how to work with other protocols than HTTP.
        </p>

        <br />

        <p>
          I studied about SMTP(Simple Mail Transfer Protocol) and IMAP(Internet Message Access Protocol) and I learned how to configure them on a Linux machine. It was not easy but I did it. even I had no Domain name but I set the whole server using postfix dovecot with my localhost ip which was just for testing propuse. and I was able to send and receive emails from my server. but it went to the fillterd spam mails because I had no domain name and my server was not listed in any DNS server, and of course I had no SSL certificate so the emails were not encrypted. It was great experince and I learned a lot. meanwhile I started to create HTML template for my self and it looks way better and professional than the default email template. I am looking at business and companies here they dont even have a website no surprise they dont have professional email templates.
        </p>

        <p></p>
      </article>
    </div>
  )
}

export default EmailServer