import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidpicComponent } from './midpic.component';

describe('MidpicComponent', () => {
  let component: MidpicComponent;
  let fixture: ComponentFixture<MidpicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidpicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MidpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
