import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
  msg = 'This is child information using output decorator';
  constructor() { }
  @Output() msgEvent = new EventEmitter<string>();
  ngOnInit() {
  }
  sendMessage(){
    this.msgEvent.emit(this.msg);
  }
}
