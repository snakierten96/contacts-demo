import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { map, switchMap, mergeMap, catchError, withLatestFrom } from 'rxjs/operators';

import * as userDetailsActions from '../actions/user-details.action';
import { UserService } from '../../user.service';
import { State } from '../index';

@Injectable()
export class UserDetailsEffects {

  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private userService: UserService) {}

  @Effect()
  loadUser$: Observable<Action> = this.actions$
    .ofType(userDetailsActions.LOAD)
    .pipe(
      map((action: userDetailsActions.LoadAction) => action.id),
      switchMap(id => this.userService.getUser(id)),
      mergeMap(user => [ new userDetailsActions.LoadSuccessAction(user) ] ),
      catchError(error => {
        console.error(error);
        return of(new userDetailsActions.LoadFailureAction());
      })
    );
}
