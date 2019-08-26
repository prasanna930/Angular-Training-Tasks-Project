import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {
// environment
envName = environment.name;

  empDetails = this.fb.group({
    id: [''],
    name: [''],
    address: this.fb.array([
      this.addaddress()
    ])
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  addaddress(): FormGroup {
    return this.fb.group({
      state: [''],
      city: [''],
      zipcode: ['']
    });
  }
  addListItem() {
    const control = this.empDetails.controls.address as FormArray;
    control.push(this.addaddress());
  }
  DeleteListItem() {
    const control1 = this.empDetails.controls.address as FormArray;
    console.log(control1);
  }
}
