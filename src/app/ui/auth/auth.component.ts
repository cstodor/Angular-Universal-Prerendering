import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AuthComponent implements OnInit {

  constructor(
    private seoService: SeoService
  ) { }

  ngOnInit() {
    this.setMetaTags();
  }

  setMetaTags() {
    // Set SEO Meta Title
    this.seoService.setSeoMetaTags('Authentication');

    // Set Twitter Meta Tags
    this.seoService.setTwitterMetaTags(
      'summary',
      '@cstodor',
      'Authentication',
      'Server-rendered Authentication Page',
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg'
    );
  }



}
