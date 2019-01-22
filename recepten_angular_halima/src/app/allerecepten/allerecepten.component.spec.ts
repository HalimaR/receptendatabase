import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllereceptenComponent } from './allerecepten.component';

describe('AllereceptenComponent', () => {
  let component: AllereceptenComponent;
  let fixture: ComponentFixture<AllereceptenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllereceptenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllereceptenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
