import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../../model/user.model';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  user$: Observable<User>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user$ = this.route.data.pipe( map(({ user }) => user) );
  }

}
