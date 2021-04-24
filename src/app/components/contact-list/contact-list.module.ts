import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactListRoutingModule } from './contact-list-routing.module';
import { ContactListComponent } from './contact-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactListComponent],
  imports: [
    ContactListRoutingModule,
    CommonModule,
    FormsModule    
  ]
})
export class ContactListModule {
  constructor() {
    console.log('contact list module load');
  }
}
