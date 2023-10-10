import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerdedorComponent } from './perdedor.component';

describe('PerdedorComponent', () => {
  let component: PerdedorComponent;
  let fixture: ComponentFixture<PerdedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerdedorComponent]
    });
    fixture = TestBed.createComponent(PerdedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
