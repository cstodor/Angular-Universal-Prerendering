import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AuthComponent } from './auth/auth.component';
import { FruitsComponent } from './fruits/fruits.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PrimaryMenuComponent } from './shared/primary-menu/primary-menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HomeComponent,
    ContactComponent,
    AuthComponent,
    FruitsComponent,
    HeaderComponent,
    FooterComponent,
    PrimaryMenuComponent
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class UiModule { }
