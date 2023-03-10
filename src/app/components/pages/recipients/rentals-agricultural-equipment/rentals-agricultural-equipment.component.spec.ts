import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalsAgriculturalEquipmentComponent } from './rentals-agricultural-equipment.component';

describe('RentalsAgriculturalEquipmentComponent', () => {
  let component: RentalsAgriculturalEquipmentComponent;
  let fixture: ComponentFixture<RentalsAgriculturalEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalsAgriculturalEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalsAgriculturalEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
