import { Element } from "react-scroll"
import "./Hero.css"


export default function Hero(){
    return(
         <Element name="Hero" className="HeroSection">
                 <div className="HSection1">
                         <h1 className="FontHead"><span style={{color:"#00B4D8"}}> Blockchain</span> <br></br> " Software Engineer</h1>
                         <h4 className="FontNormal">
                          Hi, I’m Abdullah Imran, an emerging Software Engineer passionate about building scalable digital solutions. I bring hands-on experience in Blockchain technologies and Smart Contract development, with a keen interest in decentralized systems and Web3 innovation.
                         </h4>
                         <div>
                     <button
                       onClick={()=>{
                        window.open("https://drive.google.com/file/d/1LwDP5GgYBOSQRunuM4eIbPlsVS9po4xF/view?usp=sharing","_blank")
                       }}
                     class="button type1">
                        <span class="btn-txt">My Resume</span>
                    </button>
                        </div>
                 </div>

                 <div className="HSection2">
                       <div><h1 className="FontHead">1.5+</h1> <h4 className="FontNormal">Years Of Experience</h4></div>
                       <div><h1 className="FontHead">3+</h1> <h4 className="FontNormal">Projects Completed</h4></div>
                       <div><h1 className="FontHead">2+</h1> <h4 className="FontNormal">Verified Certifications</h4></div>
                      
                 </div>
         </Element>
    )
}