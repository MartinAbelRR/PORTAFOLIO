import HTML5 from '../icons/HTML5.astro';
import CSS3 from '../icons/CSS3.astro';
import Astro from '../icons/Astro.astro';
import Tailwind from '../icons/Tailwind.astro';
import SQL from '../icons/SQL.astro';
import Anaconda from '../icons/Anaconda.astro';
import Django from '../icons/Django.astro';
import GithubStatic from '../icons/GithubStatic.astro';
import Git from '../icons/Git.astro';
import React from '../icons/React.astro';
import Goland from '../icons/Goland.astro';
import Typescript from '../icons/Typescript.astro';
import Javascript from '../icons/Javascript.astro';
import Python from '../icons/Python.astro';

export interface MyInformation {
    description: string;
    labels: string[];
    image: any;
    title: string;
}

export interface Content {
    id?: string;
    description?: string;
    image?: string;
    name?: string;
    ref?: string;
    technologies?: any[];
    title?: string;
}

export interface Skill extends Content {
    technologie: any;
    percent: number;
}

export interface Proyect extends Content {
    isPage: boolean;
    refPage?: string;
}

export const aboutMe: Content = {
    name: "Martin Reyes",
    description: "I am a systems engineer with a fervor for software development, a data science enthusiast and a perpetual learner of new technologies. I am always ready to face challenges, grow and contribute to the exciting world of technology - join me on this journey of innovation and discovery!",
    image: '/about-me.png'
}

export const dataImages: Content[] = [
    {
        title: "udemy",
        image: '/udemy.png'
    },
    {
        title: "dmc",
        image: '/dmc.jpg'
    },
    {
        title: "youtube",
        image: '/youtube.jpg'
    },
    {
        title: "unmsm",
        image: '/unmsm.jpg'
    }
]    

export const myInformation: MyInformation[] = [
    {
        labels: ["Hello World", "Hola Mundo"],
        title: "about me",
        description: "A system engineer passionate about creating technology solutions, with experience in both fronted and backend development.",
        image: '/profile-1.png'
    },
    {
        labels: ["Efficiency", "Experience"],
        title: "proyects",
        description: "¡Discover my most outstanding projects that I have done!",
        image: '/profile-2.png'
    },
    {
        labels: ["HTML5", 'CSS3', 'JS', 'TS', 'Go', 'React', 'TailwindCSS', 'Python', 'Django', 'Git', 'Github', 'SQL'],
        title: "skills",
        description: "HTML5, CSS3, JS, TypeScript, React, Git, GitHub. I merge technologies to create captivating and efficient digital experiences.",
        image: '/proyect.png'
    },
    {
        labels: ["UNMSM", 'Udemy', 'DMC', 'Youtube'],
        title: "education",
        description: "Solid engineering background, prepared for technological challenges.",
        image: '/profile-3.png'
    }
]

export const mySkills: Skill[] = [
    {
        id: '1',
        description: "I am an expert developer in HTML5, the fundamental standard for the creation of web pages.",
        percent: 90,
        technologie: HTML5,
        title: "HTML5"
    },
    {
        id: '2',
        description: "My CSS3 skills focus on the design and presentation of web pages, incorporating modern styles, transitions and animations.",
        percent: 90,
        technologie: CSS3,
        title: "CSS3"
    },
    {
        id: '3',
        description: "As a developer, I have worked with Astro, a framework for building static websites that combines server-side rendering with the simplicity of static sites.",
        percent: 65,
        technologie: Astro,
        title: "Astro"
    },
    {
        id: '4',
        description: "I am a developer of interactive user interfaces using React, a JavaScript library.",
        percent: 70,
        technologie: React,
        title: "React"
    },
    {
        id: '5',
        description: "I implement TypeScript to add static typing to my projects.",
        percent: 70,
        technologie: Typescript,
        title: "Typescript"
    },
    {
        id: '6',
        description: "As a database professional, I have experience in SQL to manage and manipulate relational databases.",
        percent: 80,
        technologie: SQL,
        title: "SQL"
    },
    {
        id: '7',
        description: "In the field of data science, I use tools such as anaconda in Python. I apply advanced data analysis techniques to extract meaningful patterns and generate valuable insights.",
        percent: 90,
        technologie: Anaconda,
        title: "Data Science"
    },
    {
        id: '8',
        description: "My experience in Go focuses on the development of efficient, high-performance systems. I use the language's concurrency capabilities to build distributed services and scalable applications.",
        percent: 70,
        technologie: Goland,
        title: "Go",
    },
    {
        id: '9',
        description: "I am skilled in the use of Python, a versatile language widely used in web development, data science and automation.",
        percent: 90,
        technologie: Python,
        title: "Python",
    },
    {
        id: '10',
        description: "As a backend developer, I use Django, a Python web development framework.",
        percent: 70,
        technologie: Django,
        title: "Django"
    },
    {
        id: '11',
        description: "In the design and styling of my projects, I use Tailwind CSS to create modern and visually appealing interfaces.",
        percent: 90,
        technologie: Tailwind,
        title: "TailwindCSS"
    },
    {
        id: '12',
        description: "GitHub is a Git-based cloud platform designed to facilitate collaboration on software projects.",
        percent: 85,
        technologie: GithubStatic,
        title: "Github",
    },
    {
        id: '13',
        description: "Git is a distributed version control system for tracking and managing changes to a project's source code.",
        percent: 80,
        technologie: Git,
        title: "Git",
    }
]

export const proyects: Proyect[] = [
    {
        id: '1',
        description: "BlogGo is an exciting project that seeks to revolutionize the blogging experience, focusing on efficiency, security and flexibility. With the backend developed in Go, a powerful database and a strong user authentication system, BlogGo is designed to provide a robust and easy-to-use environment for bloggers and readers alike.",
        image: '/blog-back.jpg',
        isPage: false,
        ref: 'https://github.com/MartinAbelRR/GO_BLOGBACKEND',
        technologies: [Goland],
        title: "Backend con Go - Blog"
    },
    {
        id: '2',
        description: "BlogGo is a frontend development project that utilizes the power of React along with the Zustand and Axios libraries to create a fluid and dynamic user experience. This project focuses on efficient application state management and seamless integration with external services to provide users with a modern and highly responsive platform.",
        image: '/blog-front.jpg',
        isPage: true,
        ref: 'https://github.com/MartinAbelRR/GO_BLOGFRONTEND',
        refPage: 'https://martinabelrr.github.io/GO_BLOGFRONTEND/',   
        technologies: [Javascript, React],
        title: "Frontend con React - Blog"
    },
    {
        id: '3',
        description: "Travel with Zerranosky is an innovative project that aims to provide students from all over the world with a comprehensive information platform about study opportunities in Russia. With an attractive frontend built in React, this website offers an interactive and user-friendly experience designed to help students explore the numerous educational options available in Russia.",
        image: '/rusia.jpg',
        isPage: true,
        ref: 'https://github.com/MartinAbelRR/RUSIA',
        refPage: 'https://martinabelrr.github.io/RUSIA/',
        technologies: [React, Typescript],
        title: "Frontend con React - Rusia"
    },
    {
        id: '4',
        description: "ReactTikTakTok Challenge is a challenging frontend project that takes the classic game of tic-tac-toe to new heights using React and TypeScript. The most remarkable thing about this project is that it was developed without consulting videos or receiving outside help, which shows my skill and creativity.",
        image: '/tik-tak-tok.png',
        isPage: true,
        ref: 'https://github.com/MartinAbelRR/TIK_TAK_TOK',
        refPage: 'https://martinabelrr.github.io/TIK_TAK_TOK/',
        technologies: [Javascript, React],
        title: "Frontend con React + TypeScript - TikTakTok"
    },
    {
        id: '5',
        description: "The DjangoReact CRUD System project is a complete web application that combines the power of the backend developed with Python and Django Rest Framework (DRF), and the frontend built with React. This system offers CRUD (Create, Read, Update, Delete) operations in an efficient way, providing a modern and functional user interface to manage data dynamically.",
        image: '/crud.png',
        isPage: false,
        ref: 'https://github.com/MartinAbelRR/CRUD_APP',        
        technologies: [Python, Javascript, React],
        title: "Backend + Frontend con Python y React - CRUD"
    }
]

