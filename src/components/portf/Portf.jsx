import { useEffect, useState } from "react"
import PortfList from "./PortfList"
import "./portf.scss"
import {dataA,React,SystemDesign,games} from "../data"

function Portf() {
  const [selected,setSelected] = useState("data")
  const [data ,setData] = useState(dataA)
  

  useEffect(()=>{
    switch(selected){
      case "data":
        setData(dataA)
        break;
      case "web":
        setData(React)
        break;
      case "systemDesign":
        setData(SystemDesign)
        break;
      case "game":
        setData(games)
        break;
      default:
        setData(dataA)
        break;
    }


  },[selected])
  const list = [
    {
      id: "web",
      title: "Web App"
    },{
      id: "data",
      title: "Data Analyst"
    },{
      id: "systemDesign",
      title: "Data Engineering"
    },{
      id: "game",
      title: "Games"
    }
  ]
  return (
    <div className='portf' id="portf">
      <h1>Protfolio</h1>
      <ul className="mylist">
        {list.map(item=> <PortfList key={item.id} item={item}  active={selected === item.id}
         setSelected={setSelected}/>)}
      </ul>
      <div className="containery">


        {data.length == 0 ? (<h1>Soon Will Be Update</h1>): data.map(data=>{
              return (
                <a key={data.id} href={data.link}>
                  <div className="item">
                    <img src={data.img} alt={data.title} loading="lazy"/>
                    <h3>{data.title}</h3>
                  </div>
                </a>
              )
          }
        )}
      </div>
      
    </div>
  )
}

export default Portf
