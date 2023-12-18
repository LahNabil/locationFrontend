import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAssuranceComponent } from './update-assurance.component';

describe('UpdateAssuranceComponent', () => {
  let component: UpdateAssuranceComponent;
  let fixture: ComponentFixture<UpdateAssuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateAssuranceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
