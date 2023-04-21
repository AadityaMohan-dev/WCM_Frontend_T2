import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstationstaffComponent } from './addstationstaff.component';

describe('AddstationstaffComponent', () => {
  let component: AddstationstaffComponent;
  let fixture: ComponentFixture<AddstationstaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddstationstaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddstationstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
