import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ErrorPageComponent } from "./components/pages/error-page/error-page.component";
import { LandingPageComponent } from "./components/pages/landing-page/landing-page.component";
import { AboutPageComponent } from "./components/pages/about-page/about-page.component";
import { ContactPageComponent } from "./components/pages/contact-page/contact-page.component";
import { RecipientsComponent } from "./components/pages/recipients/recipients.component";
import { ClientsAndPartnersComponent } from "./components/pages/clients-and-partners-page/clients-and-partners.component";
import { RecipientsDetailShortComponent } from "./components/pages/recipients/recipients-detail-short/recipients-detail-short.component";
import { RecipientsDetailLongComponent } from "./components/pages/recipients/recipients-detail-long/recipients-detail-long.component";
import { FoodpassPageComponent } from "./components/pages/foodpass-page/foodpass-page.component";
import { FarmportalPageComponent } from "./components/pages/farmportal-page/farmportal-page.component";
import { FarmcloudPageComponent } from "./components/pages/farmcloud-page/farmcloud-page.component";
import { ReinforcementModelsComponent } from "./components/pages/reinforcement-models/reinforcement-models.component";
import { StartupComponent } from "./components/pages/recipients/startup/startup.component";

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "about-us", component: AboutPageComponent },
  { path: "error", component: ErrorPageComponent },
  {
    path: "recipients",
    component: RecipientsComponent,
  },
  {
    path: "recipients-detail-short",
    component: RecipientsDetailShortComponent,
  },
  {
    path: "startup",
    component: StartupComponent,
  },
  {
    path: "recipients-detail-long",
    component: RecipientsDetailLongComponent,
  },
  {
    path: "foodpass",
    component: FoodpassPageComponent,
  },
  {
    path: "farmportal",
    component: FarmportalPageComponent,
  },
  {
    path: "farmcloud",
    component: FarmcloudPageComponent,
  },
  {
    path: "reinforcement-models",
    component: ReinforcementModelsComponent,
  },
  { path: "contact", component: ContactPageComponent },
  { path: "clients-and-partners", component: ClientsAndPartnersComponent },

  // Here add new component

  { path: "**", component: ErrorPageComponent }, // This line will remain down from the whole component list
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
