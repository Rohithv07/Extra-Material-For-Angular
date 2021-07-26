import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyExchangeRateComponent } from './currency-exchange-rate.component';

describe('CurrencyExchangeRateComponent', () => {
  let component: CurrencyExchangeRateComponent;
  let fixture: ComponentFixture<CurrencyExchangeRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyExchangeRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyExchangeRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
