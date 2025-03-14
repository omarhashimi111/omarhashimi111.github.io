import React from 'react'

const EcommerceDjango = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-xl">E-Commerce App(Django + PostgreSQL)</h1>

      <br />

      <article>

        <p>
          Here I created the Same Ecommerce application Using high level and heavy popular python libray called Django os far I love it for the backend development. I used Django for backend and PostgreSQL for the database and Next.js for front-end, and I use Next Auth for extra layer of security not for full authentication but for session management and some layer of defense. now the question is why I did not used the whole ecommerce in djanog it self or next.js it self?
          well there is a good reason first of all as i said next.js as the full stack development was not good in my opinion for large applications. code gets to complicated alot of code in the same place backend login and front end UIs its messy. but Next.js is amazing for handling the frontend with that SSR and CSR super cool looking custoized websites and modern views this is the power of next.js but lack the backend power in other hand django is super powerfull fullstack framework with super strong backend options admin panel, authentication system you dont need to write a single line of SQL you create models you just do the business login no need for fighting with the programming problem solving. less code to write means less bug less code to maintain awesome. and django is know for its security built-in features. back in the day Instagram was built with django such a good product.
        </p>

        <br />

        <p>
        For data driven applications and heavy business logic apps django is great for realtime apps like chat and live notifications, python in general not very well, but still you can use hybrid approach. you can use node.js as a micro-service for those parts like live notification and chats... python is greate for data driven apps data science and AI's. later on I create similar app in super high PHP framework wordpress I said similar because it was not so good not very customizable at all. WordPress is good for content management and Blogs.
        </p>

      </article>

    </div>
  )
}

export default EcommerceDjango