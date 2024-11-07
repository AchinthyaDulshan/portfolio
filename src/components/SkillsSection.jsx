import React from 'react'
import { skills } from '../constants/constants'

const SkillsSection = () => {

    
    return (
        <section id='skills'>
            <div className="max-w-screen-xl mx-auto py-16 px-8 md:px-20 lg:px-40">

                    {/* <!-- Section Heading --> */}
                    <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-center font-bold bg-gradient-to-r from-[#B9A14C] to-gray-700 text-transparent bg-clip-text mb-10">What I Work With</h2>

                    {/* <!-- Skills Grid --> */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center text-white">
                    {
                        skills.map((card,index)=>(
                            <SkillsCard key={index} card={card} />
                        ))
                    }
                    </div>
                </div>

        </section>
    )
}

// skills card component 
const SkillsCard = (props) => {
    return (
        <div className="p-4 border border-gray-600 bg-gray-800 rounded-lg shadow-lg group transition transform hover:-translate-y-1 hover:shadow-xl">
            <div className="mx-auto mb-4" >
                {props.card.image}
            </div>
            <h3 className="text-lg font-medium font-text text-gray-400 group-hover:text-gray-200">{props.card.text}</h3>
        </div>
    )
}


export default SkillsSection