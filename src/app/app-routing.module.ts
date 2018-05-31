import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './ui/home/home.component';
import { AuthComponent } from './ui/auth/auth.component';
import { ContactComponent } from './ui/contact/contact.component';
import { FruitsComponent } from './ui/fruits/fruits.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'authentication', component: AuthComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'fruits', component: FruitsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
