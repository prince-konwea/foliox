import { TbBrandGithub } from "react-icons/tb";
import { TbBrandTwitter } from "react-icons/tb";
import { SiLinkedin } from "react-icons/si";
import {SlSocialInstagram} from "react-icons/sl"

function LeftSide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
         <a href="https://github.com/prince-konwea" target="_blank">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
            justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"> 
                <TbBrandGithub/>
                
                </span>
         </a>
         <a href="https://twitter.com/giantstepz1" target="_blank">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
            justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"> 
                <TbBrandTwitter/>
                
                </span>
         </a>
         <a href="https://linkedin.com/in/prince-konwea" target="_blank">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
            justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"> 
                <SiLinkedin/>
                
                </span>
         </a>
         <a href="https://instagram.com/giantstepz1" target="_blank">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
            justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"> 
                <SlSocialInstagram/>
                
                </span>
         </a>
         
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  )
}

export default LeftSide;
