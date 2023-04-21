import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstationwheelchairComponent } from './addstationwheelchair.component';

describe('AddstationwheelchairComponent', () => {
  let component: AddstationwheelchairComponent;
  let fixture: ComponentFixture<AddstationwheelchairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddstationwheelchairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddstationwheelchairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
