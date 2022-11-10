import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';
import { createPasswordStrengthValidator } from './password-strength-validator';



@Directive({
  selector: '[passwordStrength]',
  providers: [
    {
      provide:NG_VALIDATORS,
      useExisting: PasswordStrengthDirective,
      multi: true

    }
  ]
})
export class PasswordStrengthDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    console.log(control.value)
    return createPasswordStrengthValidator()(control);
  }
}
