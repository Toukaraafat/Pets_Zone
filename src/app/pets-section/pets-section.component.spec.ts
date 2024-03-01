import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsSectionComponent } from './pets-section.component';

describe('PetsSectionComponent', () => {
  let component: PetsSectionComponent;
  let fixture: ComponentFixture<PetsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetsSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
