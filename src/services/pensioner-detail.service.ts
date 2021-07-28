import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PensionerInpu } from 'src/app/model/pensioner-inpu';

@Injectable({
  providedIn: 'root'
})
export class PensionerDetailService {

  pension_details_URL="http://localhost:8000/process-pension"
  constructor(private http:HttpClient) { }
  PensionDetails(pensionerinput:any){
   
  //  return this.http.get(this.pension_details_URL+"/PensionDetail",pensionerinput);

  return this.http.post(`${this.pension_details_URL}/PensionDetail`,pensionerinput);
  
  }
  
}
