import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PasswordStrengthDirective } from '../../helpers/password.directive';

@Component({
  selector: 'hs-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigninComponent {

}
