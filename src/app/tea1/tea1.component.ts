import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-tea1',
  template: `
  <div class="hidden">
  <h2> Employee Details:</h2>
  <ul *ngFor="let employee of employees">
    <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
  </ul>
  </div>
  `,
  styles: [`
  .hidden{
    display: none;
  }
  `]
})
export class Tea1Component implements OnInit {

  public employees:any = []; 

  constructor(private _employeeservice: EmployeeService) { }

  ngOnInit(){
  this._employeeservice.getEmployees()
      .subscribe(data => this.employees = data)
  }

}
