import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { User } from '../model/user.model';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly endpoint = `${environment.api}/users`;

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.endpoint)
      .pipe(
        delay(1000),
        tap(x => console.log('fetched users', x))
      );
  }

  public getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.endpoint}/${id}`)
      .pipe(
        delay(1000),
        tap(x => console.log(`fetched user ${id}`, x))
      );
  }

  public getPostsByUser(id: number): Observable<Post[]> {
    const params = new HttpParams().set('userId', `${id}`);
    return this.http.get<Post[]>(`${this.endpoint}/posts`, { params })
      .pipe(
        delay(1000),
        tap(x => console.log(`get posts for user ${id}`, x ))
      );
  }
}
