import { Injectable } from '@angular/core';
import { PortfolioData } from '../models/portfolio.models';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private portfolioData: PortfolioData = {
    personalInfo: {
      name: 'Nkosinathi Tshaphile',
      role: 'Software Developer',
      location: 'Cape Town',
      email: 'tshaphilenkosinathi@gmail.com',
      phone: '+27 62 033 8048',
      linkedin: 'https://www.linkedin.com/in/nkosinathi-tshaphile',
      github: 'https://github.com/Inathi-M',
      leetcode: 'https://leetcode.com/Inathi-M'
    },
    stats: [
      { icon: '💼', title: 'Experience', value: '6+ months Freelance' },
      { icon: '🎓', title: 'Education', value: '3+ years at UCT' },
      { icon: '📁', title: 'Projects', value: '15+ Completed' }
    ],
    aboutDescription: `As a passionate software developer from Cape Town, I'm constantly learning and upskilling myself. I've been teaching myself a variety of programming languages such as JavaScript, C++, and Python, while also familiarizing myself with popular frameworks like Node.js, React, Springboot, and Angular. By building personal projects, I'm gaining practical experience and am determined to make myself an industry-ready software developer.`,
    skillCategories: [
      {
        title: 'Frontend Development',
        skills: [
          { name: 'HTML', level: 'Experienced' },
          { name: 'CSS', level: 'Intermediate' },
          { name: 'JavaScript', level: 'Experienced' },
          { name: 'React', level: 'Experienced' },
          { name: 'Angular', level: 'Experienced' },
          { name: 'Bootstrap', level: 'Experienced' }
        ]
      },
      {
        title: 'Backend Development',
        skills: [
          { name: 'Node.js', level: 'Basic' },
          { name: 'MongoDB', level: 'Basic' },
          { name: 'Python', level: 'Experienced' },
          { name: 'Java', level: 'Experienced' },
          { name: 'C++', level: 'Experienced' },
          { name: 'MySQL', level: 'Experienced' },
          { name: 'Git', level: 'Experienced' },
          { name: 'Springboot', level: 'Experienced' }
        ]
      }
    ],
    services: [
      {
        icon: '🎨',
        title: 'UI/UX Design',
        description: [
          'Experience using Adobe Photoshop for Image Editing and Logo Design.',
          'Designing logos and branding using MidJourney AI.',
          'Experience with designing prototypes using Figma, Invision and Sketch.',
          'Creating Low Fidelity prototypes with hand sketching.'
        ]
      },
      {
        icon: '📱',
        title: 'Mobile Development',
        description: [
          'Building and deploying mobile applications using Java in Android Studios.',
          'Building and deploying mobile applications using Python.',
          'Building and deploying mobile applications using Kotlin in Android Studios.',
          'Adding new features to existing mobile applications.'
        ]
      },
      {
        icon: '💻',
        title: 'Web Development',
        description: [
          'I built my websites using Visual Studio Code.',
          'Using React/Angular as frameworks to implement web applications.',
          'Using Javascript for FrontEnd development, along with CSS3 AND HTML5.',
          'Using MongoDB/MySql for Database Management.'
        ]
      }
    ],
    projects: [
      {
        image: 'assets/snake.png',
        title: 'Snake Game',
        description: 'This is a Snake Game created by C# in Visual Studio 2022. I really love this game and had fun making it.',
        githubUrl: 'https://github.com/Inathi-M/Portfolio-Website',
        demoUrl: 'https://youtu.be/bReGUCyiM-s'
      },
      {
        image: 'assets/typing-tutor.png',
        title: 'Typing Tutor',
        description: 'Created the Falling words game using Java and the concept of Parallel Programming.',
        githubUrl: 'https://github.com/Inathi-M/Typing-Tutor',
        demoUrl: 'https://youtu.be/vhUFP0zhwVo'
      },
      {
        image: 'assets/mean-filter.png',
        title: 'Image Filter',
        description: 'This application filters images using the principle of 2D filtering and parallel programming.',
        githubUrl: 'https://github.com/Inathi-M/Portfolio-Website'
      }
    ],
    courses: [
      {
        title: 'COMPUTER SCIENCE 1015 / PYTHON',
        description: 'This course is an introduction to problem solving, algorithm development and programming in the Python language. It includes fundamental programming constructs and abstractions, sorting and searching techniques, and machine representations of data.'
      },
      {
        title: 'COMPUTER SCIENCE 1016 / JAVA',
        description: 'This course builds on the foundation of CSC1015F, with a focus on object-oriented design and programming in Java, as well as introducing important considerations relating to ethical and professional issues.'
      },
      {
        title: 'MATHEMATICS 1004 / CALCULUS I',
        description: 'The aim of this course is to provide mathematics for applications, particularly in the Life and Earth sciences. The syllabus covers functions, derivatives, integrals, and differential equations.'
      },
      {
        title: 'INTRODUCTION TO DISCRETE MATHEMATICS',
        description: 'This course provides a foundation for Computer Science and Applied Statistics. Topics include set theory, logic, graph theory, and probability theory.'
      },
      {
        title: 'COMPUTER SCIENCE 2001 / DATA STRUCTURES AND DATABASES',
        description: 'This course covers abstract data types, recursive algorithms, tree structures, graph traversals, and database design. Practical programming in Java in a Unix environment is an important part of the course.'
      },
      {
        title: 'COMPUTER SCIENCE 2002 / PARALLEL PROGRAMMING',
        description: 'Topics include mobile application development, interface design, computer architecture and concurrent programming. Practical work in Java and assembler programming are included.'
      }
    ]
  };

  getPortfolioData(): PortfolioData {
    return this.portfolioData;
  }

  getPersonalInfo() {
    return this.portfolioData.personalInfo;
  }

  getStats() {
    return this.portfolioData.stats;
  }

  getAboutDescription() {
    return this.portfolioData.aboutDescription;
  }

  getSkillCategories() {
    return this.portfolioData.skillCategories;
  }

  getServices() {
    return this.portfolioData.services;
  }

  getProjects() {
    return this.portfolioData.projects;
  }

  getCourses() {
    return this.portfolioData.courses;
  }

  getWhatsAppLink(): string {
    const phone = this.portfolioData.personalInfo.phone.replace(/\s/g, '');
    return `https://api.whatsapp.com/send?phone=${phone}`;
  }
}
