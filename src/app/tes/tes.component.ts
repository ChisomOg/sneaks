import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { bufferToggle, never, NEVER } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-tes',
  template: `
  <div class="hidden">
  <h2 [class]="textDan">
    welcome {{name}} 
</h2>
<h2 bind-class="textDan"> {{2+3}} </h2>
<h2 class="text-success"> {{"welcome " + name}} </h2>
<h2 [class.text-dan]="hasEr">{{name.length +" " + name.toUpperCase()}} </h2>
<h2 [ngClass]="messageC" >{{greetUser()}}</h2>
<h2 [style.color]="isDis ? 'yellow' : 'blue'" >{{rich}}</h2>
<h2 [style.color]="setColor" > style</h2>
<h2 [ngStyle]="setStyle" > style</h2>
<input [id]="myI" type="text" value="nice">
<br>
<input bind-disabled="isDis" [id]="{myI}" type="text" value="nice">
<div>
<br>
<button (click)="onClick($event)"localh> Greet </button>
{{greeting}}
<br>
<button (click)="greeting='Welcome here'"> Greet </button>
<br>
<input #myIn type="text">
<button (click)="logIn(myIn.value)"> log </button>
</div>
<input [(ngModel)]="nam" type="text"> 
<br>
{{nam}}
<div>
  <h2 *ngIf="displayNa; else elseBLock"> Codegame </h2>

  <ng-template #elseBLock>
  <h2> name is hidden </h2>
  </ng-template>
  </div>

  <div *ngIf="displayNa; then isBlock; else itBlock"></div>
    <ng-template #isBlock> <h2> since</h2> </ng-template>
    <ng-template #itBlock> <h2> you see?</h2> </ng-template>
  
  <div [ngSwitch]="nam" >
    <div *ngSwitchCase="'red'"> you pick red</div>
    <div *ngSwitchCase="'blue'"> you pick blue </div>
    <div *ngSwitchCase="'green'"> you pick green </div>
    <div *ngSwitchDefault> pick another</div>
  </div>
  <div *ngFor="let color of colors; odd as i">
    <h2> {{i}} {{color}} </h2>
  </div>
  <h2>{{"Hello " + parentData}} </h2>
  <button (click)="fireEvent()"> Send Event </button>
  <h2> {{nams}} </h2>
  <h2> {{nams | lowercase}} </h2>
  <h2> {{nams | uppercase}} </h2>
  <h2> {{massage | titlecase}} </h2>
  <h2> {{nams | slice:2:5}} </h2>
  <h2> {{perso | json}} </h2>
  <h2> {{62.78960 | number:'1.2-4'}} </h2>
  <h2> {{62.78960 | number:'3.6-8'}} </h2>
  <h2> {{62.78960 | number:'3.1-2'}} </h2>

  <h2> {{0.28 | percent}} </h2>
  <h2> {{0.28 | currency: "EUR"}} </h2>
  <h2> {{date | date: 'short'}} </h2>
  <h2> {{date | date: 'shortTime'}} </h2>
  
  <h2> Employee</h2>
  <ul *ngFor="let employee of employees">
    <li>{{employee.name}}</li>
  </ul>
  </div>
  
`,
  styles: [`
    .text-success {
      color: green;
    }
    .text-dan {
      color: red;
    }
    .text-ran {
      font-style: italic;
    }
  .hidden{
    display: none;
  }
    `]
})
export class TesComponent implements OnInit {

  @Input() public parentData: any;
  @Output() public childEv = new EventEmitter();
  displayNa = true; 
  public nams = "codeRex";
  public massage = "welcome HERE";
  public perso = {
    "firstName": "jane",
    "lastName": "Don"
  }
  public date = new Date();
  public color1 = "green";
  public colors = ["purple", "orange", "grey", "yellow"];
  public nam = "";
  public name = "cisom";
  public rich = 2 + 10;
  public myI ="teId";
  public isDis = false;
  public textDan = "text-dan";
  public hasEr = true;
  public iSpecial = true;
  public messageC = {
    "text-success": !this.hasEr,
    "text-dan": this.hasEr,
    "text-ran": this.iSpecial,

  }
  public employees:any = []; 
  public setColor = "purple";
  public setStyle = {
    color: "blue",
    fontStyle: "italic"
  }
  public greeting = "";



  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void { 
    this._employeeService.getEmployees()
      .subscribe (data => this.employees = data)
  }

  greetUser() {
    return "hey " + this.name;
  }
  onClick(event: any){
    console.log(event);
    this.greeting = "welcome all";
  }
  logIn(value: any) {
    console.log(value);
  }
  fireEvent(){
    this.childEv.emit("hey beauty");
  }

}
