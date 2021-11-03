import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroLeadComponent } from './registro-lead.component';

describe('RegistroLeadComponent', () => {
  let component: RegistroLeadComponent;
  let fixture: ComponentFixture<RegistroLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroLeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
