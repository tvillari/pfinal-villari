import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormFieldValidationErrorsPipe } from './pipes/form-field-validation-errors.pipe';
import { FullNameDirective } from './directives/full-name.directive';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [FormFieldValidationErrorsPipe, FullNameDirective],
  imports: [CommonModule],
  exports: [
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    FormFieldValidationErrorsPipe,
    FullNameDirective,
    MatCardModule,
  ],
})
export class SharedModule {}
