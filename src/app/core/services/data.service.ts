import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    tabs: Array<{icon:string,tabName:string}> = [{ icon: 'package_2', tabName: 'part_manager' }];
}
