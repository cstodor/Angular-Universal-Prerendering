import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  fruits: Observable<{}[]>;

  constructor(
    fsDb: AngularFirestore
  ) {
    this.fruits = fsDb.collection('fruits').valueChanges();
    this.fruits.subscribe(fruitsRes => {
      console.log(fruitsRes);
    });
  }

  ngOnInit() {
  }

}
