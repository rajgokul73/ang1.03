import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Processpensioninput} from 'src/app/model/processpensioninput'

@Injectable({
  providedIn: 'root'
})
export class PensionDisbursementService {

  pension_disbursement_URL="http://localhost:8000/process-pension"
  constructor(private http:HttpClient) { }
  processPension(ProcessPensionInput : any){
    return this.http.post(`${this.pension_disbursement_URL}/ProcessPension`,ProcessPensionInput);
  }
  //getBankServiceCharge(bankName : string){
   // return this.http.post(`${this.pension_disbursement_URL}/getServiceCharge`,bankName);
  //}
  pensionerDetails:Processpensioninput
  setPensionerDetails(aadharNumber:any,pensionAmount:any){
   
    this.pensionerDetails=new Processpensioninput(aadharNumber,pensionAmount);

    // this.pensionerDetails.aadharNumber=aadharNumber;
    // this.pensionerDetails.pensionAmount=pensionAmount;
    // this.pensionerDetails.bankCharge=0;
    console.log("value set=>",this.pensionerDetails);
  }
  getPensionerDetails(){
    console.log("setted value=>",this.pensionerDetails);
    return this.pensionerDetails;
  }
}
