import React from 'react'
import { FaGithub } from "react-icons/fa";
import { ProjectCardDetails } from '../constants/constants'

const ProjectsSection = () => {

    return (
        <section id='projects'>
            <div className='px-8 pb-10 md:px-14 lg:px-8 border-b border-b-gray-700'>
                <h1 className='mb-24 font-heading text-2xl lg:text-4xl text-center font-bold bg-gradient-to-r from-[#B9A14C] to-gray-700 text-transparent bg-clip-text'>My Work in Action</h1>
                <div className='grid gap-20 md:gap-5 md:grid-cols-2 lg:gap-2 lg:grid-cols-3 lg:max-w-5xl md:gap-y-20 mx-auto'>
                    {ProjectCardDetails.map((card, index) => (
                        <ProjectCard key={index} card={card} />
                    ))}
                </div>
            </div>
        </section>
    )
}

// project Card component 
const ProjectCard = (props) => {
    return (
        <div className='p-10 grid content-between rounded-lg border border-very-light-gray text-white relative group transition-all duration-200'>
            {/* Floating Image Section */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-4/5 h-auto bg-gray-600 rounded-lg overflow-hidden shadow-lg">
                <img className="w-full h-full object-cover brightness-50 group-hover:brightness-90 transition-all duration-200" src={props.card.topIcon} alt={props.card.name} />
            </div>

            <h1 className='font-heading font-semibold mt-16 mb-5 uppercase text-lg text-center'>{props.card.name}</h1>
            <p className='font-text text-sm font-light leading-5 tracking-tight pb-8 lg:pb-20 flex-1 text-gray-400'>{props.card.description}</p>

            <div className='my-2 flex flex-wrap gap-1'>
                {props.card.technologiesList.map((item,index)=>(
                <span key={index} className='bg-gray-700 inline-block px-2 py-1 rounded-full font-text text-xs'>{'#'+item}</span>
                ))}
            </div>
            <a href={props.card.learnMoreLink} target="_blank" className='mt-5 font-text text-sm border-2 rounded-full w-full px-6 py-2 hover:bg-transparent transition-all duration-200 h-fit flex justify-center items-center gap-2'>Learn More <FaGithub/> </a>
        </div>
    )
}

export default ProjectsSection