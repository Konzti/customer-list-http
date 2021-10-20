import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../mock-server/customer';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
})
export class CustomerDetailComponent implements OnInit {
  @Input() data?: Customer;

  @Output() clicked: EventEmitter<any> = new EventEmitter();
  @Output() button: EventEmitter<any> = new EventEmitter();

  clickedButton: boolean = false;
  
  showSpinner: boolean = false;

  onClick(): void {
    this.clicked.emit(this.data);
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
      this.clickedButton = !this.clickedButton;
      this.button.emit(this.clickedButton);
    }, 300);
  }

  constructor() {}

  ngOnInit(): void {}
}
