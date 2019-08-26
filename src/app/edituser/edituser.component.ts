import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {
  Employee1: any;
  id: any;
  // userId: any = localStorage.getItem('userId');
  editform: FormGroup;
  constructor(private emp: HttpService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.editform = this.fb.group({
      name: ['', Validators.required],
      salary: ['', Validators.required],
      age: ['', Validators.required]
    });
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.emp.getEmployeeID(this.id).subscribe((data) => {
      console.log(data, this.id);
      this.editform.patchValue({ name: data.employee_name, salary: data.employee_salary, age: data.employee_age });
    });
  }

  updateUser() {
    this.emp.updateuser(this.editform.value, this.id)
      .subscribe(data => {
        this.router.navigate(['services']);
        console.log(this.id);
      });
  }
}

