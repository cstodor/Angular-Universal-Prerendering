import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, ContactComponent, AuthComponent]
})
export class UiModule { }
