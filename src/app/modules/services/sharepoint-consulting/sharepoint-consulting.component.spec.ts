import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharepointConsultingComponent } from './sharepoint-consulting.component';

describe('SharepointConsultingComponent', () => {
  let component: SharepointConsultingComponent;
  let fixture: ComponentFixture<SharepointConsultingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharepointConsultingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharepointConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
