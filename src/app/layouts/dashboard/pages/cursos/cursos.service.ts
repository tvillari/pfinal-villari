import { Injectable } from '@angular/core';
import { ICursos } from './models';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor() {}
  getCursos(): ICursos[] {
    return [
      {
        id: 0,
        courseName: 'Angular',
        price: 8000,
      },
      {
        id: 1,
        courseName: 'Javascript',
        price: 5000,
      },
      {
        id: 2,
        courseName: 'React',
        price: 10000,
      },
    ];
  }
}
