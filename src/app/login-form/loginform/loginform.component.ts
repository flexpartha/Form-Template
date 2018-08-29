import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../../user/user-service.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(public router:Router,private user:UserServiceService) { }

  ngOnInit() {
  }

  loginUser(e){
    e.preventDefault();
    var username=e.target.elements[0].value;
    var password=e.target.elements[1].value;
    if(username=="admin" && password=="admin")
    {
      this.user.setUserLogin();
      let link=['/dashboard'];
      this.router.navigate(link);
    }
    else{
      alert("please enter correct credentials");
    }
    console.log(username,password);
  }
}
