import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'newemployee', component: NewEmployeeComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}