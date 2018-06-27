import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../../model/user.model';

import * as fromStore from '../../shared/store';
import * as userDetailsActions from '../../shared/store/actions/user-details.action';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  private subscription$: Subscription;
  isLoading$: Observable<Boolean>;
  user$: Observable<User>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromStore.State>)
  {
    this.user$ = this.store.select(fromStore.getUserDetails);
    this.isLoading$ = this.store.select(fromStore.getUserDetailsLoading);
  }

  ngOnInit() {
    this.subscription$ = this.route.params.subscribe(({ id }) =>
      this.store.dispatch(new userDetailsActions.LoadAction(+id))
    );
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
