import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatToolbarModule,
  MatMenuModule,
  MatTabsModule,
  MatDividerModule,
  MatCardModule,
  MatListModule,
  MatExpansionModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatInputModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatTreeModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatSelectModule,
  MatCheckboxModule
} from '@angular/material';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PaginationComponent } from './pagination/pagination.component';
import { HtmlFormatPipe } from '../pipe/html-format.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatTreeModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatSelectModule,
    FlexLayoutModule,
    MatCheckboxModule,
    RouterModule,
    MDBBootstrapModule.forRoot(),
  ],
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatTreeModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatSelectModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MDBBootstrapModule,
    PaginationComponent,
    HtmlFormatPipe
  ],
  declarations: [HtmlFormatPipe, PaginationComponent]
})
export class SharedModule { }
