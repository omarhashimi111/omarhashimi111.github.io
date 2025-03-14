import React from 'react'

const EcommerceExpress = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-xl">E-Commerce App(express.js + MySQL)</h1>

      <br />

      <article>

        <p>Here I Created an E-Commerce app using React.js for frontend and Express.js for Backend and for my database I used MySQL. after creating the authentication system I Added roles for them roles such as : buyer , seller , admin for start.I created and designed the whole database my self in order the app to run seemlessly. I created many Tables for for authentication I created tables such as: User , Roles, and UserRole. with there relationships to work properly. For Product I Create way many relational tables including: Product which has genral product details like name, description,videoURL, category. and Category with having category_name and parent which related to the self category table if applicable like: Mobile(Child category) -- electronics(Parent category). and product Category table which refer product to one category or multi catigory this is data enginnering right. although in high level frameworks like python you can do all this with just saying many to many relationship so one category can be assign to muliple products and vise versa by the way django also create a middle table for them under the hood but here I have done It manully as I am typeing row SQL CODE for e-commerce application.Create Product is such a challenging part of it as it require a lot of Business login i have created so many tables for this app variants each product could have multiple variants right like a phone for example could vary on multiple factor like Iphone 15 256GB with 6Gb ram might have one price and 512gb with 8gb ram might have higher price but the product is the same. Ok after all First I created the authentication system then the database after that some design for frontend and lets talk about backend codes now.</p>

        <br />

        <p>
        Backend where the business login runs CURD Operations gets execuded.
        now here you will have to execute SQL Codes again silly but there is a way which you dont execute row SQL codes you can create SQL procedures and functions and call them in your express.js routes which will increase the performance of your app and the security and error handling. becasue the SQL procedures are pre-compiled and they executed without needing time to be compiled. I can talk days and nights talking about SQL codes but while we do this low level executions it boost the speed of our application what is the down side now two thing: 1. More code 2 you have to know the security and handle all security munually. but the good thing is you can create your own security layer and you can make it as secure as you want. and you can make it as fast as you want. and you can make it as scaleable.  
        </p>

        <br />

        <p>
          <strong>SQL Injection: </strong>  
          SQL injection is a code injection technique that might destroy your database. SQL Injection is an attack hackers use so when you do low staff you gotta do what it take you gotta do handle everything so i needs alot of knowelge about how really things work under the hood. fortuantely there are many ways to prevent SQL Injection like using ORM(Object Relational Mapping) like Sequelize.js or TypeORM which will handle all the SQL Injection for you. but if you are doing low level you have to handle it your self. Its not that hard to handle it your self but you have to know how to do it. you can create a security checkpoint(function) right after you get the data from the frontend then execute the code see how easy it is&#128522;.
        </p>

        <br />
        <p>
          <strong>Upload Files: </strong>  
          As uploading the files like product images, videos and user profile pictures is a common task in web applications. I have created a middleware for uploading files in express.js. I have used multer for uploading files. Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum. and soon i realized the Multer is not much secure by default I notice this when I was building the same app with next.js and for backend i used next.js routes which is fine for small size application but not good for large and scalable applications. I use Multer in next.js it has bug with nextjs so then i used Formidable which is such a great library of node.js but even that was not work. it was good for me though I had to do something so i used Node.js Pure Node.js to stream the file i learned even more love level staff making a pipline to stream my binary file to the server and then save the address to the database. I created a function to secure the file type and size and name which are common attacks. I learnd about streaming data and controlling the data flow and security here that was valuable experience for me. after that even if i work with express.js or multer or django file upload i will add extra security filters just in case.
        </p>  

        <br />

        <h3><strong>Where the upload files get stored?</strong></h3>

        <br />


        <p>
        Multiple options here in the same server as you backend server or NAS(Network Attached Storage),SAN or cloud providers like AWS, google.... some cloud provider offer optimized Image or Video facilitis which is great, but if software engineers could handle it with some effort. you can use CDNs to catching and opimization as well.
        </p>
        
        <br />


      </article>


    </div>
  )
}

export default EcommerceExpress