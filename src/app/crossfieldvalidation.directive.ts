import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup, AbstractControl } from '@angular/forms';


@Directive({
  selector: '[appCrossfieldvalidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CrossfieldvalidationDirective, multi: true }]
})



export class CrossfieldvalidationDirective implements Validator {
  @Input() appCrossfieldvalidation: string[] = [];
  validate(control: AbstractControl) {
    const password = control.get(this.appCrossfieldvalidation[0]);
    const confirmpassword = control.get(this.appCrossfieldvalidation[1]);
    if (!password || !confirmpassword) {
      return null;
    }
    if (confirmpassword.errors) {
      return null;
    }
    if (password.value !== confirmpassword.value) {
      confirmpassword.setErrors({ invalid: true });
    } else {
      confirmpassword.setErrors(null);
    }

  }



}
