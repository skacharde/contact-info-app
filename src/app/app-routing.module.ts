import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'contact-list',loadChildren:()=>import('./components/contact-list/contact-list.module').then(m=>m.ContactListModule)},
  {path:'add-contact',loadChildren:()=>import('./components/add-contact/add-contact.module').then(m=>m.AddContactModule)},
  {path:'',redirectTo:'contact-list',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
