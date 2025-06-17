import { motion } from "motion/react"
import { useEffect, useState } from "react"
import "./StartAnimation.css"

export default function StartAnimation(){
   const [start,setStart]  = useState(false)
   useEffect(()=>{
     const timeOut  = setTimeout(() => {
       setStart(true)
     }, 50);
     return ()=>clearTimeout(timeOut)
   },[])
    const delays  =[1,1.2,1.4,1.6,1.8,2,2.2,2.4,2.6,2.8,3,3.2]
    return(
         <div className="StartAnimation">
                {
                    delays.map((delai,index)=><motion.div
                      key={index}
                      initial ={{height:"100vh",}}
                      animate={{height:0}}
                      transition={{delay:delai,duration:1,ease:"easeInOut"}}
                    ></motion.div>)
                }
         </div>
    )
}