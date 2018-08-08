import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
    constructor() {}

    getName() {
        return 'Common service';
    }
}
