import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskmenuComponent } from './deskmenu.component';

describe('DeskmenuComponent', () => {
  let component: DeskmenuComponent;
  let fixture: ComponentFixture<DeskmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeskmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
