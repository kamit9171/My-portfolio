import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Intermidiate',
      rating: 85,
    },
    {
      name: 'Spring Framework',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'J2EE',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'C++',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'Database',
      level: 'H2 ,MySql,PostgreSQL',
      rating: 90,
    },
    {
      name: 'API Testing',
      level: 'Postman,Tosca Automation Testing',
      rating: 100,
    },
    {
      name: 'DevOps Tools',
      level: 'Docker,Kubernetes,Jenkin,Git,CI/CD',
      rating: 100,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
