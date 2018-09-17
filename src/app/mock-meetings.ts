import { Meeting } from './meeting';
import { EMPLOYEES } from './mock-employees';

export const MEETINGS: Meeting[] = [
    {title: 'Spring Cleaning', time:'Morning', date: new Date(2018, 9, 1), employees: [EMPLOYEES[0], EMPLOYEES[1]]},
    {title: 'Birthday Bash', time:'Evening', date: new Date(2018, 9, 2), employees: [EMPLOYEES[0], EMPLOYEES[2]]},
    {title: 'Useless Meeting', time:'Morning', date: new Date(2018, 9, 3), employees: [EMPLOYEES[2], EMPLOYEES[1]]},
    // {title: 'Spring Cleaning', time:'Morning', employees: []},
    // {title: 'Spring Cleaning', time:'Morning', employees: []},
    // {title: 'Spring Cleaning', time:'Morning', employees: []},
]