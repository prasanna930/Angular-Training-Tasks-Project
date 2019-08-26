import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee2, Employee1 } from './services/example';
import { Geturl } from './services/gettingurl';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private baseurl: Geturl) { }
  // configurl = '	http://dummy.restapiexample.com/api/v1/';
  configurl = this.baseurl.url;
  addEmployee(user: Employee2) {
    return this.http.post(this.configurl + 'create', user);
  }
  getEmployee() {
    return this.http.get<Employee1[]>(this.configurl + 'employees').pipe(
      catchError(err => {
        console.log('error message', err);
        document.write(JSON.stringify(err));
        return of(err);
      })
    )

  }
  deleteEmployee(id: number) {
    return this.http.delete(this.configurl + 'delete' + '/' + id);
  }
  getEmployeeID(id: string) {
    return this.http.get<Employee1>(this.configurl + 'employee' + '/' + id);
  }
  updateuser(user: Employee2, id: any) {
    console.log(id, 'id is');
    return this.http.put(this.configurl + 'update' + '/' + id, user);
  }
}


