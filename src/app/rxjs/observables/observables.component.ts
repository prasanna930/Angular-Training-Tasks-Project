import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval } from 'rxjs';
import 'rxjs/Rx';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  constructor() { }

  ngOnInit() {
    var mynumbers: any = Observable.interval(1000);
    const takeFourNumbers = mynumbers.pipe(take(4));
    // var mynumbers: any = Observable.range(10, 20);
    // var array = [10, 3, 6, 9, 30, 5, 7];
    // var mynumbers = Observable.from(array);
    // var mynumbers=Observable.fromEvent(document.getElementById('txt1'), 'keyup');

    this.subscription = takeFourNumbers.subscribe(
      (n) => {
        console.log(n);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      });

    // disposing observable example
    console.log('---------disposing observable example');
    const dis = interval(1000);
    const subsc = dis.subscribe(val => console.log(val));
    subsc.unsubscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

// create observable
console.log('---------create observer-------');
const hello = Observable.create(function (observer) {
  observer.next('Hello');
  observer.next('World');
  observer.complete();
});
const subscr = hello.subscribe(val => console.log(val));

