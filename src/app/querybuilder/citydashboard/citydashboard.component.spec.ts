import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitydashboardComponent } from './citydashboard.component';

describe('CitydashboardComponent', () => {
  let component: CitydashboardComponent;
  let fixture: ComponentFixture<CitydashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitydashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitydashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
