import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  name: string;
  salary: number;
  age: number;
  constructor(private emp: HttpService, private router: Router, private messageService: MessageService) { }

  ngOnInit() {
  }
  addEmployee(myform) {
    this.emp.addEmployee(myform.value)
      .subscribe(data => {
        // console.log(data);
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'user added Successfully' });
        this.router.navigate(['services']);
      });
  }
}
