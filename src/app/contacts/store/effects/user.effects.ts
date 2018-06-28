import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { map, switchMap, mergeMap, catchError } from 'rxjs/operators';

import * as userActions from '../actions/user.actions';
import { UserService } from '../../services/user.service';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private userService: UserService) {}

  @Effect()
  loadSummary$: Observable<Action> = this.actions$
    .ofType(userActions.LOAD_SUMMARY)
    .pipe(
      switchMap(() => this.userService.getUsers()),
      mergeMap(users => [new userActions.LoadSummarySuccessAction(users)] ),
      catchError(error => {
        console.error(error);
        return of(new userActions.LoadDetailFailureAction());
      })
    );

  @Effect()
  loadDetail$: Observable<Action> = this.actions$
    .ofType<userActions.LoadDetailAction>(userActions.LOAD_DETAIL)
    .pipe(
      map(action => action.id),
      switchMap(id => this.userService.getUser(+id)),
      mergeMap(user => [new userActions.LoadDetailSuccessAction(user)] ),
      catchError(error => {
        console.error(error);
        return of(new userActions.LoadDetailFailureAction());
      })
    );
}
