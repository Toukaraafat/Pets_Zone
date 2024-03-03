import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePetInfoComponent } from './single-pet-info.component';

describe('SinglePetInfoComponent', () => {
  let component: SinglePetInfoComponent;
  let fixture: ComponentFixture<SinglePetInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePetInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SinglePetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
