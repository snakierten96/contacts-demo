import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUser from './reducers/user.reducer';

export interface State {
  users: fromUser.State;
}

export const reducers = {
  users: fromUser.reducer
};

export const getFeatureState = createFeatureSelector<State>('contacts');
export const getUserState = createSelector(
  getFeatureState,
  (state: State) => state.users
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = fromUser.userAdaptor.getSelectors(getUserState);

export const getSelectedUserId = createSelector(
  getUserState,
  fromUser.getSelectedId
);

export const getSelectedUser = createSelector(
  selectEntities,
  getSelectedUserId,
  (entities, selectedId) => {
    console.log({ entities, selectedId });
    return selectedId && entities[selectedId];
  }
);

export const getUserLoading = createSelector(getUserState, fromUser.getLoading);
export const getUserFailed = createSelector(getUserState, fromUser.getFailed);
