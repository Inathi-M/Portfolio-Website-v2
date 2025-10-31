import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nkosinathi Tshaphile';
  
  // Personal Info
  name = 'Nkosinathi Tshaphile';
  role = 'Software Developer';
  location = 'Cape Town';
  email = 'tshaphilenkosinathi@gmail.com';
  phone = '+27 62 033 8048';
  
  // Social Links
  linkedin = 'https://www.linkedin.com/in/nkosinathi-tshaphile';
  github = 'https://github.com/Inathi-M';
  leetcode = 'https://leetcode.com/Inathi-M';
  
  // Stats
  experience = '6+ months';
  education = '3+ years at UCT';
  projectsCompleted = '15+';
  
  // About Description
  aboutDescription = `As a passionate software developer from Cape Town, I'm constantly learning and upskilling myself. I've been teaching myself a variety of programming languages such as JavaScript, C++, and Python, while also familiarizing myself with popular frameworks like Node.js, React, Springboot, and Angular. By building personal projects, I'm gaining practical experience and am determined to make myself an industry-ready software developer.`;
  
  // Method to get WhatsApp link
  getWhatsAppLink(): string {
    return `https://api.whatsapp.com/send?phone=${this.phone.replace(/\s/g, '')}`;
  }
}

