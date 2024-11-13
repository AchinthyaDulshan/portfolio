import React from 'react';
import { FaGithub } from "react-icons/fa";
import { ProjectCardDetails } from '../constants/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const ProjectsSection = () => {
    return (
        // section start 
        <section id='projects' className='scroll-mt-16'>
            {/* main container start  */}
            <div className='px-8 pb-5 md:px-14 lg:px-14 border-b border-b-gray-700'>
                {/* section heading start  */}
                <h1 className='lg:mb-10 font-heading text-2xl lg:text-4xl text-center font-bold bg-gradient-to-r from-[#B9A14C] to-gray-700 text-transparent bg-clip-text'>My Work in Action</h1>
                {/* section heading end  */}

                {/* Project cards carousel start  */}
                <Swiper
                    spaceBetween={20} // Space between slides to avoid overlap
                    // centeredSlides={true}
                    slidesPerView={1} // Default view for mobile
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    loop={true}
                    navigation={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation]}
                    style={{ padding: '5rem 0' }} // Padding around the entire Swiper
                >
                    {ProjectCardDetails.map((card, index) => (
                        <SwiperSlide key={index} >
                            <ProjectCard card={card} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* project cards carousel end  */}

            </div>
            {/* main container end  */}
        </section>
        // section end 
    );
}

// ========================================================================
// ProjectCard Component 
const ProjectCard = (props) => {
    return (
        <div className='my-3 p-10 grid content-between min-h-[29rem] rounded-lg border-2 border-gray-400 text-gray-200 relative group transition-all duration-200 hover:border-[#B9A14C] hover:scale-105 hover:shadow-md hover:shadow-[#B9A14C]/30'>

            {/* Floating Image area */}
            <div className="absolute lg:-top-20 md:-top-14 -top-12 left-1/2 transform -translate-x-1/2 w-4/5 rounded-lg overflow-hidden shadow-lg">
                {/* image  */}
                <img className="w-full h-full object-cover brightness-50 group-hover:brightness-90 transition-all duration-200 outline outline-2 outline-white" src={props.card.topIcon} alt={props.card.name} />
            </div>

            {/* card heading  */}
            <h1 className='font-heading font-semibold mt-16 mb-5 uppercase text-lg text-center group-hover:text-[#B9A14C] transition-all duration-200'>{props.card.name}</h1>

            {/* card description  */}
            <p className='font-text text-sm font-light leading-5 tracking-tight pb-8 lg:pb-10 text-gray-400'>{props.card.description}</p>

            {/* project texhnology list  */}
            <div className='my-2 flex flex-wrap gap-1'>
                {props.card.technologiesList.map((item, index) => (
                    <span key={index} className='bg-gray-700 inline-block px-2 py-1 rounded-full font-text text-xs'>{'#' + item}</span>
                ))}
            </div>

            {/* learn more link  */}
            <a href={props.card.learnMoreLink} target="_blank" className='flex justify-center items-center gap-2 mt-5 font-text text-sm border-2 rounded-full w-full px-6 py-2 transition-all duration-200 h-fit group-hover:text-[#B9A14C] group-hover:border-[#B9A14C] group-hover:-translate-y-1 group-hover:shadow-md group-hover:shadow-[#B9A14C]/30'>Learn More <FaGithub /> </a>

        </div>
    )
}

export default ProjectsSection;
