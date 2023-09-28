import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {
  imageName: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.imageName = params.get('imageName');
    });
  }
  isZoomed = false;

toggleZoom() {
  this.isZoomed = !this.isZoomed;
}

  closeLightbox() {
    this.router.navigate(['/']); // Navigate back to the certificate list
  }
}
