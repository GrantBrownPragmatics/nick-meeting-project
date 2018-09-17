import { Employee } from './employee';
export class Meeting {
    title: string;
    date: Date;
    time: string;
    employees: Array<Employee>;
}