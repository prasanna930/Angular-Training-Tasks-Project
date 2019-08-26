import { Component, OnInit } from '@angular/core';


interface SelectItem {
  label: string;
  value: string;
}

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.scss']
})
export class TemplatedrivenformComponent implements OnInit {
 firstname: string = null;
  lastname: string = null;
  dateofbirth: number = null;
  username: string = null;
  password: string = null;
  confirmpassword: string = null;
  email: string = null;
  gender: string = null;
  State: string = null;
  languages: string = null;
  Calender: number = null;
  address: any = null;
  contactNumbers: number = null;
 
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

  constructor() {
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
add(myform) {
  this.showJsonData = true;
  console.log(myform);
}
reset(myform) {
  myform.reset();
}
addTable(myform) {
  this.fields.push(myform.value);
  console.log(this.fields);
  console.log(this.fields[0].Firstname);
}
}
