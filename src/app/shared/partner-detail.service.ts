import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PartnerDetails } from './partner-detail.model';
import { Partner } from './partner.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartnerDetailService {

  constructor(private http: HttpClient) { 
  }

  readonly baseURL = environment.apiBase + ':' + environment.port + '/api/partners'
  formData: Partner = new Partner();
  list: PartnerDetails[];

  refreshList() {
    this.http.get(this.baseURL + "?range=10&coordinates=51.5144636,-0.142571")
      .toPromise()
      .then(res => this.list = res as PartnerDetails[]);
  }

  getPartner(id: number) {
    var test = this.http.get((`${this.baseURL}/${id}`))
      .toPromise()
      .then(res => this.formData = res as Partner);
      console.log(test);
  }


}
