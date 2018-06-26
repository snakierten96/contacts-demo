import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ContactsRoutingModule } from './contacts-routing.module';

import { UserListResolverService, UserResolverService} from './resolver';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactsRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    ContactListComponent,
    ContactPageComponent,
    ContactCardComponent,
    ContactDetailComponent
  ],
  providers: [
    UserListResolverService,
    UserResolverService
  ]
})
export class ContactsModule { }
