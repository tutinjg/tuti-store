import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailsendComponent } from './mailsend.component';

describe('MailsendComponent', () => {
  let component: MailsendComponent;
  let fixture: ComponentFixture<MailsendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailsendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailsendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
