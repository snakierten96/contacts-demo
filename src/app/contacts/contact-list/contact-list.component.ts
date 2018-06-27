import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../../model/user.model';
import * as fromStore from '../../shared/store';
import * as userActions from '../../shared/store/actions/users.actions';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  isLoading$: Observable<Boolean>;
  users$: Observable<User[]>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromStore.State>)
  {
    this.isLoading$ = store.select(fromStore.getUsersLoading);
    this.users$ = store.select(fromStore.getUsers);
  }

  ngOnInit() {
    this.store.dispatch(new userActions.LoadAction());
  }

}
