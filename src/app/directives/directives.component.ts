import { Component, OnInit } from '@angular/core';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  // ngStyle
  size = 10;
  checked: boolean;
  cities2: City[];
  selectedCity2: City;
  public on = false;
  On: boolean;
  public color = 'red';
  students: any[] = [
    { id: 1, name: 'prasanna', branch: 'ece', gender: 'female' },
    { id: 2, name: 'lakshmi', branch: 'cse', gender: 'female' },
    { id: 3, name: 'bujji', branch: 'ece', gender: 'female' },
    { id: 4, name: 'jyosthna', branch: 'cse', gender: 'female' },
    { id: 5, name: 'usha', branch: 'ece', gender: 'female' }
  ];
  countries: any[] = [
    { code: 'ind', country: 'India' },
    { code: 'us', country: 'United states' },
    { code: 'uk', country: 'United Kingdom' }
  ]
  constructor() {
    this.cities2 = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }
  ngOnInit() {
  }
  toggle() {
    this.On = !this.On;
  }


}
