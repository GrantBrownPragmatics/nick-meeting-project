import { Component, OnInit } from '@angular/core';
import { Meeting } from '../meeting';
import { MEETINGS } from '../mock-meetings';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  meetings = MEETINGS;

  constructor() { }

  ngOnInit() {
    this.createCalendar(this.meetings);
  }

  createCalendar(meetings) {
    let calendarMap = meetings.map((meeting) => {
      let element = document.getElementById('meetings');
      let calendarCube = document.createElement('div');
      calendarCube.classList.add('calendar-cube');

      let dateBox = document.createElement('p');
      let titleBox = document.createElement('p');
      let employeeBox = document.createElement('ul');
      
      let date = document.createTextNode(meeting.date);
      let title = document.createTextNode(meeting.title);
      
      dateBox.appendChild(date);
      titleBox.appendChild(title);

      calendarCube.appendChild(dateBox);
      calendarCube.appendChild(titleBox);

      element.appendChild(calendarCube);

      for (let i = 0; i < meeting.employees.length; i++) {
        console.log(meeting.employees[i] + i);
        let employeeNameBox = document.createElement('li');
        let employeeName = document.createTextNode(meeting.employees[i].name);
        employeeNameBox.appendChild(employeeName);
        calendarCube.appendChild(employeeNameBox);
      }

    })
  }

}
