import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl, ControlContainer } from '@angular/forms';
import { MessageService } from 'primeng/api';


interface SelectItem {
  label: string;
  value: string;
}
@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {
  CompDetails = this.fb.group({
    Firstname: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(3), Validators.maxLength(20)]],
    Lastname: [''],
    details: this.fb.group({
      Username: [''],
      password: ['', [Validators.required, Validators.pattern('^[A-Z]+[a-z]+[0-9]+[@#$%%^]'), Validators.maxLength(8)]],
      confirmpassword: [''],
      email: ['', [Validators.required, this.emailDomain]],
    }),
    languages: [''],
    Skills: [''],
    contactNumbers: [''],
    Gender: [''],
    State: [''],
    address: [''],
    dateofbirth: [''],
    employeeid: [''],
    comrat: ['']
  }, { validators: this.passCrossValidation });

  // autocomplete
  Skills: any[] = [
    { id: 1, name: 'java' },
    { id: 2, name: 'python' },
    { id: 3, name: 'perl' },
    { id: 4, name: 'angualr' },
    { id: 5, name: 'php' },
    { id: 6, name: 'c' },
    { id: 7, name: 'c++' },
    { id: 8, name: 'dotnet' },
    { id: 9, name: 'Testing' },
    { id: 10, name: 'Sql' }
  ];
  filteredSkillsMultiple: any[] = [];
  // checkbox
  selectedLan: any[] = [];
  // dropdown
  states: SelectItem[];
  selectedState: string;
  // contact
  values1: string[];
  val: number;
  // print json
  showJsonData: boolean = false;

  fields: any[] = [];

  constructor(private fb: FormBuilder) {
    this.states = [
      { label: 'AndhraPradesh', value: 'AP' },
      { label: 'Telangana', value: 'TG' },
      { label: 'TamilNadu', value: 'TN' },
      { label: 'Bihar', value: 'BH' },
      { label: 'orissa', value: 'OR' },
      { label: 'Kerala', value: 'KE' },
      { label: 'arunachalpradesh', value: 'Ac' },
      { label: 'jammukashmir', value: 'JK' },
      { label: 'Madhyapradesh', value: 'MP' },
      { label: 'Gujarat', value: 'GU' }
    ];
  }
  ngOnInit() {
  }

  filterSkillsMultiple(event) {
    let tech = event.query;
    this.filterSkillsMultiple;
    this.filteredSkillsMultiple = this.filterSkills(tech, this.Skills);
  }

  filterSkills(tech, Skills: any[]): any[] {
    let filtered: any[] = [];
    for (let i = 0; i < Skills.length; i++) {
      let skill = Skills[i];
      if (skill.name.toLowerCase().indexOf(tech.toLowerCase()) == 0) {
        filtered.push(skill);
      }
    }
    return filtered;
  }
  add() {
    console.log(this.CompDetails);
    this.showJsonData = true;
  }
  reset() {
    this.CompDetails.reset();
  }
  addTable() {
    this.fields.push(this.CompDetails.value);
    console.log(this.fields);
    console.log(this.fields[0].Firstname);
  }

  emailDomain(control: AbstractControl): { [key: string]: any | null } {
    const email: string = control.value;
    const domain = email.substring(email.lastIndexOf('@') + 1);
    if (email === '' || domain.toLowerCase() === 'miracle.com') {
      return null;
    } else {
      return { emailDomain: true };
    }
  }

  passCrossValidation(control: AbstractControl): { [Key: string]: boolean | null } {
    const password1 = control.get('details.password');
    const confirmpassword1 = control.get('details.confirmpassword');
    if (password1 === null) {
      return null;
    }
    if (password1.pristine || confirmpassword1.pristine) {
      return null;
    }
    if (password1.value !== confirmpassword1.value) {
      return { misMatch: true };
    }
    return null;
  }
  OnSubmit() {
  }
}


