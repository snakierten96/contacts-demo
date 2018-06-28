import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { User } from '../../../models/user.model';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactCardComponent {
  @Input() user: User;
}
