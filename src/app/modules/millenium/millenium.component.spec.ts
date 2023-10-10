import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilleniumComponent } from './millenium.component';

describe('MilleniumComponent', () => {
  let component: MilleniumComponent;
  let fixture: ComponentFixture<MilleniumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MilleniumComponent]
    });
    fixture = TestBed.createComponent(MilleniumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
