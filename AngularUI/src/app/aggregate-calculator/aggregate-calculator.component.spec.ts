import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregateCalculatorComponent } from './CalcuateResult';

describe('AggregateCalculatorComponent', () => {
  let component: AggregateCalculatorComponent;
  let fixture: ComponentFixture<AggregateCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggregateCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggregateCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
