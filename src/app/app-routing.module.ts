import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const partnersModule = () => import('./partner-details/partners.modules').then(x => x.PartnersModule);

const routes: Routes = [
    { path: 'partners', loadChildren: partnersModule },

    // otherwise redirect to home
    { path: '**', redirectTo: 'partners' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }