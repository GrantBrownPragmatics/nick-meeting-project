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
      let date = document.createTextNode(meeting.date);
      let title = document.createTextNode(meeting.title);
      calendarCube.appendChild(date);
      calendarCube.appendChild(title);
      element.appendChild(calendarCube);

      let i;
      for (i = 0; i < meeting.employees.length; i++) {
        console.log(meeting.employees[i] + i);
        let employeeName = document.createTextNode(meeting.employees[i].name);
        calendarCube.appendChild(employeeName);
      }

    })
  }

}
