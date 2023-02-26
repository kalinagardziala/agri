import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinforcementModelsComponent } from './reinforcement-models.component';

describe('ReinforcementModelsComponent', () => {
  let component: ReinforcementModelsComponent;
  let fixture: ComponentFixture<ReinforcementModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinforcementModelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReinforcementModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
