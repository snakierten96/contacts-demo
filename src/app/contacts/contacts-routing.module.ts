import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

import { UserListResolverService, UserResolverService } from './resolver';

const routes: Routes = [
  {
    path: '',
    component: ContactListComponent,
    resolve: {
      users: UserListResolverService
    }
  },
  {
    path: ':id',
    component: ContactPageComponent,
    resolve: {
      user: UserResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
