import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  constructor(
    private seoService: SeoService
  ) { }

  ngOnInit() {
    this.setMetaTags();
  }

  setMetaTags() {
    // Set SEO Meta Title
    this.seoService.setSeoMetaTags('Angular Universal Prerendering');

    // Set Twitter Meta Tags
    this.seoService.setTwitterMetaTags(
      'summary',
      '@cstodor',
      'Angular Universal Prerendering',
      'Server-rendered Home Page',
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg'
    );
  }

}
