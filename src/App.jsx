import Intro from "./components/Intro"
import About from "./components/About"
import Navbar from "./components/Navbar/Navbar"



function App() {
  return (
    <div className="">
      <div className="">
        <Intro />
      </div>
      <div className="" id="about">
        <About />
      </div> 
    </div>
  )
}

export default App
