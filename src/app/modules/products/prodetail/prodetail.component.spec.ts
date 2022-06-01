import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdetailComponent } from './prodetail.component';

describe('ProdetailComponent', () => {
  let component: ProdetailComponent;
  let fixture: ComponentFixture<ProdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
