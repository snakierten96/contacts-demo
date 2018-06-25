import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';

import { UserListResolverService, UserResolverService} from './resolver';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule
  ],
  declarations: [
    ContactListComponent,
    ContactPageComponent
  ],
  providers: [
    UserListResolverService,
    UserResolverService
  ]
})
export class ContactsModule { }
