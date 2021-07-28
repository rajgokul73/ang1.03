import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
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

  //  pensionDetails={
  //   pensionerName:'',
	//   pensionerDob:'',
	//   pan:'',
	//  pensionType: '',
	//  aadharNumber:'',
  // }
  message:any
  Message:boolean
  updatedPensionerDetails:any
  constructor(private router:Router,private pensionerDetailService:PensionerDetailService,private pensionDisbursementService:PensionDisbursementService) { }

  ngOnInit(): void {
    //this.pensionDisbursementService.setPensionerDetails(this.updatedPensionerDetails);
  }
  // onSubmit(){
  //   var params =new HttpParams()
  //   .set('pensionerName',this.pensionDetails.pensionerName.toString())
  //   .set('pensionerDob',this.pensionDetails.pensionerDob)
  //   .set('pan',this.pensionDetails.pan)
  //   .set('aadharNumber',this.pensionDetails.aadharNumber)
  //   .set('pensionType',this.pensionDetails.pensionType)
  //   var Get_URL=params.toString();
  //   console.log("url here");
  //   console.log(Get_URL)

    
  //   this.pensionerDetailService.PensionDetails(Get_URL).subscribe(
  //     response=>{
  //       this.updatedPensionerDetails=response;
  //       console.log(response);
  //       if(response!=null){
  //         this.pensionDisbursementService.setPensionerDetails(this.updatedPensionerDetails);
  //       this.router.navigate(['/dashboard']);
  //       }
  //      //window.location.href="/delete"
  //     },
  //     error=>{console.log(error)}
  //   )
  // }


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
        console.log(error.error.message)
        if(error.error.message==null){
          this.message="Please fill all the fields"
          this.Message=false;
        }
      }
      )
    }
}
