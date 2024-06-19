import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';
import { ICursos } from '../cursos/models';
import { MatDialog } from '@angular/material/dialog';
import { InscriptionDialogComponent } from './inscription-dialog/inscription-dialog.component';

@Component({
  selector: 'app-inscription-courses',
  templateUrl: './inscription-courses.component.html',
  styleUrl: './inscription-courses.component.css',
})
export class InscriptionCoursesComponent implements OnInit {
  displayedColumns = ['id', 'name', 'price', 'actions'];
  cursos: ICursos[] = [];
  constructor(private CursosService: CursosService, public dialog: MatDialog) {}
  ngOnInit(): void {
    this.cursos = this.CursosService.getCursos();
  }

  openDialog() {
    this.dialog.open(InscriptionDialogComponent, {});
  }
}
