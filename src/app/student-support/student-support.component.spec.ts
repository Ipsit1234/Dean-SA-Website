import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSupportComponent } from './student-support.component';

describe('StudentSupportComponent', () => {
  let component: StudentSupportComponent;
  let fixture: ComponentFixture<StudentSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
