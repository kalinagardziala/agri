import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ErrorPageComponent } from "./components/pages/error-page/error-page.component";
import { FooterComponent } from "./components/layouts/footer/footer.component";
import { PreloaderComponent } from "./components/layouts/preloader/preloader.component";
import { HomepageOneComponent } from "./components/pages/homepage-one/homepage-one.component";
import { SolutionsComponent } from "./components/common/solutions/solutions.component";
import { HomeoneServicesComponent } from "./components/pages/homepage-one/homeone-services/homeone-services.component";
import { HomeoneProcessComponent } from "./components/pages/homepage-one/homeone-process/homeone-process.component";
import { HomeoneCaseStudiesComponent } from "./components/pages/homepage-one/homeone-case-studies/homeone-case-studies.component";
import { HomeoneScientistComponent } from "./components/pages/homepage-one/homeone-scientist/homeone-scientist.component";
import { HomeoneTestimonialsComponent } from "./components/pages/homepage-one/homeone-testimonials/homeone-testimonials.component";
import { HomeonePartnerComponent } from "./components/pages/homepage-one/homeone-partner/homeone-partner.component";
import { HomeoneBlogComponent } from "./components/pages/homepage-one/homeone-blog/homeone-blog.component";
import { ProjectStartComponent } from "./components/common/project-start/project-start.component";
import { HomeoneAboutComponent } from "./components/pages/homepage-one/homeone-about/homeone-about.component";
import { HomeoneBannerComponent } from "./components/pages/homepage-one/homeone-banner/homeone-banner.component";
import { SubscribeComponent } from "./components/common/subscribe/subscribe.component";
import { NavbarComponent } from "./components/layouts/navbar/navbar.component";
import { AboutPageComponent } from "./components/pages/about-page/about-page.component";
import { AboutpageAboutComponent } from "./components/pages/about-page/aboutpage-about/aboutpage-about.component";
import { AboutpageHistoryComponent } from "./components/pages/about-page/aboutpage-history/aboutpage-history.component";
import { ContactPageComponent } from "./components/pages/contact-page/contact-page.component";
import { RecipientsComponent } from "./components/pages/recipients/recipients.component";
import { FaqPageComponent } from "./components/pages/faq-page/faq-page.component";
import { ClientsAndPartnersComponent } from "./components/pages/clients-and-partners-page/clients-and-partners.component";
import { RecipientsDetailShortComponent } from "./components/pages/recipients/recipients-detail-short/recipients-detail-short.component";
import { RecipientsDetailLongComponent } from "./components/pages/recipients/recipients-detail-long/recipients-detail-long.component";
import { FoodpassPageComponent } from "./components/pages/foodpass-page/foodpass-page.component";
import { FarmportalPageComponent } from "./components/pages/farmportal-page/farmportal-page.component";
import { FarmcloudPageComponent } from "./components/pages/farmcloud-page/farmcloud-page.component";

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    FooterComponent,
    PreloaderComponent,
    HomepageOneComponent,
    SolutionsComponent,
    HomeoneServicesComponent,
    HomeoneProcessComponent,
    HomeoneCaseStudiesComponent,
    HomeoneScientistComponent,
    HomeoneTestimonialsComponent,
    HomeonePartnerComponent,
    HomeoneBlogComponent,
    ProjectStartComponent,
    HomeoneAboutComponent,
    HomeoneBannerComponent,
    SubscribeComponent,
    NavbarComponent,
    AboutPageComponent,
    AboutpageAboutComponent,
    AboutpageHistoryComponent,
    ContactPageComponent,
    RecipientsComponent,
    FaqPageComponent,
    ClientsAndPartnersComponent,
    RecipientsDetailShortComponent,
    RecipientsDetailLongComponent,
    FoodpassPageComponent,
    FarmportalPageComponent,
    FarmcloudPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
