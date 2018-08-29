import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {
  private title:string="ANGULAR REACTIVE  FORM"

  public userDetails:FormGroup
  constructor() { 
    this.userDetails=new FormGroup({
      firstName:new FormControl('',[Validators.required,Validators.minLength(5)]),
      lastName:new FormControl('',Validators.required),
      email:new FormControl(),
      address:new FormGroup({
        AddressLine1:new FormControl(),
        AddressLine2:new FormControl()
      }),
      city:new FormControl(),
      country:new FormControl(),
      gender:new FormControl()
    })
  }

  ngOnInit() {
  }

  public onFormSubmit():void
  {
    console.log(this.userDetails.value);
  }
}
