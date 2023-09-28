import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    
   
    {
      institute: 'Bharati Vidyapeeth Deemed University College Of Engineering,Pune',
      course: 'BTech in Electronics Engineering',
      duration: '2017-2021',
      score: '8.52 CGPA',
    },
    {
      institute: 'Bharati Vidyapeeth Deemed University College Of Engineering,Pune',
      course: 'Diploma in Network & Security',
      duration: '2017-2020',
      score: '7.80 CGPA',
    },
    {
      institute: 'Kendriya Vidyalaya Sangathan',
      course: 'Class XII',
      duration: '2016-2017',
      score: '80%',
    },
    {
      institute: 'Kendriya Vidyalaya Sangathan',
      course: 'Class X',
      duration: '2014-2015',
      score: '9.2 CGPA',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
