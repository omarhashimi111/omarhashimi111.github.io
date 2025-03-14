import React from 'react'
import { useNavigate } from 'react-router'

const About = () => {

    let navigate = useNavigate()
    const routeToWork = () => {
        navigate("/works")
    }

  return (
    <div className='p-6 px-10'>
        <h3 className='text-center p-4 text-xl font-semibold tracking-wide txt-shadow-lg'>Profile</h3>
        <p className='txt-shadow-sm'>I am a self-taught Software Engineer and, Data Scientist(AI).I have expertise in multiple software fields (as software has a wide range of fields) including: full stack development and Database administration. I value honesty, hard working, constantly learning and creating reliable networks.</p>
        <br />
        <p className='txt-shadow-sm'>I am so passionate about computer science and Data Science in general. I am familiar and worked with several programing languages including: <span className='font-semibold'>C, Python, JavaScript, Bash, Go</span>. and many more technologies and Frameworks for industry standard including: <span className='font-semibold'>Docker, Git & Github, Linux Server Administration, Authentication methods...</span></p>
        <br />
        <p className='txt-shadow-sm'>There’s a joke that says a data scientist is someone who knows more statistics than a
        computer scientist and more computer science than a statistician(just a joke).In fact, some data scientists are for all practical purposes : statisticians,
        while others are fairly indistinguishable from software engineers. Some are machine
        learning experts. I love Science, Statistic, Probiblities, math and physics. What an amazing time to be alive!!
        check out The work Section You will find Projects From Computer Science and Data Science.</p>
        <br />
        <p className='text-center txt-shadow-sm'>If I have to describe my self in one senteces I would say I am technologist</p>

        <div className="flex justify-center items-center p-5">
            <button onClick={routeToWork} className='bg-green-950 p-2 rounded-md text-white'>See My Works</button>
        </div>
    </div>
  )
}

export default About