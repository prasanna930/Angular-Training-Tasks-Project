import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  msg: string;
  constructor(private route: ActivatedRoute, private router: Router) { }
  public departmentId;
  ngOnInit() {
  // let id = parseInt(this.route.snapshot.paramMap.get('id'));
  // this.departmentId = id;
  this.route.paramMap.subscribe((params: ParamMap) => {
    let id = parseInt(params.get('id'));
    this.departmentId = id;
  });
  }
  receiveMessage($event) {
    this.msg = $event;
  }
goPrevious(){
  let previousId = this.departmentId - 1;
  this.router.navigate(['communication/parent', previousId]);
}
goNext(){
  let previousId = this.departmentId + 1;
  this.router.navigate(['communication/parent', previousId]);
}
}
