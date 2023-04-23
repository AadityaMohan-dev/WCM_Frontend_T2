import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWheelchairComponent } from './add-wheelchair.component';

describe('AddWheelchairComponent', () => {
  let component: AddWheelchairComponent;
  let fixture: ComponentFixture<AddWheelchairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWheelchairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWheelchairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
