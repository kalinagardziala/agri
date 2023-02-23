import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmportalPageComponent } from './farmportal-page.component';

describe('FarmportalPageComponent', () => {
  let component: FarmportalPageComponent;
  let fixture: ComponentFixture<FarmportalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmportalPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmportalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
