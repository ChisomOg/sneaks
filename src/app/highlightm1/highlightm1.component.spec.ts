import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Highlightm1Component } from './highlightm1.component';

describe('Highlightm1Component', () => {
  let component: Highlightm1Component;
  let fixture: ComponentFixture<Highlightm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Highlightm1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Highlightm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
