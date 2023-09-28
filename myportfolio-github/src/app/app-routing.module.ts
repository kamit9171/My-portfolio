import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateComponent } from './certificate/certificate.component';
import { LightboxComponent } from './lightbox/lightbox.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'certificate', component: CertificateComponent },
  { path: 'certificate/:imageName', component: LightboxComponent },// Example route
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
