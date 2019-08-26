import { Component, OnInit } from '@angular/core';
import { fromEventPattern, fromEvent, throwError, combineLatest, timer } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';
import { from, zip, Subject, BehaviorSubject, AsyncSubject, of } from 'rxjs';
import { take, map, buffer, mergeMap, groupBy, reduce, takeWhile, filter, concatMap, defaultIfEmpty, catchError } from 'rxjs/operators';
import { concat, interval, range, merge, empty } from 'rxjs';
import { debounce, mapTo, skip, startWith, scan, toArray, switchMap, tap, find, repeatWhen, delay, share, publish } from 'rxjs/operators';
@Component({
  selector: 'app-formeventpattern',
  templateUrl: './formeventpattern.component.html',
  styleUrls: ['./formeventpattern.component.scss']
})
export class FormeventpatternComponent implements OnInit {
  subscription: Subscription;

  constructor() { }

  ngOnInit() {
    console.log('------from example-------');
    const array = [10, 20, 30];
    const result = from(array);
    result.subscribe(x => console.log(x));

    console.log('------fromEvent example-------');
    const clicks = fromEvent(document, 'click');
    clicks.subscribe(x => console.log(x));

    console.log('------interval example-------');
    const numbers = interval(1000);
    const takeFourNumbers = numbers.pipe(take(4));
    takeFourNumbers.subscribe(x => console.log('Next: ', x));

    console.log('------range example-------');
    const number1 = range(1, 10);
    number1.subscribe(x => console.log(x));

    console.log('------subject example-------');
    const sub1 = new Subject();
    sub1.next(1);
    sub1.subscribe(console.log);
    sub1.next(2);
    sub1.complete();
    sub1.error('error occured');
    sub1.subscribe(console.log);
    sub1.next(3);


    console.log('------Behaviour subject example-------');
    const subject = new BehaviorSubject(123);
    subject.subscribe(console.log);
    subject.subscribe(console.log);
    subject.next(456);
    subject.subscribe(console.log);
    subject.next(789);

    console.log('------asynchronous subject example-------');
    const sub2 = new AsyncSubject();
    sub2.subscribe(console.log);
    sub2.next(123); // nothing logged
    sub2.subscribe(console.log);
    sub2.next(456); // nothing logged
    sub2.complete(); // 456, 456 logged by both subscribers

    console.log('------find example-------');
    const status = document.getElementById('status');
    const clicks$ = fromEvent(document, 'click');
    clicks$.pipe(find((event: any) => event.target.id === 'box'), mapTo('Found!'), startWith('Find me!'),
      // reset when click outside box
      repeatWhen(() => clicks$.pipe(filter((event: any) => event.target.id !== 'box'))))
      .subscribe(message => (status.innerHTML = message));

    console.log('------delay example-------');
    const exampl = of(null);
    const message = merge(exampl.pipe(mapTo('Hello')), exampl.pipe(mapTo('World!'), delay(1000)),
      exampl.pipe(mapTo('Goodbye'), delay(2000)),
      exampl.pipe(mapTo('World!'), delay(3000)));
    const subscrib = message.subscribe(val => console.log(val));

    console.log('------error throw example-------');
    const results = concat(of(7), throwError(new Error('oops!')));
    results.subscribe(x => console.log(x), e => console.error(e));

    const sour = throwError('This is an error!');
    const exam = sour.pipe(catchError(val => of(`I caught: ${val}`)));
    const subs = exam.subscribe(val => console.log(val));

    console.log('------concat example-------');
    const timers = interval(1000).pipe(take(4));
    const sequence = range(1, 10);
    const result1 = concat(timers, sequence);
    result1.subscribe(x => console.log(x));

    console.log('------concatMap example-------');
    const clicks5 = fromEvent(document, 'click');
    const result4 = clicks5.pipe(
      concatMap(ev => interval(1000).pipe(take(4)))
    );
    result4.subscribe(x => console.log(x));

    console.log('------filter example-------');
    // emit (1,2,3,4,5)
    const source = from([1, 2, 3, 4, 5]);
    // filter out non-even numbers
    const example = source.pipe(filter(num => num % 2 === 0));
    // output: "Even number: 2", "Even number: 4"
    const subscribe = example.subscribe(val => console.log(`Even number: ${val}`));

    console.log('------default for observable.empty example-------');
    // emit 'Observable.empty()!' when empty, else any values from source
    const example1 = empty().pipe(defaultIfEmpty('Observable.empty()!'));
    // output: 'Observable.empty()!'
    const subscribe1 = example1.subscribe(val => console.log(val));

    console.log('------debounce example-------');
    const example3 = of('WAIT', 'ONE', 'SECOND', 'Last will display');
    const debouncedExample = example3.pipe(debounce(() => timer(1000)));
    const subscribe2 = debouncedExample.subscribe(val => console.log(val));

    console.log('------reduce example-------');
    const nos = of(1, 2, 3, 4);
    const ex = nos.pipe(reduce((acc, val) => acc + val));
    const sub = ex.subscribe(val => console.log('Sum:', val));

    console.log('------skip example-------');
    const skp = interval(1000);
    const exam1 = skp.pipe((skip(10)));
    const subs1 = exam1.subscribe(value => console.log(value));

    console.log('------toarray example-------');
    const arr = interval(1000).pipe(take(10), toArray());
    const subscrbe = arr.subscribe(val => console.log(val));

    console.log('------switchmap example-------');
    const swc = fromEvent(document, 'click').pipe(switchMap(() => interval(1000)));
    const subbb = swc.subscribe(val => console.log(val));

    console.log('------start with scan value example-------');
    const start = of('miracle', 'software', 'systems');
    const eg = start.pipe(startWith('Hii'), scan((act, curr) => `${act} ${curr}`));
    const subscribee = eg.subscribe(value => console.log(value));

    console.log('------top/do example-------');
    const sou = of(1, 2, 3, 4, 5);
    const examples = sou.pipe(map(val => val + 10), tap({
      next: val => {
        // on next 11, etc.
        console.log('on next', val);
      },
      error: error => {
        console.log('on error', error.message);
      },
      complete: () => console.log('on complete')
    })
    );
    const ddo = examples.subscribe(val => console.log(val));


    console.log('------share example-------');
    const source1 = timer(1000);
    const shre = source1.pipe(
      tap(() => console.log('***SIDE EFFECT***')),
      mapTo('***RESULT***')
    );
    const subscri = shre.subscribe(val => console.log(val));
    const subscribeTwo = shre.subscribe(val => console.log(val));
    // share observable among subscribers
    const sharedExample = shre.pipe(share());
    const subscribeThree = sharedExample.subscribe(val => console.log(val));
    const subscribeFour = sharedExample.subscribe(val => console.log(val));

    console.log('------publish example-------');
    // const source3 = interval(1000);
    // const exa1 = source3.pipe(tap(_ => console.log('Do Something!')), publish());
    // const subscr = exa1.subscribe(val =>
    //   console.log(`Subscriber One: ${val}`));
    // const subscribtwo = exa1.subscribe(val =>
    //   console.log(`Subscriber Two: ${val}`));
    // setTimeout(() => {
    //   exa1.connect(); }, 5000);

    console.log('------mergemap example-------');
    // const letters = of('a', 'b', 'c');
    // const result2 = letters.pipe(
    //   mergeMap(x => interval(1000).pipe(map(i => x + i))),
    // );
    // result2.subscribe(x => console.log(x));



    console.log('------combine latest example-------');
    // const firstTimer = timer(0, 1000); // emit 0, 1, 2... after every second, starting from now
    // const secondTimer = timer(500, 1000); // emit 0, 1, 2... after every second, starting 0,5s from now
    // const combinedTimers = combineLatest(firstTimer, secondTimer);
    // combinedTimers.subscribe(value => console.log(value));

    // console.log('------map example-------');
    // const clicks3 = fromEvent(document, 'click');
    // const positions = clicks3.pipe(map(ev => ev.clientX));
    // positions.subscribe(x => console.log(x));

    console.log('------mapto example-------');
    const source2 = fromEvent(document, 'click');
    const example4 = source2.pipe(mapTo('GOODBYE WORLD!'));
    const subscribe3 = example4.subscribe(val => console.log(val));



    console.log('------takewhile example-------');
    const source$ = of(1, 2, 3, 4, 5);
    const we = source$.pipe((takeWhile(val => val <= 3)));
    const su = we.subscribe(val => console.log(val));

    console.log('------merge example-------');
    const clicks1 = fromEvent(document, 'click');
    const timer1 = interval(1000);
    const clicksOrTimer = merge(clicks1, timer1);
    clicksOrTimer.subscribe(x => console.log(x));

    console.log('------zip example-------');
    const age = of<number>(27, 25, 29);
    const name = of<string>('Foo', 'Bar', 'Beer');
    const isDev = of<boolean>(true, true, false);

    zip(age, name, isDev).pipe(
      map(([age, name, isDev]) => ({ age, name, isDev })),
    )
      .subscribe(x => console.log(x));

    console.log('------of example-------');
    of(10, 20, 30)
      .subscribe(
        next => console.log('next:', next),
        err => console.log('error:', err),
        () => console.log('the end'),
      );

    console.log('------buffer example-------');
    const clicks3 = fromEvent(document, 'click');
    const intervalEvents = interval(1000);
    const buffered = intervalEvents.pipe(buffer(clicks3));
    buffered.subscribe(x => console.log(x));

  }
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
// fromeventpattern
// function addClickHandler(handler) {
//   document.addEventListener('click', handler);
// }
// function removeClickHandler(handler) {
//   document.removeEventListener('click', handler);
// }

// const clicks = fromEventPattern(addClickHandler, removeClickHandler);
// clicks.subscribe(x => console.log(x));


