import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { User } from '../../models/user.model';
import * as fromStore from '../../store/';
import * as userActions from '../../store/actions/user.actions';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  isLoading$: Observable<Boolean>;
  users$: Observable<Partial<User>[]>;

  constructor(private store: Store<fromStore.ContactsState>) { }

  ngOnInit() {
    this.isLoading$ = this.store.select(fromStore.getUserLoading);
    this.users$ = this.store.select(fromStore.selectAll);

    this.store.dispatch(new userActions.LoadSummaryAction());
  }

}
