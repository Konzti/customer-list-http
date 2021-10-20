import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashboardComponent } from './customer-dashboard.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { MaterialModule } from '../material/material.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: CustomerDashboardComponent }];

@NgModule({
  declarations: [CustomerDashboardComponent, CustomerDetailComponent],

  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule],
})
export class CustomerDashboardModule {}
