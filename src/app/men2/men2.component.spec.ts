import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Men2Component } from './men2.component';

describe('Men2Component', () => {
  let component: Men2Component;
  let fixture: ComponentFixture<Men2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Men2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Men2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
