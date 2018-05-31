import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  fruits: Observable<{}[]>;

  constructor(
    private fsDb: AngularFirestore,
    private seoService: SeoService
  ) { }

  ngOnInit() {

    // Get the Fruits from database
    this.fruits = this.fsDb.collection('fruits').valueChanges();

    // Set SEO Meta Title
    this.seoService.setSeoMetaTags('Fruits List');

    // Set Twitter Meta Tags
    this.seoService.setTwitterMetaTags(
      'summary',
      '@cstodor',
      'Angular Firestore Fruits',
      'Server-rendered list of fruits from Cloud Firestore in Angular',
      'https://unsplash.com/photos/MZSJWo6C4Lg'
    );

  }

}
