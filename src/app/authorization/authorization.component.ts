import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/services/authorization.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  credentials={
    
    password:"",
    userName:"" 

  }
  error: boolean;
  errormessage: any;
  constructor(private loginService:AuthorizationService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    
    if((this.credentials.userName!='' && this.credentials.password!='') && 
    (this.credentials.userName!=null && this.credentials.password!=null)){
      this.loginService.generateToken(this.credentials).subscribe(
        (response: any)=>{
          console.log("success");
          console.log(response);
          console.log(response.authToken);
          
          this.loginService.loginUser(response.authToken,response.userid);
          window.location.href="/pensiondetails";
        },
        error =>{
          this.error=true;
          // console.log("error");
          // console.log(error);
          this.errormessage=error.error.message;
          console.log(this.errormessage);
        }
      );
    }
  }
}
