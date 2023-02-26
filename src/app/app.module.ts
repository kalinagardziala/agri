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
import { ReinforcementModelsComponent } from './components/pages/reinforcement-models/reinforcement-models.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
