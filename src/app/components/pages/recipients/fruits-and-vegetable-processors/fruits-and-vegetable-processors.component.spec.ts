import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsAndVegetableProcessorsComponent } from './fruits-and-vegetable-processors.component';

describe('FruitsAndVegetableProcessorsComponent', () => {
  let component: FruitsAndVegetableProcessorsComponent;
  let fixture: ComponentFixture<FruitsAndVegetableProcessorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitsAndVegetableProcessorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitsAndVegetableProcessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
