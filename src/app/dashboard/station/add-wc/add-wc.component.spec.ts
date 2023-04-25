import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWcComponent } from './add-wc.component';

describe('AddWcComponent', () => {
  let component: AddWcComponent;
  let fixture: ComponentFixture<AddWcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
