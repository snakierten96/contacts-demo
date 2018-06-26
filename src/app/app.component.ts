import { Component, HostListener } from '@angular/core';

interface INavItem {
  path: String;
  name: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My App';
  scrolling = false;
  progressMode = 'determinate';
  navItems: INavItem[] = [
    {
      path: '/users',
      name: 'Users'
    }
  ];

  @HostListener('window:scroll', ['$event']) onscroll($event) {
    if (window.scrollY === 0) {
      this.scrolling = false;
    } else {
      this.scrolling = true;
    }
  }
}
