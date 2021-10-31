import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartnerDetails } from '../shared/partner-detail.model';
import { PartnerDetailService } from '../shared/partner-detail.service';

@Component({
  selector: 'app-partner-details',
  templateUrl: './partner-details.component.html'
})
export class PartnerDetailsComponent implements OnInit {

  constructor(public service: PartnerDetailService,private router: Router) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: PartnerDetails) {
    const navigationDetails: string[] = ['partners/view/'+selectedRecord.id];
    this.service.getPartner(selectedRecord.id);
    this.router.navigate(navigationDetails);
  }
}
