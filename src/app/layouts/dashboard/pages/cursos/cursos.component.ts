import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import { ICursos } from './models/index';
import { MatDialog } from '@angular/material/dialog';
import { CursosDialogComponent } from './cursos-dialog/cursos-dialog.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css',
})
export class CursosComponent implements OnInit {
  displayedColumns = ['id', 'name', 'price', 'actions'];

  cursos: ICursos[] = [];

  constructor(
    private CursosService: CursosService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.cursos = this.CursosService.getCursos();
  }

  openDialog(editingCourse?: ICursos): void {
    this.matDialog
      .open(CursosDialogComponent, {
        data: editingCourse,
      })
      .afterClosed()
      .subscribe((itemCurso) => {
        if (editingCourse) {
          this.cursos = this.cursos.map((curso) =>
            curso.id === editingCourse.id ? { ...curso, ...itemCurso } : curso
          );
        } else {
          if (itemCurso) {
            itemCurso = { ...itemCurso, id: this.cursos.length };
            this.cursos = [...this.cursos, itemCurso];
          }
        }
      });
  }
  onDeleteCourse(id: number): void {
    this.cursos = this.cursos.filter((item) => item.id != id);
  }
}
