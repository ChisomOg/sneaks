import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Men3Component } from './men3.component';

describe('Men3Component', () => {
  let component: Men3Component;
  let fixture: ComponentFixture<Men3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Men3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Men3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
