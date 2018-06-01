import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ContactComponent implements OnInit {

  constructor(
    private seoService: SeoService
  ) { }

  ngOnInit() {
    this.setMetaTags();
  }

  setMetaTags() {
    // Set SEO Meta Title
    this.seoService.setSeoMetaTags('Contact');

    // Set Twitter Meta Tags
    this.seoService.setTwitterMetaTags(
      'summary',
      '@cstodor',
      'Contact',
      'Server-rendered Contact Page',
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg'
    );
  }

}
