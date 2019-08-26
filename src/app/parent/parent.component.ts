import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements AfterViewInit {
  @ViewChild(Child1Component, { static: false }) child;

  constructor(private cdr: ChangeDetectorRef, private router: Router) { }
  message: string;
  // route parameter
  students: any[] = [
    { id: 1, name: 'prasanna', branch: 'ece', gender: 'female' },
    { id: 2, name: 'lakshmi', branch: 'cse', gender: 'female' },
    { id: 3, name: 'bujji', branch: 'ece', gender: 'female' },
    { id: 4, name: 'jyosthna', branch: 'cse', gender: 'female' },
    { id: 5, name: 'usha', branch: 'ece', gender: 'female' }
  ];
  ngAfterViewInit() {
  }
  change() {
  this.child.message = 'view children';
  }

onSelect(department) {
this.router.navigate(['communication/parent', department.id]);
}

}
