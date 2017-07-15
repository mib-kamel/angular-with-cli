import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page.component';
import { StatsComponent } from './stats/stats.component';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', component: HomePageComponent },
    { path: 'stats', component: StatsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
