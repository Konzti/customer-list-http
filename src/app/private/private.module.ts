import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PrivateComponent } from './private.component';


const routes: Routes = [
  { path: '', component: PrivateComponent }
];

@NgModule({
  declarations: [
    PrivateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PrivateModule { }
