import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tea1Component } from './tea1.component';

describe('Tea1Component', () => {
  let component: Tea1Component;
  let fixture: ComponentFixture<Tea1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tea1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tea1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
