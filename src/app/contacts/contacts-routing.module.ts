import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactListComponent, ContactPageComponent } from './containers';

import { UserListResolverService, UserResolverService } from './resolver';

const routes: Routes = [
  {
    path: '',
    component: ContactListComponent,
    /*
    resolve: {
      users: UserListResolverService
    }
    */
  },
  {
    path: ':id',
    component: ContactPageComponent,
    /*
    resolve: {
      user: UserResolverService
    }
    */
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
