import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
    },
    {
        path: '',
        component: LandingPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class AppRoutingModule {}
