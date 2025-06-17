import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import { Link } from "react-scroll"
import "./Navbar.css"

export default function Navbar(){ 
    const [isNavbar,setIsNavbar]  = useState(false)
  return(
     <div className="Navbar">
        {!isNavbar?(<motion.svg onClick={()=>{setIsNavbar(true)}} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}}
            width="50px" height="50px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.5 11.75C6.08579 11.75 5.75 12.0858 5.75 12.5C5.75 12.9142 6.08579 13.25 6.5 13.25V11.75ZM18.5 13.25C18.9142 13.25 19.25 12.9142 19.25 12.5C19.25 12.0858 18.9142 11.75 18.5 11.75V13.25ZM6.5 15.75C6.08579 15.75 5.75 16.0858 5.75 16.5C5.75 16.9142 6.08579 17.25 6.5 17.25V15.75ZM18.5 17.25C18.9142 17.25 19.25 16.9142 19.25 16.5C19.25 16.0858 18.9142 15.75 18.5 15.75V17.25ZM6.5 7.75C6.08579 7.75 5.75 8.08579 5.75 8.5C5.75 8.91421 6.08579 9.25 6.5 9.25V7.75ZM18.5 9.25C18.9142 9.25 19.25 8.91421 19.25 8.5C19.25 8.08579 18.9142 7.75 18.5 7.75V9.25ZM6.5 13.25H18.5V11.75H6.5V13.25ZM6.5 17.25H18.5V15.75H6.5V17.25ZM6.5 9.25H18.5V7.75H6.5V9.25Z" fill="#00B4D8"></path> </g></motion.svg>)
        :(<svg onClick={()=>{setIsNavbar(false)}}
             width="40px" height="35px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cross-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-568.000000, -1087.000000)" fill="#00B4D8"> <path d="M584,1117 C576.268,1117 570,1110.73 570,1103 C570,1095.27 576.268,1089 584,1089 C591.732,1089 598,1095.27 598,1103 C598,1110.73 591.732,1117 584,1117 L584,1117 Z M584,1087 C575.163,1087 568,1094.16 568,1103 C568,1111.84 575.163,1119 584,1119 C592.837,1119 600,1111.84 600,1103 C600,1094.16 592.837,1087 584,1087 L584,1087 Z M589.717,1097.28 C589.323,1096.89 588.686,1096.89 588.292,1097.28 L583.994,1101.58 L579.758,1097.34 C579.367,1096.95 578.733,1096.95 578.344,1097.34 C577.953,1097.73 577.953,1098.37 578.344,1098.76 L582.58,1102.99 L578.314,1107.26 C577.921,1107.65 577.921,1108.29 578.314,1108.69 C578.708,1109.08 579.346,1109.08 579.74,1108.69 L584.006,1104.42 L588.242,1108.66 C588.633,1109.05 589.267,1109.05 589.657,1108.66 C590.048,1108.27 590.048,1107.63 589.657,1107.24 L585.42,1103.01 L589.717,1098.71 C590.11,1098.31 590.11,1097.68 589.717,1097.28 L589.717,1097.28 Z" id="cross-circle" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>)
        }
         <AnimatePresence>{
         isNavbar&&(
           
         <motion.div
           initial={{x:50,opacity:0}}
           animate={{x:0,opacity:1}}
           exit={{x:50,opacity:0}}
           transition={{duration:0.4,ease:"easeOut"}}
         >
         <Link to="Hero" duration={500} smooth={true}
           onClick={()=>{setIsNavbar(false)}}
         >  
         <div>
            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M15 18H9" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
            <h4 className="FontNormal">Home</h4>
          </div>
          </Link>
          
          <Link to="Skills" duration={500} smooth={true}
          onClick={()=>{setIsNavbar(false)}}
          >
          <div>
           <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 8L3 12L7 16" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17 8L21 12L17 16" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 4L9.8589 19.4548" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <h4 className="FontNormal">Skills</h4>
          </div>
          </Link>

           <Link to="Projects" duration={500} smooth={true}
           onClick={()=>{setIsNavbar(false)}}>
          <div>
            <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22px" height="22px" viewBox="0 0 423.18 423.18" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M299.736,352.75h-46.237v-45.32h46.237v-30H30v-214h352.996v120.2h23.909c2.104,0,4.146,0.285,6.091,0.81V53.43 c0-11.046-8.953-20-20-20H20c-11.047,0-20,8.954-20,20v234c0,11.046,8.953,20,20,20h139.498v45.32h-54.283 c-10.201,0-18.5,8.299-18.5,18.5s8.299,18.5,18.5,18.5h198.74c-2.655-3.792-4.221-8.401-4.221-13.372V352.75H299.736z"></path> <path d="M354.998,146.368V91.36c0-2.761-2.238-5-5-5h-287c-2.762,0-5,2.239-5,5v55.009c0,2.761,2.238,5,5,5h287 C352.76,151.368,354.998,149.129,354.998,146.368z"></path> <path d="M353.965,183.63v-9.409c0-2.19-1.774-3.966-3.967-3.966h-64.719c-2.189,0-3.967,1.775-3.967,3.966v76.333 c0,2.19,1.775,3.968,3.967,3.968h14.455V207c0-12.887,10.482-23.37,23.369-23.37H353.965L353.965,183.63z"></path> <path d="M62.998,170.255c-2.189,0-3.967,1.775-3.967,3.966v76.333c0,2.19,1.777,3.968,3.967,3.968h188.781 c2.189,0,3.965-1.774,3.965-3.968v-76.333c0-2.19-1.773-3.966-3.965-3.966H62.998z"></path> <path d="M409.81,193.63h-83.8c-7.372,0-13.37,5.998-13.37,13.37v169.378c0,7.372,5.998,13.371,13.37,13.371h83.8 c7.372,0,13.37-5.999,13.37-13.371V207C423.18,199.628,417.182,193.63,409.81,193.63z M367.91,380.156 c-3.141,0-5.686-2.544-5.686-5.683c0-3.138,2.545-5.683,5.686-5.683c3.137,0,5.682,2.545,5.682,5.683 C373.592,377.612,371.047,380.156,367.91,380.156z M414.266,362.455h-92.711V220.924h92.711V362.455z"></path> <path d="M333.948,306.947h67.924c0.936,0,1.691-0.758,1.691-1.692v-27.13c0-0.938-0.758-1.692-1.691-1.692h-67.924 c-0.936,0-1.692,0.758-1.692,1.692v27.13C332.256,306.189,333.015,306.947,333.948,306.947z"></path> <path d="M333.948,349.633h67.924c0.936,0,1.691-0.757,1.691-1.693v-27.129c0-0.938-0.758-1.695-1.691-1.695h-67.924 c-0.936,0-1.692,0.76-1.692,1.695v27.129C332.256,348.876,333.015,349.633,333.948,349.633z"></path> <path d="M333.948,264.262h67.924c0.936,0,1.691-0.756,1.691-1.693v-27.129c0-0.937-0.758-1.692-1.691-1.692h-67.924 c-0.936,0-1.692,0.758-1.692,1.692v27.129C332.256,263.506,333.015,264.262,333.948,264.262z"></path> </g> </g> </g> </g></svg>
            <h4 className="FontNormal">Projects</h4>
          </div>
          </Link>

          <Link to="Contact" duration={500} smooth={true}
          onClick={()=>{setIsNavbar(false)}}
          >
          <div>
           <svg fill="#ffffff" version="1.1" id="XMLID_276_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve" width="22px" height="22px" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="contact-us"> <g> <path d="M4,24v-5H0V0h23v19h-9.3L4,24z M2,17h4v3.7l7.3-3.7H21V2H2V17z"></path> </g> <g> <rect x="5" y="8" width="3" height="3"></rect> </g> <g> <rect x="10" y="8" width="3" height="3"></rect> </g> <g> <rect x="15" y="8" width="3" height="3"></rect> </g> </g> </g></svg>
            <h4 className="FontNormal">Contact</h4>
          </div>
          </Link>

     </motion.div>)
     }
     </AnimatePresence>
     
         
     </div>
  )
}