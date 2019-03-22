import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatToolbarModule,MatIconModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule,MatSelectModule} from '@angular/material';




@NgModule({
  imports: [BrowserAnimationsModule,MatSelectModule,CommonModule,MatButtonModule, MatToolbarModule,MatFormFieldModule,MatInputModule,MatIconModule],
  exports: [BrowserAnimationsModule,MatSelectModule,MatButtonModule, MatToolbarModule,MatFormFieldModule,MatInputModule,MatIconModule],
})
export class MaterialModule { }