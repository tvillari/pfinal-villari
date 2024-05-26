import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICursos } from '../models';

@Component({
  selector: 'app-cursos-dialog',
  templateUrl: './cursos-dialog.component.html',
  styleUrl: './cursos-dialog.component.css',
})
export class CursosDialogComponent {
  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<CursosDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private editingCourse?: ICursos
  ) {
    this.userForm = this.formBuilder.group({
      courseName: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')],
      ],
      price: [
        null,
        [Validators.required, Validators.pattern('^[0-9]+(.[0-9]+)?$')],
      ],
    });
    if (editingCourse) {
      this.userForm.patchValue(editingCourse);
    }
  }

  onSave(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.userForm.value);
    }
  }
}
