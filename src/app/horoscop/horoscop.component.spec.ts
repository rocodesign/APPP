import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoroscopComponent } from './horoscop.component';

describe('HoroscopComponent', () => {
  let component: HoroscopComponent;
  let fixture: ComponentFixture<HoroscopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoroscopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoroscopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
