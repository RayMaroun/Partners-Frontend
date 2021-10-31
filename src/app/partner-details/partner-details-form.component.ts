import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PartnerDetailService } from '../shared/partner-detail.service';

@Component({
  selector: 'app-partner-details-form',
  templateUrl: './partner-details-form.component.html',
  styles: [
  ]
})
export class PartnerDetailsFormComponent implements OnInit {

  constructor(public service: PartnerDetailService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let partnerId: number = 1;
    this.activatedRoute.params.subscribe(params => {
      partnerId = params['id'];
    });
    this.service.getPartner(partnerId);
  }
}
