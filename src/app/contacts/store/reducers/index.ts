import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromUser from './user.reducer';

export interface ContactsState {
  users: fromUser.State;
}

export const reducers: ActionReducerMap<ContactsState> = {
  users: fromUser.reducer,
};

export const getContactsState = createFeatureSelector<ContactsState>('contacts');
