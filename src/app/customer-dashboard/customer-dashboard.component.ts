import { Component, OnInit } from '@angular/core';
import { CustomerService } from './services/customer-service.service';
import { Customer } from './mock-server/customer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css'],
})
export class CustomerDashboardComponent implements OnInit {
  customers$: Customer[] = [];
  title: string = 'customer dashboard';
  visible: boolean = false;
  change: boolean = false;
  showSpinner: boolean = false;
  test: Customer | any = null;

  getCustomers(): void {
    this.showSpinner = true;
    this.customerService.customers.subscribe((data) => {
      console.log('ok');
      this.customers$ = data;
      this.showSpinner = false;
    });
  }

  toggleColor(event: any): void {
    this.test = event;
  }

  toggleTest(event: boolean): void {
    this.change = event;
  }
  // fetchCustomers(): void {
  //   this.getCustomers();
  // }

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
     this.getCustomers();
  }
}
