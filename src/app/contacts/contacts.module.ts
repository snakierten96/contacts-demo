import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ContactsRoutingModule } from './contacts-routing.module';

import { reducers } from './store';
import { UserEffects } from './store/effects';

import { UserService } from './services/user.service';
import { UserListResolverService, UserResolverService} from './resolver';
import { containers } from './containers';
import { components } from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactsRoutingModule,
    StoreModule.forFeature('contacts', reducers),
    EffectsModule.forFeature([UserEffects]),
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [ ...containers, ...components ],
  providers: [
    UserService,
    UserListResolverService,
    UserResolverService
  ]
})
export class ContactsModule { }
