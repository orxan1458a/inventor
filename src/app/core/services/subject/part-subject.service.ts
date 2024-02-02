import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartSubjectService {
    public getPart: Subject<any> = new Subject<number>();

}
