import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmcloudPageComponent } from './farmcloud-page.component';

describe('FarmcloudPageComponent', () => {
  let component: FarmcloudPageComponent;
  let fixture: ComponentFixture<FarmcloudPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmcloudPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmcloudPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
