import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderdivComponent } from './headerdiv.component';

describe('HeaderdivComponent', () => {
  let component: HeaderdivComponent;
  let fixture: ComponentFixture<HeaderdivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderdivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
