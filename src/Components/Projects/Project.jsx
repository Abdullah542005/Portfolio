import { motion } from "motion/react";
import { useDispatch } from "react-redux";
import { Element } from "react-scroll";
import project1Image from "../../assets/project1.jpg";
import project2Image from "../../assets/project2.png";
import { setContent, setVisibilityTrue } from "../../Redux/PVMenu";
import "./Project.css";
export default function Projects(){
   
     const dispatch  = useDispatch();

     const projects = [
        {
        name:"PoW Blockchain", tags:["Blockchain","Web3.0","SQL"],
        dateCreated:"25 May, 2025", TechStack:["React Js","Node Js","Express JS","Socket Io","Sqlite3"],
        description:"A Simple Non-Evm Proof Of Work Blockchain that uses Account Based Model",
        features:[
            "Block Creation, Mining and Verification",
            "Transactions Verification and Mempool",
            "P2P Network Among Full Nodes",
            "Block and Transactions Broadcasting to the Network",
            "Database Syncrhonization with Blockchain",
            "Facilitating Non-Custodial Wallets and other Full Nodes Data Requests."
        ],
        links:{
            Github:"https://github.com/Abdullah542005/ProjectBlockchain",
            Web:"https://cipherchain.netlify.app/",
        },
        image:project2Image
        },

        {
        name:"FundVortex", tags:["React Js","Smart Contracts","Web3.0"],
        dateCreated:"10 October, 2024", TechStack:["React Js","Third Web","Solidity","Base (EVM)","Ether Js"],
        description:"A fund raising platform for Erc20/Erc721 tokens",
        features:[
            "SBT's Minting For Verified Campaign Owners",
            "Erc20/ERC721 Token Creation and Fund Raising Using Native Currency",
            "Token Claims For Investors and Investements Claims For Owners After Campaign Ends",
            "AI Chatbot, Helping Owners Create Token Campaigns",
        ],
        links:{
            Github:"https://github.com/Abdullah542005/FundVortex",
            Web:"https://fundvortexdapp.netlify.app/",
        },
        image:project1Image,
        }


     ]
    
    return(
         <Element name="Projects" className="Project">
                <div><div class="loader"></div> <h1 className="FontNormal">Projects</h1></div>

         { 
          projects.map((project,index)=>  {
          return <motion.div 
                 key={index}
                initial={{y:100,opacity:0}}
                whileInView={{y:0,opacity:1}}
                viewport={{once:true}}
                transition={{duration:1, ease:"easeOut"}}
                 onClick={()=>{
                         dispatch(setContent(project))
                         dispatch(setVisibilityTrue())
                      }}
          className="pSection">
                 <div>
                    <h1 className="FontHead" style={{fontWeight:700}}>{project.name}</h1>
                    <svg 
                     
                    width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M21.83 11.2807C19.542 7.15186 15.8122 5 12 5C8.18777 5 4.45796 7.15186 2.17003 11.2807C1.94637 11.6844 1.94361 12.1821 2.16029 12.5876C4.41183 16.8013 8.1628 19 12 19C15.8372 19 19.5882 16.8013 21.8397 12.5876C22.0564 12.1821 22.0536 11.6844 21.83 11.2807ZM12 17C9.06097 17 6.04052 15.3724 4.09173 11.9487C6.06862 8.59614 9.07319 7 12 7C14.9268 7 17.9314 8.59614 19.9083 11.9487C17.9595 15.3724 14.939 17 12 17Z" fill="#ffffff"></path> </g></svg>
                    </div>
                 <div>
                    {
                        project.tags.map((tag)=><div className="pTag"> <h4 className="FontNormal">{tag}</h4> </div>)
                    }
                </div>
          </motion.div>})
        }
      
        
         </Element>
    )
}


