import { Action } from '@ngrx/store';

import { User } from '../../../models/user.model';

export const LOAD_SUMMARY = '[User] Load summary';
export const LOAD_SUMMARY_SUCCESS = '[User] Load summary success';
export const LOAD_SUMMARY_FAILURE = '[User] Load summary failure';
export const LOAD_DETAIL = '[User] Load detail';
export const LOAD_DETAIL_SUCCESS = '[User] Load detail success';
export const LOAD_DETAIL_FAILURE = '[User] Load detail failure';

export const ADD = '[User] Add';
export const UPDATE = '[User] Update';

export class AddAction implements Action {
  readonly type = ADD;
  constructor(public payload: Partial<User>) {}
}

export class UpdateAction implements Action {
  readonly type = UPDATE;
  constructor(public id: number, public payload: Partial<User>) {}
}

export class LoadSummaryAction implements Action {
  readonly type = LOAD_SUMMARY;
}

export class LoadSummarySuccessAction implements Action {
  readonly type = LOAD_SUMMARY_SUCCESS;
  constructor(public users: Partial<User>[]) {}
}

export class LoadSummaryFailureAction implements Action {
  readonly type = LOAD_SUMMARY_FAILURE;
}

export class LoadDetailAction implements Action {
  readonly type = LOAD_DETAIL;
  constructor(public id: number) {}
}

export class LoadDetailSuccessAction implements Action {
  readonly type = LOAD_DETAIL_SUCCESS;
  constructor(public user: User) {}
}

export class LoadDetailFailureAction implements Action {
  readonly type = LOAD_DETAIL_FAILURE;
}

export type UserActions
  = AddAction
  | UpdateAction
  | LoadSummaryAction
  | LoadSummarySuccessAction
  | LoadSummaryFailureAction
  | LoadDetailAction
  | LoadDetailSuccessAction
  | LoadDetailFailureAction;
