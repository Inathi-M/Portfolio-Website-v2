import { Component } from '@angular/core';

interface CompanyRole {
  company: string;
  role: string;
  duration: string;
  highlights: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  skills: string[] = [
    'Angular',
    'TypeScript',
    '.NET Core',
    'Claude Code (Sonnet, Opus, Haiku)',
    'Azure DevOps',
    'SQL',
    'React',
    'Node.js',
    'CI/CD Pipelines',
    'Copilot'
  ];

  companies: CompanyRole[] = [
    {
      company: 'LexisNexis Shared Services',
      role: 'Software Engineer II',
      duration: 'Oct 2024 - Present',
      highlights: [
        'Building and maintaining global AI assistants that handle corporate HR questions, powered by Claude Code (Sonnet, Opus & Haiku).',
        'Shipping Angular and .NET Core features through Azure DevOps CI/CD pipelines.'
      ]
    },
    {
      company: 'EasyHQ',
      role: 'Junior Software Engineer',
      duration: 'Feb 2024 - Oct 2024',
      highlights: [
        'Grew the HR automation AI assistant platform to handle a wider range of corporate HR questions.',
        'Worked across the stack with TypeScript, SQL and CI/CD pipelines to ship reliably.'
      ]
    },
    {
      company: 'EOH Holdings',
      role: 'Intern Software Engineer',
      duration: 'Aug 2023 - Feb 2024',
      highlights: [
        'Built Angular front ends backed by C#, .NET Core and PHP services.',
        'Automated reporting with Power BI and JSON, deployed through Azure DevOps CI/CD.'
      ]
    },
    {
      company: 'LexisNexis Shared Services',
      role: 'Intern Software Engineer',
      duration: 'Jul 2022 - Aug 2023',
      highlights: [
        'First internship - learned the fundamentals of Angular and .NET development.'
      ]
    }
  ];
}
