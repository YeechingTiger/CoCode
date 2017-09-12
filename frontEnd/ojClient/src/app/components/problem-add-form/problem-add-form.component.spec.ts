import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemAddFormComponent } from './problem-add-form.component';

describe('ProblemAddFormComponent', () => {
  let component: ProblemAddFormComponent;
  let fixture: ComponentFixture<ProblemAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
