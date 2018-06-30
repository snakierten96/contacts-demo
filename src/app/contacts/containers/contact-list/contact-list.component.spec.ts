import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { Action, Store } from '@ngrx/store';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ContactCardComponent } from '../../components/contact-card';
import { ContactListComponent } from './contact-list.component';

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


describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  let actions: Subject<Action>;
  let states: Subject<fromStore.ContactsState>;
  let _store: Store<fromStore.ContactsState>;

  const routes: Routes = [
    {
      path: '',
      component: ContactListComponent,
    }
  ];

  const users: Partial<User>[] = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton'
    }
  ];

  beforeEach(async(() => {

    actions = new Subject<Action>();
    states = new Subject<fromStore.ContactsState>();
    _store = mockStore<fromStore.ContactsState>({ actions, states });

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes(routes),
        FlexLayoutModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
      ],
      declarations: [ ContactCardComponent, ContactListComponent ],
      providers: [
        { provide: Store, useValue: _store },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {


    fixture = TestBed.createComponent(ContactListComponent);
    const store = TestBed.get(Store);
    spyOn(store, 'select').and.callFake(() => of(users));

    component = fixture.componentInstance;
    component.users$ = of(users);
    fixture.detectChanges();
    component.isLoading$ = of(false);
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy() );

  it('should have users', () =>
    expect(component.users$).toBeDefined()
  );

  it('should have expected users', async(() =>
    component.users$.toPromise().then( _users =>
      expect(_users).toBe(users)
    )
  ));
});
