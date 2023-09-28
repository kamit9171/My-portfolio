import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Employee Management Application with Jwt',
      technologies: 'Angular, Spring Boot,JWT,HS-256,Postgresql',
      description: [
        'Implemented a JWT (JSON Web Token) authentication system for secure CRUD (Create, Read, Update, Delete) operations within the admin dashboard. ',
        'This added an extra layer of security by ensuring that only authorized users could perform these actions on user accounts and song data.',
        ' The JWT token was utilized to authenticate and authorize requests, providing a secure and efficient way to handle user permissions and access control.',
      

        'User registration and profile management are seamlessly integrated, allowing employees to create accounts and maintain their profiles effortlessly. ', 'Passwords are stored securely using advanced hashing techniques, safeguarding user credentials.',

        'Additionally, audit logging keeps a watchful eye on user activities, providing valuable insights into application usage.', ' Its user-friendly interface, adaptable to various devices, enhances accessibility. ', 'Data validation and error handling mechanisms ensure data accuracy and a smooth user experience.',

        'The application versatility extends to external system integration, making it compatible with email services for notifications and other HR systems for synchronized data.', ' Robust reporting and analytics empower administrators with essential insights into employee performance and organizational trends.',

        'Furthermore, the application is designed for deployment on scalable infrastructure, accommodating growing user demands and data requirements while maintaining a high level of security and user satisfaction.',
      ],
      githubLink: 'https://github.com/kamit9171/Employee-Management-system-with-jwt-frontend-and-backend.',
      projectLink: 'https://employee-jwt.netlify.app/',
    },
    {
      title: 'Employee Management Application with Json-Server',
      technologies: 'Angular,Mat,Toster,FontAwesome,Json-Server',
      description: [
        'The Employee Management System is a modern web application developed using Angular, Angular Material, Toaster, and Font Awesome. ',
        'It simplifies the often complex task of managing employee data by providing a user-friendly interface for administrators. With this system, you can effortlessly add, edit, delete, and view employee information.',


        'The application incorporates Angular Material components, ensuring a polished and responsive design.',
        ' Toaster notifications provide real-time feedback on successful operations, enhancing the user experience.',
        ' Font Awesome icons are seamlessly integrated into the user interface, contributing to its visual appeal.',

        'What sets this system apart is its deployment strategy. The frontend is hosted on Netlify, a robust platform for web application deployment, ensuring accessibility to users. The backend, powered by JSON Server, is deployed on Render, offering reliable data storage and retrieval.',

        'In summary, the Employee Management System combines a user-friendly interface with modern technologies and deployment practices, making it a valuable tool for efficient employee data management.',
      ],
      githubLink: 'https://github.com/kamit9171/EmployeeManagementSystem_with_Json-Server',
      projectLink: 'https://employeemanagement-kamit9171.netlify.app/',
    },
    {
      title: 'Song Application with Fontend & Backend',
      technologies: 'Angular, Spring Boot,H2,MySQL,Docker,Netlify,Railway',
      description: [
        'The application serves as a comprehensive platform for performing CRUD (Create, Read, Update, Delete) operations seamlessly between the backend and frontend.',
        'It empowers users to manage their music collections effortlessly, from adding and editing songs to searching for specific tracks and creating custom playlists.',
        ' The integration of Angular on the frontend and Spring Boot on the backend ensures a smooth and secure experience, making it easy for users to interact with their music catalog.',
        ' With its ability to handle CRUD operations efficiently, this application provides a powerful tool for music enthusiasts to organize and enjoy their favorite tunes.',
      ],
      githubLink: 'https://github.com/kamit9171/song_Application_With_Angular_and_Springboot',
      projectLink: 'https://song-application-kamit9171.netlify.app/',
    },

    {
      title: 'Online Retail Store',
      technologies: 'Spring Boot, Netflix Zuul,Netflix Eureka,H2,Swagger,Jenkins, GitLab CI/CD, Kubernetes ',
      description: [
        'In this team-based project with four members, each member is responsible for building a specific service as part of the capstone project. At the end of the development phase, one member will be assigned the task of integrating all the individual services together.',
        'we also integrated other services such as Eureka for service discovery, Config Server for centralized configuration management, Cloud Gateway for API gateway functionality, Composite Microservice for aggregating data from multiple services, Hystrix for fault tolerance, and ensuring the system resilience',
        'Once the integration is complete, we perform testing using Postman, a popular API testing tool. This testing phase aims to validate the functionality and interoperability of the integrated services, ensuring that they work harmoniously together.',
      ],
      githubLink: 'https://github.com/kamit9171/Ecom1',
      projectLink: 'https://github.com/kamit9171/Ecom1',
    },
    {
      title: 'Customer Account Tracker',
      technologies: 'Springboot,Hibernate,Serverlet JSP,JPA,MySql',
      description: [
        'In this project, the main objective is to build a Customer Account system that allows performing CRUD operations (Create, Read, Update, Delete) on customer accounts. The system will be developed using the Spring framework and its annotations, which provide a simplified way to handle various aspects of the application',
        'To ensure the functionality and correctness of the CRUD operations, testing will be conducted using Postman. Postman is a popular tool that allows developers to test API endpoints by sending requests and verifying the responses. This will ensure that the Customer Account system works as intended and provides the expected behavior for each CRUD operation.',
      ],
      githubLink: 'https://github.com/kamit9171/Customer-Account-Tracker',
      projectLink: 'https://yourwebsite.com/song-app',
    },
  ];
  constructor() { }

  ngOnInit(): void { }
}
