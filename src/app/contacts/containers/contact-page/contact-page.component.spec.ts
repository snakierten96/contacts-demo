import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { Action, Store } from '@ngrx/store';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ContactDetailComponent } from '../../components/contact-detail';
import { ContactPageComponent } from './contact-page.component';

import * as fromStore from '../../store';
import { User } from '../../models/user.model';

import { Subject, of } from 'rxjs';

function mockStore<T>({
  actions = new Subject<Action>(),
  states = new Subject<T>()
}: {
  actions?: Subject<Action>,
  states?: Subject<T>
}): Store<T> {
  const result = states as any;
  result.dispatch = (action: Action) => actions.next(action);
  result.select = () => undefined;
  return result;
}


const routes: Routes = [
  { path: ':id', component: ContactPageComponent }
];

describe('ContactPageComponent', () => {
  let component: ContactPageComponent;
  let fixture: ComponentFixture<ContactPageComponent>;

  let actions: Subject<Action>;
  let states: Subject<fromStore.ContactsState>;
  let _store: Store<fromStore.ContactsState>;

  const user: User = {
    id: 1,
    name:  'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496'
      }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  };

  beforeEach(async(() => {

    actions = new Subject<Action>();
    states = new Subject<fromStore.ContactsState>();
    _store = mockStore<fromStore.ContactsState>({ actions, states });

    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        FormsModule,
        RouterTestingModule.withRoutes(routes),
        FlexLayoutModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule
      ],
      declarations: [ ContactDetailComponent, ContactPageComponent ],
      providers: [
        { provide: Store, useValue: _store }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPageComponent);
    const store = TestBed.get(Store);
    spyOn(store, 'select').and.callFake(() => of(user));

    component = fixture.componentInstance;
    component.user$ = of(user);
    fixture.detectChanges();
    component.isLoading$ = of(false);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
