import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';

@Component({
  selector: 'app-mock',
  template: ''
})
class MockComponent {}

const routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/users'
  },
  {
    path: 'users',
    component: MockComponent
  }
];

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        MatListModule,
        MatProgressBarModule,
        MatCardModule
      ],
      declarations: [
        AppComponent,
        MockComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const router: Router = TestBed.get(Router);
    const location: Location = TestBed.get(Location);
    const fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();

    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const router: Router = TestBed.get(Router);
    const location: Location = TestBed.get(Location);
    const fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();

    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('My App');
  }));
});
