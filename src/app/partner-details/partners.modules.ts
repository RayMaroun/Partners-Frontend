import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { PartnersRoutingModule } from './partners-routing.module';
import { PartnerDetailsComponent } from './partner-details.component';
import { PartnerDetailsFormComponent } from './partner-details-form.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PartnersRoutingModule,
        RouterModule,
        FormsModule,
    ],
    declarations: [
        LayoutComponent,
        PartnerDetailsComponent,
        PartnerDetailsFormComponent
    ]
})
export class PartnersModule { }