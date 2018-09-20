import { Component, OnInit } from '@angular/core';
import { EMPLOYEES } from '../mock-employees';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { EmployeeCreatorService } from '../employee-creator.service';
@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private router: Router, private creator: EmployeeCreatorService) { }

  ngOnInit() {
    this.getEmployees();
  }

  addEmployee(id, name, phoneNumber) {
    this.creator.addEmployee({id, name, phoneNumber} as Employee)
    .subscribe(employee => {
      this.employees.push(employee);
    })
  }

  getEmployees(): void {
    this.creator.getEmployees().subscribe(employees => this.employees = employees) 
  }

}
