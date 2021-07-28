export class Processpensioninput {

    aadharNumber!:any
    pensionAmount:number
    bankCharge:number

    constructor(aadharNumber:any,pensionAmount:any){
        this.aadharNumber=aadharNumber;
        this.pensionAmount=pensionAmount;
        this.bankCharge=0;
    }
}
