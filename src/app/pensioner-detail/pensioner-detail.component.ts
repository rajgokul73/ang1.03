import { Component, OnInit } from '@angular/core';
import { PensionerDetailService } from 'src/services/pensioner-detail.service';
import { PensionDisbursementService } from 'src/services/pension-disbursement.service';
import { Router } from '@angular/router';
import {PensionerInpu} from 'src/app/model/pensioner-inpu'


@Component({
  selector: 'app-pensioner-detail',
  templateUrl: './pensioner-detail.component.html',
  styleUrls: ['./pensioner-detail.component.css']
})
export class PensionerDetailComponent implements OnInit {

  message:any
  Message:boolean
  updatedPensionerDetails:any
  error:boolean = false;
  constructor(private router:Router,private pensionerDetailService:PensionerDetailService,private pensionDisbursementService:PensionDisbursementService) { }

  ngOnInit(): void {
    
  }

  onSubmit(pensionDetails:PensionerInpu){

     console.log(pensionDetails);
     this.pensionerDetailService.PensionDetails(pensionDetails).subscribe(
      (result: any) => {
        console.log("RESULT IS"+JSON.stringify(result))
        this.updatedPensionerDetails=result;
        if(result!=null){
                 this.pensionDisbursementService.setPensionerDetails(pensionDetails.aadharNumber,result.pensionAmount);
              this.router.navigate(['/dashboard']);
               }
      }  ,
      (error )=>{
        this.error=true;
        console.log(error.error.message)
          this.message=error.error.message;
          this.Message=false; 
      }
      )
    }
}
