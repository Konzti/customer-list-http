import { Component, OnInit } from '@angular/core';
import { Emitters } from '../auth/emitters';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  authenticated: boolean = false;
  constructor() {}

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => { 
        this.authenticated = auth;
      }
    )
  }
}
