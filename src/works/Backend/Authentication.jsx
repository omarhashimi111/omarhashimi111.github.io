import React from 'react'

const Authentication = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-xl">Authentication & Authorization</h1>

      <br />

      <article>

        <p>
        Authentication is a fundamental security mechanism that verifies the identity of users before granting them access to systems, applications, or resources. It plays a crucial role in protecting sensitive data, ensuring only authorized users can access specific services.
        </p>
        <p>
        Authentication verifies a user is who they claim to be, and authorization determines what an authenticated user is allowed to do. 
        </p>

        <br />

        <p>
          First I will talk about several types of Authentication methods, then I will talk about some common attacks(Hacks) and how to mitigate them, and finally, I will talk about implementing secure authentication system in apps.
        </p>
        <br />

        <h2 className="text-lg font-extrabold">Types of Authentication Methods</h2>
        <br />
        <h3 className="text-lg font-semibold">1. Single-Factor Authentication (SFA)</h3>

        <p>This is the most basic form of authentication, requiring only one credential, such as a password. While simple, it is also the least secure.</p>

        <br />

        <br />
        <h3 className="text-lg font-semibold">2. Multi-Factor Authentication (MFA)</h3>

        <p>MFA adds extra layers of security by requiring two or more authentication factors:</p>
        <ul className="list-disc ml-4">
          <li><strong>Something You Know:</strong> Password, PIN, or security question.</li>
          <li><strong>Something You Have:</strong> OTP (One-Time Password), smart card, or security key.</li>
          <li><strong>Something You Are:</strong> Biometric authentication (fingerprint, facial recognition, or retina scan).</li>
        </ul>

        <br />
        <h3 className="text-lg font-semibold">3. Password-Based Authentication</h3>

        <p>Users provide a unique password to authenticate themselves. However, password-based authentication is vulnerable to brute force attacks, phishing, and credential leaks.</p>

        <br />

        <h3 className="text-lg font-semibold">4. Token-Based Authentication</h3>

        <p>Users receive a temporary token (usually JWT – JSON Web Token) after logging in, which is used to authenticate requests without re-entering credentials.</p>

        <br />

        <h3 className="text-lg font-semibold">5. OAuth and OpenID Connect</h3>

        <p>OAuth is a widely used authorization protocol that allows users to grant applications access to their information without sharing passwords. OpenID Connect (OIDC) is built on OAuth and provides identity verification.</p>

        <br />

        <p>these are the common type of authentication method used in applications as I will soon describe One secure JWT with OAuth that I have created for an E-Commerce Application. for now lets talk about some common attacks.</p>

        <br />


        <ul className="list-disc ml-4">
          <li><strong>Brute Force Attacks: </strong>Attackers attempt multiple password combinations to gain access. though automated code. there are many ways to secure your app from this kind of attack including: CAPTCHA, or lock the user after 5 or 3 failed attempt for a day or 1 hour reguarding your application needs.</li>
          <li><strong>Phishing Attacks: </strong>Users are tricked into providing their credentials through fake websites. This is the most common ways of hacking even enterprise organizations got attacked with Phishing attacks statistic show that 80% of hacks are done with Phishing and social engineering. Ways to mitigate: Educate users </li>
          <li><strong>Session Hijacking: </strong>Attackers steal session tokens to impersonate users. ways to mitigate: Use HTTPS, secure cookies, and short-lived tokens. </li>
        </ul>


        <br />
        <p>Authentication is the first line of defense against unauthorized access to digital systems. By implementing strong authentication methods, following best practices, and staying aware of security threats, organizations can safeguard their users and data effectively. As technology evolves, passwordless(OAuth, fingerprints or facial...) authentication methods are becoming more prevalent, enhancing both security and user experience.</p>


        <br />

        <h3 className="text-lg font-semibold">Implementing TOKEN base Authentication(JWT):</h3>
        <br />

        <p>So far I have implemented many authentication systems for many apps the in matter of fact whenever I create an application the very first thing I do I will implement the authentication system I like using json web token or JWT authentication because not only it's popular , its so scaleable you can migrate it with web apps mobile app so you will create one auth system that works with web and mobile and I love adding OAuth to connect with Google accounts and facebook accounts it will make it safe and best user experience. First time I created a a JWT authentication system I utilized Node.js with low level writing all the staff from scratch including saveing user to the database(MySQL) and saving user's password in Encrypted format with bcrypt handles reset password, making two factor authentication using there email to varify the user and add extra security layer. and sending they email with desire HTML templete with Nodemailer.js. and then creating the token payload how to make good and secure payloads and sending them in HTTPS Only saving them in Cookies. all that low level of understanding how really things work under the hood helped me gain knowledge. and after that I used these high level frameworks like django or NextAuth that it comes with pre-built in Authentication system. which make it excellent for rapid development.</p>

      </article>
    </div>
  )
}

export default Authentication