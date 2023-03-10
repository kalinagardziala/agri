import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitAndVegetableDistributorsComponent } from './fruit-and-vegetable-distributors.component';

describe('FruitAndVegetableDistributorsComponent', () => {
  let component: FruitAndVegetableDistributorsComponent;
  let fixture: ComponentFixture<FruitAndVegetableDistributorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitAndVegetableDistributorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitAndVegetableDistributorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
