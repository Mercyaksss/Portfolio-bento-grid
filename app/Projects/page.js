import React from 'react'
import enve from '../assets/enver.png'
import themeswitcher from '../assets/themeswitcher.png'
import news from '../assets/newshomepage.png'
import grid from '../assets/space.png'
import salespage from '../assets/salespage.png'
import fylo from '../assets/Fylo.png'
import Link from 'next/link'
import Image from 'next/image'
import './page.scss'

function page() {
  const projects = [
    {
      name: "Enver", 
      description: "A fully responsive web application built from a Figma design. Translated visual design into clean, modern code focusing on pixel-perfect implementation, responsive layout, and usability.", 
      github: 'https://github.com/Mercyaksss/Enver', 
      livelink: "https://enver-pied.vercel.app/", 
      image: enve,
      tech: ["React", "Next.js", "SCSS"]
    },
    {
      name: "Fylo", 
      description: "A fully responsive landing page built from a Frontend Mentor challenge. Enhanced the original design with smooth animations and engaging interactions to bring the interface to life.", 
      github: 'https://github.com/Mercyaksss/fylo', 
      livelink: "https://fylo-chi-ruby.vercel.app/", 
      image: fylo,
      tech: ["TypeScript", "SCSS", "Framer Motion"]
    },
    {
      name: "Theme Switcher", 
      description: "A web application allowing users to seamlessly switch between teams and workspaces. Built with smooth state management, responsive design, and intuitive user interactions.", 
      github: 'https://github.com/Mercyaksss/theme_switcher', 
      livelink: "https://theme-switcher-lyart.vercel.app/", 
      image: themeswitcher,
      tech: ["React", "CSS", "Responsive"]
    },
    {
      name: "Space Tourism", 
      description: "A multi-page space tourism site featuring dynamic routing and interactive content sections. Focused on creating an immersive experience with polished UI and smooth navigation.", 
      github: 'https://github.com/Mercyaksss/Space-Tourism', 
      livelink: "https://space-tourism-mu-ten.vercel.app/", 
      image: grid,
      tech: ["Vite", "React", "SCSS"]
    },
    {
      name: "News Homepage", 
      description: "A modern news homepage featuring a complex CSS Grid layout with multiple content sections. Built with a focus on responsive design, visual hierarchy, and creating an organized reading experience.", 
      github: 'https://github.com/Mercyaksss/news-homepage', 
      livelink: "https://news-homepage-alpha-sooty.vercel.app/", 
      image: news,
      tech: ["Vite", "React", "SCSS"]
    },
    {
      name: "Digital guide Salespage", 
      description: "A sales landing page built for my digital marketing guide. Designed and developed with conversion in mind, featuring strategic layout, persuasive copy flow, and clear CTAs to drive purchases.", 
      github: 'https://github.com/Mercyaksss/Digital-marketing-salespage', 
      livelink: "https://digital-marketing-salespage.vercel.app/", 
      image: salespage,
      tech: ["HTML", "CSS", "Responsive"]
    },
    
  ]

  return (
    <div className='projects-container'>
      <div className='projects-header'>
        <h1>_Projects</h1>
        <p>A selection of things I've built</p>
      </div>

      <div className='project-grid'>
        {projects.map((project, index) => (
          <div key={index} className={`project-card card-${index + 1}`}> 
            <div className='project-image'>
              <Image 
                src={project.image} 
                alt={project.name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            
            <div className='project-content'>
              <h2>{project.name}</h2>
              <p className='project-description'>{project.description}</p>
              
              <div className='project-tech'>
                {project.tech.map((tech, i) => (
                  <span key={i} className='tech-tag'>{tech}</span>
                ))}
              </div>
              
              <div className='project-links'>
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <button className='btn-secondary'>GitHub</button>
                </Link>
                <Link href={project.livelink} target="_blank" rel="noopener noreferrer">
                  <button className='btn-primary'>Live Demo</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page