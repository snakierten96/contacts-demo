import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { switchMap, mergeMap, catchError, withLatestFrom } from 'rxjs/operators';

import * as userActions from '../actions/users.actions';
import { UserService } from '../../user.service';
import { State, getUsers } from '../index';

@Injectable()
export class UsersEffects {

  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private userService: UserService) {}

  @Effect()
  loadUsers$: Observable<Action> = this.actions$
    .ofType(userActions.LOAD)
    .pipe(
      /*
      withLatestFrom(
        this.store.select(getUsers),
        (action: any, store: State) => store.users
      ),
      */
      switchMap(() => this.userService.getUsers() ),
      mergeMap(users => [ new userActions.LoadSuccessAction(users) ] ),
      catchError(error => {
        console.error(error);
        return of(new userActions.LoadFailureAction());
      })
    );
}
