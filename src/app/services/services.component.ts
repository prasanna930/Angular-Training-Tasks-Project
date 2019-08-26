import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Employee1 } from './example';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  totalRecords: any;
  data1: any;
  display = false;
  constructor(private emp: HttpService, private router: Router, private messageService: MessageService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.emp.getEmployee().subscribe((data: any) => {
      this.data1 = data;
      // console.log(data);
    });
  }
  deleteemployee(id) {
    let index;
    index = this.data1.findIndex(x => x.id === id);
    this.data1 = this.data1.filter((val, i) => i !== index);
    this.emp.deleteEmployee(id).subscribe(data => {
      this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Deleted Successfully' });
      // console.log(data);
    });
  }
  editUser(id: any) {
    // localStorage.removeItem('userId');
    // localStorage.setItem('userId', id);
    this.router.navigate(['edit', id]);
  }
}




