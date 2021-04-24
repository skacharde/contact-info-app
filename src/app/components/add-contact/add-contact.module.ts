import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddContactRoutingModule } from './add-contact-routing.module';
import { AddContactComponent } from './add-contact.component';


@NgModule({
  declarations: [AddContactComponent],
  imports: [
    CommonModule,
    AddContactRoutingModule
  ]
})
export class AddContactModule {
  constructor(){
    console.log('add contact module load');
  }
 }
