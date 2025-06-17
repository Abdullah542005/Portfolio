import { motion } from "motion/react"
import { Element } from "react-scroll"
import "./Contact.css"

export default function Contact(){
    return(
        <Element name="Contact" className="Contact"> 
             <motion.h1
                initial={{y:50,opacity:0}}
                whileInView={{y:0,opacity:1}}
                viewport={{once:true}}
                transition={{duration:0.6,ease:"easeOut"}}
             className="FontHead">Got An <span style={{color:"#0A88A1"}}>Idea</span>, Lets 
             Build it<span style={{color:"#0A88A1",fontSize:"2em"}}>.</span></motion.h1>
             <motion.h2 
             initial={{y:50,opacity:0}}
                whileInView={{y:0,opacity:1}}
                viewport={{once:true}}
                transition={{duration:0.6,ease:"easeOut",delay:0.2}}
             className="FontNormal">abdullahimran542005@gmail.com</motion.h2>
        </Element>
    )
}