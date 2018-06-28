import { createEntityAdapter, EntityState } from '@ngrx/entity';

import { User } from '../../models/user.model';
import * as actions from '../actions/user.actions';

export const userAdaptor = createEntityAdapter<Partial<User>>({
  sortComparer: (a, b) => a.id - b.id
});

export interface State extends EntityState<Partial<User>> {
  selectedUserId: number;
  loading: boolean;
  failed: boolean;
}

export const initialState: State = userAdaptor.getInitialState({
  selectedUserId: null,
  loading: false,
  failed: false
});

export function reducer(state: State = initialState, action: actions.UserActions): State {

  switch (action.type) {

    case actions.ADD:
      return userAdaptor.addOne(action.payload, state);

    case actions.UPDATE:
      return userAdaptor.updateOne({
        id: action.id,
        changes: action.payload
      }, state);

    case actions.LOAD_SUMMARY:
      return {
        ...state,
        loading: true
      };

    case actions.LOAD_SUMMARY_SUCCESS:
      return userAdaptor.addMany(
        action.users,
        {
          ...state,
          loading: false,
          failed: false
        }
      );

    case actions.LOAD_SUMMARY_FAILURE:
      return {
        ...state,
        loading: false,
        failed: true
      };

    case actions.LOAD_DETAIL:
      return {
        ...state,
        selectedUserId: action.id,
        loading: true
      };

    case actions.LOAD_DETAIL_SUCCESS:
      if (!!state.entities[action.user.id]) {
        return userAdaptor.updateOne(
          {
            id: action.user.id,
            changes: action.user
          },
          {
            ...state,
            loading: false,
            failed: false
          }
        );
      }
      return userAdaptor.addOne(
        action.user,
        {
          ...state,
          loading: false,
          failed: false
        }
      );

    case actions.LOAD_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        failed: true
      };

    default:
      return state;
  }

}

export const getSelectedId = (state: State) => {
  console.log({ state });
  return state.selectedUserId;
};

export const getLoading = (state: State) => state.loading;
export const getFailed = (state: State) => state.failed;
