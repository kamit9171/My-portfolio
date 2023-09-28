import { Component, OnInit } from '@angular/core';
import { Certificate } from '../models/models';

@Component({
  selector: 'certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {
    certificate: Certificate[] = [
      {
        name: 'Java FullStack Developer',
        level: 'Intermidiate',
        imageName: 'fullstack.png'
        
      },
      {
        name: 'SpringBoot L1&L2',
        level: 'Expert',
        imageName: 'springl.png',
        
      },
      {
        name: 'ReactJs',
        level: 'Expert',
        imageName: 'Reactjs.png'
       
      },
      
      {
        name: 'Microsoft-Azure Fundamental (AZ900)',
        level: 'Intermidiate',
        imageName: 'AzureData.png'
      
      },
      {
        name: 'Platform Developer(PL900)',
        level: 'Intermidiate',
        imageName: 'Azurepower.png'
      
      },
      {
        name: 'Google-Cloud Admin, Associate Google Cloud,GCRP',
        level: 'H2 ,MySql,PostgreSQL',
        imageName: 'GCP.png'
        
      },
      
    ];
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
