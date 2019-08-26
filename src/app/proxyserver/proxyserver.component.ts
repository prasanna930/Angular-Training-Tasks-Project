import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-proxyserver',
  templateUrl: './proxyserver.component.html',
  styleUrls: ['./proxyserver.component.scss']
})
export class ProxyserverComponent implements OnInit {
  title = 'proxy server';
  data1;
  data2;
  addemployeeform: FormGroup;
  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.addemployeeform = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      gender: ['', Validators.required]
    });
    this.getemployee();
  }
  getemployee() {
    this.http.get('/getalldata').subscribe(data => {
      this.data2 = data;
      console.log(data);
    });
  }
  deleteemployee(id) {
    this.http.delete('deletedata' + '/' + id, { responseType: 'text' }).subscribe(data => {
      this.getemployee();
      console.log('deleteid:', data);
    });

  }
  addEmployee(user) {
    this.http.post('/adddata', user, { responseType: 'text' }).subscribe(data => {
      console.log('adddata', data);
      this.getemployee();
    });
  }
  getData(data){
this.addemployeeform.patchValue(data);
  }
  updateEmployee(user1){
    this.http.put('/updatedata' + '/' + user1.id , user1, { responseType: 'text' }).subscribe(data => {
      console.log('update', data);
      this.getemployee();
    });
  }
}
