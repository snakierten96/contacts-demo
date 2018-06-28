import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ContactsRoutingModule } from './contacts-routing.module';

import { UserListResolverService, UserResolverService} from './resolver';
import { containers } from './containers';
import { components } from './components';

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
  declarations: [ ...containers, ...components ],
  providers: [
    UserListResolverService,
    UserResolverService
  ]
})
export class ContactsModule { }
