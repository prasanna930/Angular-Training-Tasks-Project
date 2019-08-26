import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-addressformat',
  templateUrl: './addressformat.component.html',
  styleUrls: ['./addressformat.component.scss']
})
export class AddressformatComponent implements OnInit {
  title = 'JSON to Table Example';
  constructor(private httpService: HttpClient) { }
  data1: any[];
  data2: any;
  ngOnInit() {
    this.httpService.get('./assets/address.json').subscribe(
      data => {
        this.data1 = data as any[];
        this.data2 = this.data1[0].addressAndContacts;
        console.log(this.data2);
      }
    );
  }


}
