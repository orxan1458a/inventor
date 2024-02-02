import { Injectable } from '@angular/core';
import { MasterService } from './master.service';
import { APIConstant } from '../../constants/APIConstant';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PartDBService {

    constructor(
        private master: MasterService
    ) { }

    getPart(partId: number) {
        this.master.get(environment.api + APIConstant.part.getPart + partId)
    }
}
