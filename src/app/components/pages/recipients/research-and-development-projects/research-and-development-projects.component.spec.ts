import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchAndDevelopmentProjectsComponent } from './research-and-development-projects.component';

describe('ResearchAndDevelopmentProjectsComponent', () => {
  let component: ResearchAndDevelopmentProjectsComponent;
  let fixture: ComponentFixture<ResearchAndDevelopmentProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchAndDevelopmentProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchAndDevelopmentProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
