import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-multiplecheckboxes',
  templateUrl: './multiplecheckboxes.component.html',
  styleUrls: ['./multiplecheckboxes.component.scss']
})
export class MultiplecheckboxesComponent implements OnInit {
  form: FormGroup;
  controls: any;
  checked: boolean = false;
  orders = [
    { id: 1, name: 'java' },
    { id: 2, name: 'spring' },
    { id: 3, name: 'springcore' },
    { id: 4, name: 'springboot' },
    { id: 5, name: 'springmvc' },
    { id: 6, name: 'springbatch' },
    { id: 7, name: 'database' },
    { id: 8, name: 'angular' }
  ];
  constructor(private fb: FormBuilder) {
    this.controls = this.orders.map(c => new FormControl(false));
    this.controls[0].setValue(true);
    this.controls[6].setValue(true);
    this.controls[2].setValue(true);
    this.form = this.fb.group({
      orders: new FormArray(this.controls)
    });
  }

  ngOnInit() {
  }
  submit() {
    const selectedOrdernames = this.form.value.orders
      .map((v, i) => v ? this.orders[i].name : null)
      .filter(v => v !== null);

    console.log(selectedOrdernames);
  }

  reset() {
    this.checked = true;
    this.form.reset();
    if (this.checked) {
      this.controls[0].setValue(true);
      this.controls[6].setValue(true);
      this.controls[2].setValue(true);

    }
  }
}
