import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ClientsAndPartnersComponent } from "./clients-and-partners.component";

describe("ProductsPageComponent", () => {
  let component: ClientsAndPartnersComponent;
  let fixture: ComponentFixture<ClientsAndPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientsAndPartnersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientsAndPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
