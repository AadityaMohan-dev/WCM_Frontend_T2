import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StnprofileComponent } from './stnprofile.component';

describe('StnprofileComponent', () => {
  let component: StnprofileComponent;
  let fixture: ComponentFixture<StnprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StnprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StnprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
