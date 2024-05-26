import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionCoursesComponent } from './inscription-courses.component';

describe('InscriptionCoursesComponent', () => {
  let component: InscriptionCoursesComponent;
  let fixture: ComponentFixture<InscriptionCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InscriptionCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscriptionCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
