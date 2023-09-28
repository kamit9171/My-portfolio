import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Amit kumar'],
    ['DOB', '05/01/1999'],
    ['Work Exp', '1 Years 10 Month'],
    ['Education', 'B.Tech (2021)'],
    ['Interests', 'Calisthenics'],
  ];

  aboutMe: string[] = [
    'I am an ambitious and dedicated Developer with 1 year and 10 months of professional experience in the technology industry.',
    'I began my career at Wipro, where I served as a Developer L1 on a project for T-Mobile. During this period, I honed my skills in utilizing the Spring Framework to develop various features and functionalities, gaining invaluable experience along the way.',
    'Following my tenure at Wipro, I joined UnitedHealth Group as a Developer L2 within the Optum healthcare division. Here, I continued to elevate my expertise, working extensively with the Spring Boot and Angular frameworks to develop and maintain robust software applications.',
    'With nearly two years of hands-on experience in software development, I have built a solid foundation and gained comprehensive exposure to various facets of the industry. My passion for technology drives me to stay up-to-date with the latest advancements and continue to grow as a Developer.'
];


  constructor() {}

  ngOnInit(): void {}
}
