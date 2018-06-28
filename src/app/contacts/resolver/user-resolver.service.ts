import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';

import { Observable, empty } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from '../models';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<User> {

  constructor(private service: UserService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    const id = route.paramMap.get('id');
    return this.service.getUser(+id).pipe(
      catchError( err => {
        console.error(err);
        this.router.navigate(['/']);
        return empty();
      })
    );
  }
}
