import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatExpansionModule } from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
  ],
})
export class MaterialModule {}
