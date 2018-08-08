import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../shared/common.service';

@Component({
    selector: 'app-admin-home-page',
    templateUrl: './admin-home-page.component.html',
    styleUrls: ['./admin-home-page.component.css'],
})
export class AdminHomePageComponent implements OnInit {
    name: string;
    constructor(private common: CommonService) {}

    ngOnInit() {
        this.name = this.common.getName();
    }
}
