import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamiccheckbox',
  templateUrl: './dynamiccheckbox.component.html',
  styleUrls: ['./dynamiccheckbox.component.scss']
})
export class DynamiccheckboxComponent implements OnInit { 

  constructor(private fb: FormBuilder) { }
  dynamicform = this.fb.group({
    items: this.fb.array([])
  });
  ngOnInit() {
  }
  get items(): FormArray {
    return this.dynamicform.get('items') as FormArray;
  }
  addItem(): void {
    this.items.push(this.buildItem());
  }

  private buildItem(): FormGroup {
    return this.fb.group({
      isChecked: [false, Validators.required],
    });
  }

}
