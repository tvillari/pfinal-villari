import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./pages/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'cursos',
    loadChildren: () =>
      import('./pages/cursos/cursos.module').then((m) => m.CursosModule),
  },
  {
    path: 'inscription',
    loadChildren: () =>
      import('./pages/inscription-courses/inscription-courses.module').then(
        (m) => m.InscriptionCoursesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
