import ProfileImage from '../assets/images/profileImage_2.jpg'
import MedicalCenterImage from '../assets/images/Projects/medicalCenterManagementSystem/logIn.png'
import FISImage from '../assets/images/Projects/facultyInformationSystem/FIS_logIn.png'
import LEDKLNImage from '../assets/images/Projects/ledKlnSite/LED_KLN_home.png'
import { FaJava,FaHtml5,FaCss3Alt,FaReact,FaBootstrap,FaPhp,FaPlus,FaFacebookF,FaLinkedinIn,FaInstagram,FaGithub} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiFrontendmentor } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";


// Nav Bar section --> Navbar links 
export const navLinks =[
    {name:"Home",link:"#hero"},
    {name:"Projects",link:"#projects"},
    {name:"About",link:"#aboutMe"},
    {name:"Skills",link:"#skills"},
    {name:"Contact",link:"#contact"},
    {name:"FAQs",link:"#faq"}
];

//Hero Section --> Main content
export const HeroContent = {
    profileImage:ProfileImage,
    myName:'Achinthya Dulshan',
    personalBrandingHeading:'Exploring Technology and Engineering to Create Innovative Solutions',
    PersonalBrandingSubheading:'Undergraduate passionate about IT, Electronics, and Digital Innovations.'
}

// project section --> project cards 
export const ProjectCardDetails = [{
    name: 'Medical Center Management System',
    description: 'This one is our final project of the course module COST 21053 - Object Oriented Programming which is offered in 2nd year 1st semester. This project is based on Medical center of our university.',
    topIcon: MedicalCenterImage,
    technologiesList:['java','figma','mySQL'],
    learnMoreLink: 'https://github.com/AchinthyaDulshan/MedicalCenterManagementSystem'
}, {
    name: 'Faculty Information System',
    description: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    topIcon: FISImage,
    technologiesList:['php','bootstrap', 'jQuery','figma','mySQL'],
    learnMoreLink: 'https://github.com/AchinthyaDulshan/faculty-information-system'
}, {
    name: 'LED KLN Web Site',
    description: 'LED KLN is a student-run body initiated at the University of Kelaniya to groom the professionalism of undergraduates.',
    topIcon: LEDKLNImage,
    technologiesList:['java','figma','mySQL'],
    learnMoreLink: 'https://github.com/AchinthyaDulshan/LED-KLN.github.io'
}];


export const AboutMeContent = {
    image:'',
    paragraph_1:'I am an undergraduate student passionate about IT and Electronics. From experimenting with hardware to exploring the latest in software, I am constantly driven by a desire to understand and innovate. My journey has been about turning ideas into tangible projects, and I am excited to continue building and learning.',
    paragraph_2:'Currently, I am focused on expanding my skills in [specific skills or fields you\'re interested in, e.g., IoT, machine learning, embedded systems]. I believe in the power of technology to create solutions that make a difference.',
    linkText:'Let\'s Connect',
    link:'#contact'
}

export const skills = [{
    image: <FaJava size={30} className='mx-auto group-hover:text-[#B9A14C] group-hover:scale-125 transition-all duration-200'/>,
    text: 'Java'
},{
    image: <IoLogoJavascript size={30} className='mx-auto group-hover:text-[#B9A14C] group-hover:scale-125 transition-all duration-200'/>,
    text: 'JavaScript'
},{
    image: <FaHtml5 size={30} className='mx-auto group-hover:text-[#B9A14C] group-hover:scale-125 transition-all duration-200' />,
    text: 'HTML'
},{
    image: <FaCss3Alt size={30} className='mx-auto group-hover:text-[#B9A14C] group-hover:scale-125 transition-all duration-200' />,
    text: 'CSS'
},{
    image: <FaReact size={30} className='mx-auto group-hover:text-[#B9A14C] group-hover:scale-125 transition-all duration-200' />,
    text: 'React'
},{
    image: <FaBootstrap size={30} className='mx-auto group-hover:text-[#B9A14C] group-hover:scale-125 transition-all duration-200' />,
    text: 'Bootstrap'
},{
    image: <RiTailwindCssFill size={30} className='mx-auto group-hover:text-[#B9A14C] group-hover:scale-125 transition-all duration-200' />,
    text: 'Tailwind'
},{
    image: <SiMysql size={30} className='mx-auto group-hover:text-[#B9A14C] group-hover:scale-125 transition-all duration-200' />,
    text: 'mySQL'
},{
    image: <FaPhp size={30} className='mx-auto group-hover:text-[#B9A14C] group-hover:scale-125 transition-all duration-200' />,
    text: 'php'
},{
    image: <FaPlus  size={20} className='mx-auto group-hover:text-[#B9A14C] group-hover:scale-125 transition-all duration-200' />,
    text: 'more'
}]


export const FAQs = [{
    'question':'What is Frontend Mentor, and how will it help me?',
    'answer':'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It\'s suitable for all levels and ideal for portfolio building.'
},{
    'question':'Is Frontend Mentor free?',
    'answer':'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.'
},{
    'question':'Can I use Frontend Mentor projects in my portfolio?',
    'answer':'Yes, you can use projects completed on Frontend Mentor in your portfolio. It\'s an excellent way to showcase your skills to potential employers!'
},{
    'question':'How can I get help if I\'m stuck on a Frontend Mentor challenge?',
    'answer':'The best place to get help is inside Frontend Mentor\'s Discord community. There\'s a help channel where you can ask questions and seek support from other community members.'
}]

export const SocialMediaLinks = [
    {
        image:<FaFacebookF size={20}/>,
        link:'/'
    },{
        image:<FaLinkedinIn size={20}/>,
        link:'/'
    },{
        image:<FaInstagram size={20}/>,
        link:'/'
    },{
        image:<FaGithub size={20}/>,
        link:'/'
    },{
        image:<FaXTwitter size={20}/>,
        link:'/'
    },{
        image:<SiFrontendmentor size={20}/>,
        link:'/'
    }]