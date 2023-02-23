import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodpassPageComponent } from './foodpass-page.component';

describe('FoodpassPageComponent', () => {
  let component: FoodpassPageComponent;
  let fixture: ComponentFixture<FoodpassPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodpassPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodpassPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
