import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionCoursesComponent } from './inscription-courses.component';

const routes: Routes = [
  {
    path: '',
    component: InscriptionCoursesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionCoursesRoutingModule {}
