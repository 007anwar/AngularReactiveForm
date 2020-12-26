import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 employeeForm:FormGroup;
ngOnInit()
{
  this.employeeForm=new FormGroup({
    id:new FormControl("1",[Validators.required]),
    email:new FormControl("anwar.mulla@nihilent.com",[Validators.required,Validators.email]),
    designation:new FormControl("Software Engineer",[Validators.required]),
    employeename:new FormControl("Anwar Mulla",[Validators.required])
  });
}
public createEmployee()
{
  console.log(this.employeeForm.valid);
console.log(this.employeeForm.value);
}
}
