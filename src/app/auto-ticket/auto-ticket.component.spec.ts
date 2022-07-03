import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoTicketComponent } from './auto-ticket.component';

describe('AutoTicketComponent', () => {
  let component: AutoTicketComponent;
  let fixture: ComponentFixture<AutoTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
