import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PensionDisbursementService } from 'src/services/pension-disbursement.service';



@Component({
  selector: 'app-ddashboard',
  templateUrl: './ddashboard.component.html',
  styleUrls: ['./ddashboard.component.css']
})
export class DdashboardComponent implements OnInit {
  pensionerDetails: any;
  bankName = '';
  //bankServiceCharge :any
  ProcessPensionInput={
    pensionerName :'', 
    pensionAmount:'',
    bankCharge:'',
    aadharNumber:''
  }
  //ProcessCode : any
  constructor(private pension_disbursement:PensionDisbursementService,private router:Router) {

   }

  ngOnInit(): void {
    this.pensionerDetails=this.pension_disbursement.getPensionerDetails();
    console.log(this.pensionerDetails);
    this.ProcessPensionInput.pensionerName=this.pensionerDetails.pensionerName;
    this.ProcessPensionInput.pensionAmount=this.pensionerDetails.pensionAmount;
   this.ProcessPensionInput.aadharNumber=this.pensionerDetails.aadharNumber;
  }
  
  process(){
    this.pension_disbursement.setPensionerDetails(this.ProcessPensionInput.aadharNumber,this.ProcessPensionInput.pensionAmount);
    this.router.navigate(["/processPension"]);
  }

  /*
  onProcessPension(){
    console.log("ProcessPension",this.ProcessPensionInput);
    this.pension_disbursement.processPension(this.ProcessPensionInput).subscribe(
      processCode=>{console.log(processCode);
        this.ProcessCode=processCode;
      },
      error=>{console.log(error);
      }
    );
  }
  ongetBankServiceCharge(){
    console.log("BankServiceCharge",this.bankName);
    this.pension_disbursement.getBankServiceCharge(this.bankName).subscribe(
      bankServiceCharge=>{console.log(bankServiceCharge);
        this.bankServiceCharge=bankServiceCharge;
      },
      error=>{console.log(error);
      }
    );
  }
  */

}
