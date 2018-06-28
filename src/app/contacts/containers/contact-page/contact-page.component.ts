import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';

import { User } from '../../models/user.model';

import * as fromStore from '../../store/index';
import * as userActions from '../../store/actions/user.actions';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit, OnDestroy {

  private subscription$: Subscription;
  isLoading$: Observable<Boolean>;
  user$: Observable<Partial<User>>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromStore.ContactsState>) { }

  ngOnInit() {
    this.user$ = this.store.select(fromStore.getSelectedUser);
    this.isLoading$ = this.store.select(fromStore.getUserLoading);

    this.subscription$ = this.route.params.subscribe(({ id }) =>
      this.store.dispatch(new userActions.LoadDetailAction(+id))
    );
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
