import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopwidgetsComponent } from './topwidgets.component';

describe('TopwidgetsComponent', () => {
  let component: TopwidgetsComponent;
  let fixture: ComponentFixture<TopwidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopwidgetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopwidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
