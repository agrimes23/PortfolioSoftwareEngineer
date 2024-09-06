import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-neutralSecondary h-[10vh] flex justify-center items-center gap-20 border-t-[1px] border-neutralSecondary-dark z-50 ">
        <a
          href="https://github.com/agrimes23"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
            <FaGithub className="text-4xl text-accent" />
        </a>

        <a
          href="https://www.linkedin.com/in/alex-grimes-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
            <FaLinkedin className="text-4xl text-accent" />
        </a>
    </div>
  )
}

export default Footer