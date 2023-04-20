import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirprofileComponent } from './airprofile.component';

describe('AirprofileComponent', () => {
  let component: AirprofileComponent;
  let fixture: ComponentFixture<AirprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
