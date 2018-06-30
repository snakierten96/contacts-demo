import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService } from './user.service';
import { User } from '../models/user.model';

describe('UserService', () => {

  let userService: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [UserService]
    });
    userService = TestBed.get(UserService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getUsers', () => {
    it('should return an Observable<User[]>', () => {
      const dummyUsers: Partial<User>[] = [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret'
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette'
        },
        {
          id: 3,
          name: 'Clementine Bauch',
          username: 'Samantha'
        },
        {
          id: 4,
          name: 'Patricia Lebsack',
          username: 'Karianne'
        },
        {
          id: 5,
          name: 'Chelsey Dietrich',
          username: 'Kamren'
        },
        {
          id: 6,
          name: 'Mrs. Dennis Schulist',
          username: 'Leopoldo_Corkery'
        },
        {
          id: 7,
          name: 'Kurtis Weissnat',
          username: 'Elwyn.Skiles'
        },
        {
          id: 8,
          name: 'Nicholas Runolfsdottir V',
          username: 'Maxime_Nienow'
        },
        {
          id: 9,
          name: 'Glenna Reichert',
          username: 'Delphine'
        },
        {
          id: 10,
          name: 'Clementina DuBuque',
          username: 'Moriah.Stanton'
        }
      ];

      userService.getUsers().subscribe((users: ArrayLike<User> ) => {
        expect(users.length).toBe(10);
        expect(users).toEqual(<ArrayLike<User>>dummyUsers);
      });

      const req = httpMock.expectOne(`${userService.endpoint}`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyUsers);

    });
  });

});
