import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientsDetailLongComponent } from './recipients-detail-long.component';

describe('RecipientsDetailLongComponent', () => {
  let component: RecipientsDetailLongComponent;
  let fixture: ComponentFixture<RecipientsDetailLongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipientsDetailLongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipientsDetailLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
