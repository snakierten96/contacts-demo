import * as fromUsers from './user.reducer';
import * as fromActions from '../actions/user.actions';

import { User } from '../../models/user.model';

describe('UsersReducer', () => {

  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromUsers;
      const action = { type: undefined };
      const state = fromUsers.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('LOAD_SUMMARY action', () => {
    it('should should set loading to true', () => {
      const { initialState } = fromUsers;
      const action = new fromActions.LoadSummaryAction();
      const state = fromUsers.reducer(initialState, action);

      expect(state.loading).toEqual(true);
      expect(state.failed).toEqual(false);
    });

  });

});
