import React from 'react'

const Projects = () => {
  return (
    <div className="flex flex-col min-h-screen items-center">

      <div className="my-10">
        <h2 className="text-[3rem] text-accent">Projects</h2>
      </div>

      {/* Project list container */}
      <div>
        <div className="bg-neutralSecondary border-2 border-neutralSecondary-dark rounded-lg py-20 my-32 w-[60vw] flex items-center">

          <p>project title</p>
          <p>date last worked on</p>
          <p>description</p>
          <p>languages used (bar?)</p>
          <p>title</p>
        </div>
      </div>
      
    </div>
  )
}

export default Projects