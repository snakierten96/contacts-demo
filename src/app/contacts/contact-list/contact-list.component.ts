import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.users$ = this.route.data.pipe( map(({ users }) => users) );
  }

}
