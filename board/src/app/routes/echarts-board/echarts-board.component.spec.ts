import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsBoardComponent } from './echarts-board.component';

describe('EchartsBoardComponent', () => {
  let component: EchartsBoardComponent;
  let fixture: ComponentFixture<EchartsBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchartsBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
