import { User } from '../../models/user.model';

import {
  LoadSummaryAction,
  LOAD_SUMMARY,
  LoadSummarySuccessAction,
  LOAD_SUMMARY_SUCCESS,
  LoadSummaryFailureAction,
  LOAD_SUMMARY_FAILURE,
  LoadDetailAction,
  LOAD_DETAIL,
  LoadDetailSuccessAction,
  LOAD_DETAIL_SUCCESS,
  LoadDetailFailureAction,
  LOAD_DETAIL_FAILURE
} from './user.actions';

describe('LoadSummaryAction', () => {
  it('should create an action', () => {
    const action = new LoadSummaryAction();

    expect({ ...action }).toEqual({ type: LOAD_SUMMARY });
  });
});

describe('LoadSummarySuccessAction', () => {
  it('should create an action', () => {
    const users: Partial<User>[] = [
      {
        id: 1,
        name: 'Bill S. Preston',
        username: '@Trigger'
      },
      {
        id: 2,
        name: 'Ted Theodore Logan',
        username: '@Silver'
      }
    ];
    const action = new LoadSummarySuccessAction(users);

    expect({ ...action }).toEqual({
      type: LOAD_SUMMARY_SUCCESS,
      users
    });
  });
});

describe('LoadSummaryFailureAction', () => {
  it('should create an action', () => {
    const action = new LoadSummaryFailureAction();

    expect({ ...action }).toEqual({ type: LOAD_SUMMARY_FAILURE });
  });
});

describe('LoadDetailAction', () => {
  it('should create an action', () => {
    const id = 1;
    const action = new LoadDetailAction(id);

    expect({ ...action }).toEqual({ type: LOAD_DETAIL, id });
  });
});

describe('LoadDetailSuccessAction', () => {
  it('should create an action', () => {
    const user: User = {
      id: 1,
      name: 'Bill S Preston',
      username: '@Trigger',
      email: 'bill.s.preston@stalyns.example.org',
      address: {
        street: '',
        city: 'San Dimas',
        zipcode: '91773',
        geo: {
          lat: '34.102778',
          lng: '-117.816111'
        }
      },
      phone: '555-555-5555'
    };
    const action = new LoadDetailSuccessAction(user);
    expect({ ...action }).toEqual({
      type: LOAD_DETAIL_SUCCESS,
      user
    });
  });
});

describe('LoadDetailFailureAction', () => {
  it('should create an action', () => {
    const action = new LoadDetailFailureAction();
    expect({ ...action }).toEqual({ type: LOAD_DETAIL_FAILURE });
  });
});
