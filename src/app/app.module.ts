import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { PrivateGuard } from './auth/private.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'dash',
    loadChildren: () =>
      import('./customer-dashboard/customer-dashboard.module').then(
        (m) => m.CustomerDashboardModule
      ),
  },
  {
    path: 'private',
    loadChildren: () =>
      import('./private/private.module').then((m) => m.PrivateModule),
      canLoad: [PrivateGuard]
  },
];

@NgModule({
  declarations: [AppComponent, NavComponent],

  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
