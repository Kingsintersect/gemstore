import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';

// icons
import { HeroIconsModule } from "./hero-icons.module";






@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTableModule,
    MatProgressBarModule,
    MatExpansionModule,

    // icons
    HeroIconsModule,
  ]
})
export class MaterialModule { }
