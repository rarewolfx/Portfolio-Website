import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin } from "@tabler/icons-react";
import { link } from "fs";

const Social=()=>{
    const socialLinks=[{link:"https://github.com/rarewolfx", icon:IconBrandGithub}, {link:"https://www.linkedin.com/in/snehasish-haldar-594a67225/", icon:IconBrandLinkedin}, 
        {link:"https://www.instagram.com/code.marshal_", icon:IconBrandInstagram}, {link:"https://leetcode.com/u/rarewolfx/", icon:IconBrandLeetcode}
    ];
    const socialIcons=socialLinks.map((socialLink, index)=>{
        return <a   key={index} href={`${socialLink.link}`} target="_blank"  className="font-mono text-lg  hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out">
       <div data-aos="fade-up-left" data-aos-duration="800" > <socialLink.icon  className="-rotate-90" size={30} /></div>
    </a>
    })

    return <div  className="flex  text-textColor items-center gap-10 fixed bottom-40 -left-44 rotate-90 " >
        {socialIcons}
        <hr className="border-[2px] w-40 rounded-full  bg-textColor border-textColor"/>
    </div>
}
export default Social;