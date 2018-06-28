import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { reducers } from '../../store';
import { UserEffects } from '../../store/effects';

import { UserService } from '../../services/user.service';
import { UserListResolverService, UserResolverService} from '../../resolver';

import { ContactCardComponent } from '../../components/contact-card';
import { ContactListComponent } from './contact-list.component';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        StoreModule.forFeature('contacts', reducers),
        EffectsModule.forFeature([UserEffects]),
        FlexLayoutModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
      ],
      declarations: [ ContactCardComponent, ContactListComponent ],
      providers: [
        UserService,
        UserListResolverService,
        UserResolverService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
