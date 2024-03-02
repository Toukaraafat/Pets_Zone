import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicsPageComponent } from './clinics-page.component';

describe('ClinicsPageComponent', () => {
  let component: ClinicsPageComponent;
  let fixture: ComponentFixture<ClinicsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClinicsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
