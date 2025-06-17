import { motion } from "motion/react"
import { Element } from "react-scroll"
import etherJsImage from "../../assets/etherJs.png"
import expressImage from "../../assets/express.png"
import fmImage from "../../assets/framer-motion.webp"
import gitImage from "../../assets/git.png"
import jsImage from "../../assets/js.png"
import mySqlImage from "../../assets/mysql.svg"
import nodeImage from "../../assets/node.png"
import reactImage from "../../assets/react.png"
import reduxImage from "../../assets/redux.png"
import socketIoImage from "../../assets/socketio.png"
import solidityImage from "../../assets/solidity.png"
import thirdWebImage from "../../assets/thirdWeb.png"
import "./Skills.css"

export default function Skills(){
    const skillSet = [
        {type:"FRONTEND",name:'JavaScript', image:jsImage},
        {type:"FRONTEND",name:'React Js', image:reactImage},
        {type:"FRONTEND",name:'Redux', image:reduxImage},
        {type:"FRONTEND",name:'Framer Motion', image:fmImage},
        {type:"FRONTEND",name:'ThirdWeb', image:thirdWebImage},
        {type:"FRONTEND",name:'Ether JS', image:etherJsImage},


         {type:"BACKEND",name:'Node Js', image:nodeImage},
         {type:"BACKEND",name:'Express Js', image:expressImage},
         {type:"BACKEND",name:'Socket Io', image:socketIoImage},
         {type:"BACKEND",name:'Solidity', image:solidityImage},

         {type:"DATABASES & TOOLS",name:"MySQl",image:mySqlImage},

         {type:"DATABASES & TOOLS",name:"Git",image:gitImage}
    ]

    const SkillSections  = ["FRONTEND","BACKEND","DATABASES & TOOLS"]
     return(
        <Element name="Skills" className="Skill">
            <div><div class="loader"></div> <h1 className="FontNormal">My Stack</h1></div>
            
            {SkillSections.map((section,index)=>{
               return <motion.div 
                  key={index}
                   initial  ={{opacity:0,y:50}}
                   whileInView={{opacity:1,y:0}}
                    viewport={{once:true}}
                   transition={{duration:0.3}}
                 className="SkillSection">
                <h1 className="FontHead" style={{fontWeight:700}}>{section}</h1>
                <div>
                   {skillSet.map((element,index)=>{
                      if(element.type == section){
                         return <motion.div
                          key={ index}
                          initial ={{opacity:0,y:20}}
                          whileInView={{opacity:1,y:0}}
                          viewport={{once:true}}
                          transition={{duration:0.4, delay:(index/10 + 0.1)}}
                         > <img src={element.image}></img> <h4 className="FontNormal">{element.name}</h4></motion.div> 
                      }
                   })}   
                </div>
            </motion.div>})}
                  

        </Element>
     )
}