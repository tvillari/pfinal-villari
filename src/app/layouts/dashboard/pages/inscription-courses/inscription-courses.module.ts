import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { InscriptionCoursesComponent } from './inscription-courses.component';
import { InscriptionCoursesRoutingModule } from './inscription-courses-routing.module';
import { InscriptionDialogComponent } from './inscription-dialog/inscription-dialog.component';

@NgModule({
  declarations: [InscriptionCoursesComponent, InscriptionDialogComponent],
  imports: [CommonModule, InscriptionCoursesRoutingModule, SharedModule],
  exports: [InscriptionCoursesComponent],
})
export class InscriptionCoursesModule {}
