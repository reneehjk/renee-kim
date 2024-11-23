// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectSlide from '../components/ProjectSlide';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//pictures
import Lovelace from "../assets/Lovelace.png";
import calculator from "../assets/calCalculator.png";
import roomie from "../assets/roomieMatch.png";
import sonder from "../assets/Sonder.png";
import todo from "../assets/todoList.png";
import qwic from "../assets/QWIC.png";

// Projects list
const projects = [
    {
        title: "QWIC Website",
        description: "Created a new website from scratch for the Queen's Women in Computing club at Queen's University.",
        techStack: "Next.js, Tailwind CSS",
        role: "Project Manager",
        image: qwic,
        codeLink: "https://github.com/queens-wic/qwic",
        projectLink: "https://qwic.org/"
    },
    {
        title: "RoomieMatch",
        description: "Project created at WaffleHacks to help people connect with new roommates. Only frontend work had been done.",
        techStack: "React.js",
        role: "Frontend Developer",
        image: roomie,
        codeLink: "https://github.com/reneehjk/roomie-match",
        projectLink: "https://reneehjk.github.io/roomie-match/"
    },
    {
        title: "Lovelace Logs",
        description: "A resource to empower women in STEM. Created during EmpowHER hacks and received an honorable mention.",
        techStack: "React.js, Tailwind CSS",
        role: "Frontend Developer",
        image: Lovelace,
        codeLink: "https://github.com/reneehjk/lovelace-logs",
        projectLink: "https://reneehjk.github.io/lovelace-logs/"
    },
    {
        title: "Calorie Calculator",
        description: "A personal project to test arithmetics in JavaScript and calculate the BMR of a person based on 4 variables.",
        techStack: "React.js",
        role: "Frontend Developer",
        image: calculator,
        codeLink: "https://github.com/reneehjk/calorie-calculator",
        projectLink: "https://reneehjk.github.io/calorie-calculator/"
    },
    {
        title: "To-Do List",
        description: "Created a to-do list that has adding, removing and editing functionality as my first ever React.js personal project.",
        techStack: "React.js",
        role: "Frontend Developer",
        image: todo,
        codeLink: "https://github.com/reneehjk/Todo-List",
        projectLink: "https://reneehjk.github.io/Todo-List/"
    },
    {
        title: "Sonder",
        description: "My first project from HackHer! A journal allowing users to write thoughts, save entries, and use stickers.",
        techStack: "JavaScript, HTML, CSS",
        role: "Frontend Developer",
        image: sonder,
        codeLink: "https://github.com/reneehjk/Sonder.",
        projectLink: "https://sonderjournal.netlify.app/"
    },
];

function Projects() {
  return (
    <div className='max-w-7xl mx-auto select-none'>
      <div className='mb-10 text-[64px] mt-24'>Coding Projects</div>
      <div className='content-end'>
        <Swiper
            modules={[Navigation, Scrollbar, A11y]}
            className="h-[700px]"
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {projects.map((project, index) => (
                <SwiperSlide key={index}>
                <ProjectSlide
                    title={project.title}
                    description={project.description}
                    techStack={project.techStack}
                    role={project.role}
                    image={project.image}
                    codeLink={project.codeLink}
                    projectLink={project.projectLink}
                />
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    </div>
  );
}

export default Projects;
