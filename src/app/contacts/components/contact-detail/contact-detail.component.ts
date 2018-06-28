import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { User } from '../../../models/user.model';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactDetailComponent {
  @Input() user: User;
  disabled = true;
}
