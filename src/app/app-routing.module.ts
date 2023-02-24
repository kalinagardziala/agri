import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ErrorPageComponent } from "./components/pages/error-page/error-page.component";
import { HomepageOneComponent } from "./components/pages/homepage-one/homepage-one.component";
import { AboutPageComponent } from "./components/pages/about-page/about-page.component";
import { ContactPageComponent } from "./components/pages/contact-page/contact-page.component";
import { RecipientsComponent } from "./components/pages/recipients/recipients.component";
import { FaqPageComponent } from "./components/pages/faq-page/faq-page.component";
import { ClientsAndPartnersComponent } from "./components/pages/clients-and-partners-page/clients-and-partners.component";
import { RecipientsDetailShortComponent } from "./components/pages/recipients/recipients-detail-short/recipients-detail-short.component";
import { RecipientsDetailLongComponent } from "./components/pages/recipients/recipients-detail-long/recipients-detail-long.component";
import { FoodpassPageComponent } from "./components/pages/foodpass-page/foodpass-page.component";
import { FarmportalPageComponent } from "./components/pages/farmportal-page/farmportal-page.component";
import { FarmcloudPageComponent } from "./components/pages/farmcloud-page/farmcloud-page.component";

const routes: Routes = [
  { path: "", component: HomepageOneComponent },
  { path: "about-us", component: AboutPageComponent },
  { path: "error", component: ErrorPageComponent },
  { path: "faq", component: FaqPageComponent },
  {
    path: "recipients",
    component: RecipientsComponent,
  },
  {
    path: "recipients-detail-short",
    component: RecipientsDetailShortComponent,
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
