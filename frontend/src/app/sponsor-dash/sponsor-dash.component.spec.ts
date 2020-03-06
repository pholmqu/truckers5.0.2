import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorDashComponent } from './sponsor-dash.component';

describe('SponsorDashComponent', () => {
  let component: SponsorDashComponent;
  let fixture: ComponentFixture<SponsorDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
