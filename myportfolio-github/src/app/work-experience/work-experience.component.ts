import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Java Developer->Backend Developer->Java Full Stack Developer',
      company: 'Wipro Limited',
      duration: 'Nov 2021 - Now',
      description: [
        'Started my career as a Developer L1 at Wipro, working on a project for T-Mobile.',
        'Focused on utilizing the Spring Framework to develop various features and functionalities.',
        'Gained valuable experience in software development using <strong><u>Java</u></strong> and related technologies.',
        'Completed the project at T-Mobile after 9 months, marking the successful beginning of my career.',
        'Continued my journey by joining UnitedHealth Group as a Developer L2 within the Optum healthcare division.',
        'Transitioned into a <strong><u>Java Backend Developer</u></strong> role, where I delved deeper into backend technologies and solutions.',
        'Leveraged the <strong><u>Spring Boot</u></strong> framework to develop robust backend systems and services.',
        'Worked closely with cross-functional teams and actively participated in agile ceremonies to enhance collaboration and delivery.',
        'Evolved further into a <strong><u>Java Full Stack Developer</u></strong>, expanding my skillset to include frontend development with <strong><u>Angular</u></strong>.',
        'Developed and maintained end-to-end software applications, gaining a comprehensive understanding of the entire stack.',
        'My journey continues as I remain committed to further growth and innovation in the world of full-stack development.'
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  boldUnderlineText(description: string): string {
    const words = description.split(' ');
    const formattedWords = words.map(word => `<strong><u>${word}</u></strong>`);
    return formattedWords.join(' ');
  }
}
