import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromUser from '../reducers/user.reducer';

export const getUserState = createSelector(
  fromFeature.getContactsState,
  (state: fromFeature.ContactsState) => state.users
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
