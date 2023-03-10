import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ErrorPageComponent } from "./components/pages/error-page/error-page.component";
import { FooterComponent } from "./components/common/footer/footer.component";
import { PreloaderComponent } from "./components/common/preloader/preloader.component";
import { LandingPageComponent } from "./components/pages/landing-page/landing-page.component";
import { SolutionsComponent } from "./components/pages/landing-page/solutions/solutions.component";
import { HomeoneServicesComponent } from "./components/pages/landing-page/homeone-services/homeone-services.component";
import { HomeoneProcessComponent } from "./components/pages/landing-page/homeone-process/homeone-process.component";
import { ProjectStartComponent } from "./components/pages/landing-page/project-start/project-start.component";
import { HomeoneAboutComponent } from "./components/pages/landing-page/homeone-about/homeone-about.component";
import { HomeoneBannerComponent } from "./components/pages/landing-page/homeone-banner/homeone-banner.component";
import { NavbarComponent } from "./components/common/navbar/navbar.component";
import { AboutPageComponent } from "./components/pages/about-page/about-page.component";
import { AboutpageAboutComponent } from "./components/pages/about-page/aboutpage-about/aboutpage-about.component";
import { AboutpageHistoryComponent } from "./components/pages/about-page/aboutpage-history/aboutpage-history.component";
import { ContactPageComponent } from "./components/pages/contact-page/contact-page.component";
import { RecipientsComponent } from "./components/pages/recipients/recipients.component";
import { ClientsAndPartnersComponent } from "./components/pages/clients-and-partners-page/clients-and-partners.component";
import { RecipientsDetailShortComponent } from "./components/pages/recipients/recipients-detail-short/recipients-detail-short.component";
import { RecipientsDetailLongComponent } from "./components/pages/recipients/recipients-detail-long/recipients-detail-long.component";
import { FoodpassPageComponent } from "./components/pages/foodpass-page/foodpass-page.component";
import { FarmportalPageComponent } from "./components/pages/farmportal-page/farmportal-page.component";
import { FarmcloudPageComponent } from "./components/pages/farmcloud-page/farmcloud-page.component";
import { ReinforcementModelsComponent } from "./components/pages/reinforcement-models/reinforcement-models.component";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { NgSelectModule, NgOption } from "@ng-select/ng-select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxSelectModule } from "ngx-select-ex";
import { RentalsAgriculturalEquipmentComponent } from "./components/pages/recipients/rentals-agricultural-equipment/rentals-agricultural-equipment.component";
import { FruitAndVegetableDistributorsComponent } from "./components/pages/recipients/fruit-and-vegetable-distributors/fruit-and-vegetable-distributors.component";
import { FruitsAndVegetableProcessorsComponent } from "./components/pages/recipients/fruits-and-vegetable-processors/fruits-and-vegetable-processors.component";
import { ResearchAndDevelopmentProjectsComponent } from "./components/pages/recipients/research-and-development-projects/research-and-development-projects.component";
import { AgriculturalProducersComponent } from "./components/pages/recipients/agricultural-producers/agricultural-producers.component";
import { StartupComponent } from "./components/pages/recipients/startup/startup.component";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    FooterComponent,
    PreloaderComponent,
    LandingPageComponent,
    SolutionsComponent,
    ProjectStartComponent,
    HomeoneAboutComponent,
    HomeoneBannerComponent,
    NavbarComponent,
    AboutPageComponent,
    AboutpageAboutComponent,
    AboutpageHistoryComponent,
    ContactPageComponent,
    RecipientsComponent,
    ClientsAndPartnersComponent,
    RecipientsDetailShortComponent,
    RecipientsDetailLongComponent,
    FoodpassPageComponent,
    FarmportalPageComponent,
    FarmcloudPageComponent,
    HomeoneServicesComponent,
    HomeoneProcessComponent,
    ReinforcementModelsComponent,
    RentalsAgriculturalEquipmentComponent,
    FruitAndVegetableDistributorsComponent,
    FruitsAndVegetableProcessorsComponent,
    ResearchAndDevelopmentProjectsComponent,
    AgriculturalProducersComponent,
    StartupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: "pl",
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NgxSelectModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
