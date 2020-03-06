import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverDashComponent } from './driver-dash.component';

describe('DriverDashComponent', () => {
  let component: DriverDashComponent;
  let fixture: ComponentFixture<DriverDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
