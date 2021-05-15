import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityComponentComponent } from './quantity-component.component';

describe('QuantityComponentComponent', () => {
  let component: QuantityComponentComponent;
  let fixture: ComponentFixture<QuantityComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantityComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
