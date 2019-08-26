import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
public name = 'Angular Training';
public message = 'welcome To miracle';
public studentdata={id:'1', name:'prasanna', branch:'ece'};
date=new Date();
birthday=new Date(1996, 9, 30);
toggle=true;

  constructor() { }

  ngOnInit() {
  }
  get format()   {
     return this.toggle ? 'shortDate' : 'fullDate'; 
    }
  toggleFormat() { 
    this.toggle = !this.toggle; 
  }

}
