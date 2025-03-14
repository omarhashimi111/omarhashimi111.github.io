import MenuIcon from "@mui/icons-material/Menu";
import React from 'react'

const FrontIntro = () => {
  return (
    <div className="">
        <h1 className="text-center font-semibold text-xl txt-shadow-lg">Front-End Projects</h1>
       
        <p className='py-8'>Front-end development plays a crucial role in the digital world by creating the interface through which users interact with technology. It combines creativity, technical skill, and user-centered design principles to build websites and applications that are both functional and visually appealing.</p>

        <p className=''>
          The primary goal of front-end development is to deliver an excellent user experience (UX). This involves ensuring that a website or application is intuitive, responsive, and accessible. Front-end developers must consider factors such as:

          Responsiveness: The application should work seamlessly across devices, from desktops to smartphones. CSS media queries and frameworks like Tailwind CSS help achieve this.
          Performance: Websites must load quickly to retain users. Optimizing images, minifying code, and employing content delivery networks (CDNs) are common techniques used by front-end developers.
          Accessibility: Front-end developers ensure that web applications are usable for people with disabilities. This includes adding features like keyboard navigation, screen reader support, and appropriate color contrasts.
        </p>
        <br />

        <p className=''>Modern front-end development heavily relies on frameworks and libraries to accelerate the development process and maintain scalability. Frameworks like React.js and Angular allow developers to create modular, reusable components that simplify the coding process. Libraries such as D3.js or Chart.js are used to create data visualizations, while animation libraries like GSAP enhance the user experience with smooth transitions and effects.</p>



        <br />


        <p className=''>
          On the left side bar or if your using mobile phone you can click on the top-left <MenuIcon /> Icon to check some of front-end project with the code available on my github.
        </p>

      </div>
  )
}

export default FrontIntro