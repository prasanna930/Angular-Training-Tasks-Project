import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  title = 'DataBinding in Angular';
  imageUrl = 'assets/miracle.jpg';
  username: string;
  btnstatus = false;
  constructor() { }

  ngOnInit() {
  }
  changeTitle() {
    this.title = 'Angular Training';
  }
}
