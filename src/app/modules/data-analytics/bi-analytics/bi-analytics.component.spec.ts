import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BIAnalyticsComponent } from './bi-analytics.component';

describe('BIAnalyticsComponent', () => {
  let component: BIAnalyticsComponent;
  let fixture: ComponentFixture<BIAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BIAnalyticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BIAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
