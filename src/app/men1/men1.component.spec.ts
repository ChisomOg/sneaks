import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Men1Component } from './men1.component';

describe('Men1Component', () => {
  let component: Men1Component;
  let fixture: ComponentFixture<Men1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Men1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Men1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
