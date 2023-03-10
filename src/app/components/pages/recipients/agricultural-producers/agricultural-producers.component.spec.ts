import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturalProducersComponent } from './agricultural-producers.component';

describe('AgriculturalProducersComponent', () => {
  let component: AgriculturalProducersComponent;
  let fixture: ComponentFixture<AgriculturalProducersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgriculturalProducersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgriculturalProducersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
