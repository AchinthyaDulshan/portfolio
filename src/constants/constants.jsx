import ProfileImage from '../assets/images/profileImage.jpg'
import MedicalCenterImage from '../assets/images/Projects/medicalCenterManagementSystem/logIn.png'
import FISImage from '../assets/images/Projects/facultyInformationSystem/FIS_logIn.png'
import LEDKLNImage from '../assets/images/Projects/ledKlnSite/LED_KLN_home.png'
import AboutMeImage from '../assets/images/img_aboutMe.jpg'
import { FaJava,FaHtml5,FaCss3Alt,FaReact,FaBootstrap,FaPhp,FaPlus,FaFacebookF,FaLinkedinIn,FaInstagram,FaGithub,FaPhone,FaEnvelope} from "react-icons/fa";
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
export const heroContent = {
    profileImage:ProfileImage,
    myName:'Achinthya Dulshan',
    personalBrandingHeading:'Exploring Technology and Engineering to Create Innovative Solutions',
    PersonalBrandingSubheading:'Undergraduate passionate about IT, Electronics, and Digital Innovations.',
    cvLink:'/'
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
    description: '',
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

// About me  Section --> section content 
export const aboutMeContent = {
    image:AboutMeImage,
    paragraph_1:'I am an undergraduate student passionate about IT and Electronics. From experimenting with hardware to exploring the latest in software, I am constantly driven by a desire to understand and innovate. My journey has been about turning ideas into tangible projects, and I am excited to continue building and learning.',
    paragraph_2:'Currently, I am focused on expanding my skills in Electronic based research, machine learning, embedded systems. I believe in the power of technology to create solutions that make a difference.',
    linkText:'Let\'s Connect',
    link:'#contact'
}

// Skills section 
export const skills = [{
    image: <FaJava size={30} className='skill-icon'/>,
    text: 'Java'
},{
    image: <IoLogoJavascript size={30} className='skill-icon'/>,
    text: 'JavaScript'
},{
    image: <FaHtml5 size={30} className='skill-icon' />,
    text: 'HTML'
},{
    image: <FaCss3Alt size={30} className='skill-icon' />,
    text: 'CSS'
},{
    image: <FaReact size={30} className='skill-icon' />,
    text: 'React'
},{
    image: <FaBootstrap size={30} className='skill-icon' />,
    text: 'Bootstrap'
},{
    image: <RiTailwindCssFill size={30} className='skill-icon' />,
    text: 'Tailwind'
},{
    image: <SiMysql size={30} className='skill-icon' />,
    text: 'mySQL'
},{
    image: <FaPhp size={30} className='skill-icon' />,
    text: 'php'
},{
    image: <FaPlus  size={20} className='skill-icon' />,
    text: 'more'
}]

// FAQ section 
export const FAQ = [{
    question:'What types of projects have you worked on?',
    answer:'I have experience working on a variety of projects, including academic assignments, personal projects, and collaborative group work. These span fields like software development, web design, and IT systems. Each project has helped me deepen my understanding of programming, design, and practical problem-solving.'
},{
    question:'What tools and technologies do you specialize in?',
    answer:'I specialize in languages and tools like Java, JavaScript, HTML, CSS, and frameworks like React. I\'m also experienced in using Figma for design and have a solid understanding of database management with MySQL.'
},{
    question:'Are you open to freelance or project-based work?',
    answer:'Currently, I am open to taking on freelance or project-based work where I can contribute and grow my skills. Feel free to reach out if you have a project idea or need assistance with IT and development tasks!'
},{
    question:'How can I contact you for collaboration or job opportunities?',
    answer:'You can reach out to me through the contact form on this website or directly via [email/LinkedIn link, if applicable]. I’m always excited to discuss potential collaborations, job opportunities, or any questions about my work.'
}]


// Footer Section --> Social media Links 
export const SocialMediaLinks = [
    // {
    //     image:<FaPhone size={20}/>,
    //     link:'callto:+94717324763'
    // },{
    //     image:<FaEnvelope size={20}/>,
    //     link:'mailto:achinthyadulshan088@gmail.com'
    // },{
    {
        image:<FaFacebookF size={20}/>,
        link:'https://www.facebook.com/AchinthyaDulshan'
    },{
        image:<FaLinkedinIn size={20}/>,
        link:'https://www.linkedin.com/in/achinthya-dulshan-6a0616221/'
    },{
        image:<FaInstagram size={20}/>,
        link:'https://www.instagram.com/achinthya_dulshan/'
    },{
        image:<FaGithub size={20}/>,
        link:'https://github.com/AchinthyaDulshan'
    },{
        image:<FaXTwitter size={20}/>,
        link:'https://x.com/Achi_Dulshan'
    },{
        image:<SiFrontendmentor size={20}/>,
        link:'https://www.frontendmentor.io/profile/AchinthyaDulshan'
    }]