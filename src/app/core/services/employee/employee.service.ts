import { Injectable } from '@angular/core';
import { MasterService } from '../master/master.service';
import { APIConstant } from '../../constants/APIConstant';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private master:MasterService
  ) { }

  getAllEmployee(){
    this.master.get(environment.api + APIConstant.employee.getAllEmployee)
  }
}
