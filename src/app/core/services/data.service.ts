import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    tabs: any = [{ img: 'package_2', tabName: 'Part Manager' }];
}
