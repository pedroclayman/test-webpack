import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
    imports: [CommonModule, AdminRoutingModule, SharedModule],
    declarations: [AdminHomePageComponent],
})
export class AdminModule {}
