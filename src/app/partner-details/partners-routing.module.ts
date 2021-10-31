import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { PartnerDetailsComponent } from './partner-details.component';
import { PartnerDetailsFormComponent } from './partner-details-form.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: PartnerDetailsComponent },
            { path: 'add', component: PartnerDetailsFormComponent },
            { path: 'view/:id', component: PartnerDetailsFormComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PartnersRoutingModule { }