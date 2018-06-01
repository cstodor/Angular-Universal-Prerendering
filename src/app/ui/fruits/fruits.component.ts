import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

import { tap, startWith } from 'rxjs/operators';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { SeoService } from '../../core/services/seo.service';

const DATA = makeStateKey<any>('fruits');

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class FruitsComponent implements OnInit {

  fruits$;

  constructor(
    private fsDb: AngularFirestore,
    private seoService: SeoService,
    private state: TransferState, // Required for Data Rendered from Server or API
  ) { }

  ngOnInit() {
    // Set Meta Tags
    this.setMetaTags();

    // If state is available, start with it your observable
    const exists = this.state.get(DATA, [] as any);

    // Get the animals from the database
    this.fruits$ = this.fsDb.collection('fruits').valueChanges()

      .pipe(
        tap(list => {
          this.state.set(DATA, list);
        }),
        startWith(exists)
      );
  }

  setMetaTags() {
    // Set SEO Meta Title
    this.seoService.setSeoMetaTags('Fruits List');
    // this.title.setTitle('Fruits List');

    // Set Twitter Meta Tags
    this.seoService.setTwitterMetaTags(
      'summary',
      '@cstodor',
      'Angular Firestore Fruits',
      'Server-rendered list of fruits from Cloud Firestore in Angular',
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg'
    );
    // this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    // this.meta.updateTag({ name: 'twitter:site', content: '@cstodor' });
    // this.meta.updateTag({ name: 'twitter:title', content: 'Angular Firestore Fruits' });
    // this.meta.updateTag({ name: 'twitter:description', content: 'Server-rendered list of fruits from Cloud Firestore in Angular' });
    // this.meta.updateTag({
    //   name: 'twitter:image',
    //   content: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg'
    // });
  }

}
