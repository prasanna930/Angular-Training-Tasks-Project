import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-array-methods',
  templateUrl: './array-methods.component.html',
  styleUrls: ['./array-methods.component.scss']
})
export class ArrayMethodsComponent implements OnInit {
  data1: any[];
  data2: any;
  data3: any;
  data4: any[] = [];
  constructor(private httpService: HttpClient) { }

  ngOnInit() {
    this.httpService.get('./assets/address.json').subscribe(
      data => {
        this.data1 = data as any[];
        this.data2 = this.data1[0].addressAndContacts;
        this.data3 = this.data1[0].addressAndContacts[0].deliveryAddresses.push('id:2', 'name:prasanna', 'age:23');
        // this.data3 = this.data1[0].addressAndContacts[0].deliveryAddresses.pop();
        // this.data3 = this.data1[0].addressAndContacts[0].deliveryAddresses.slice(0,3);
        this.data3 = this.data1[0].addressAndContacts[0].deliveryAddresses.splice(2, 0, 'salary:12000');
        console.log(this.data3);
        // this.data1[0].addressAndContacts[0].deliveryAddresses.forEach((value) => {
        //   console.log('foreach', value);
        //   this.data4.push(value);
        // });

      }

    );
  }
}
