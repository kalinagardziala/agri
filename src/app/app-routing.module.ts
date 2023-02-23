import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GalleryPageComponent } from "./components/pages/gallery-page/gallery-page.component";
import { EventsPageComponent } from "./components/pages/events-page/events-page.component";
import { ErrorPageComponent } from "./components/pages/error-page/error-page.component";
import { CaseStudiesThreeColumnsPageComponent } from "./components/pages/case-studies-three-columns-page/case-studies-three-columns-page.component";
import { HomepageOneComponent } from "./components/pages/homepage-one/homepage-one.component";
import { HomepageTwoComponent } from "./components/pages/homepage-two/homepage-two.component";
import { HomepageThreeComponent } from "./components/pages/homepage-three/homepage-three.component";
import { HomepageFourComponent } from "./components/pages/homepage-four/homepage-four.component";
import { AboutPageComponent } from "./components/pages/about-page/about-page.component";
import { TeamPageComponent } from "./components/pages/team-page/team-page.component";
import { ServicesPageComponent } from "./components/pages/services-page/services-page.component";
import { ServicesDetailsPageComponent } from "./components/pages/services-details-page/services-details-page.component";
import { ContactPageComponent } from "./components/pages/contact-page/contact-page.component";
import { RecipientsComponent } from "./components/pages/recipients/recipients.component";
import { BlogDetailsPageComponent } from "./components/pages/blog-details-page/blog-details-page.component";
import { CaseStudiesDetailsPageComponent } from "./components/pages/case-studies-details-page/case-studies-details-page.component";
import { FaqPageComponent } from "./components/pages/faq-page/faq-page.component";
import { EventsDetailsPageComponent } from "./components/pages/events-details-page/events-details-page.component";
import { CoursesPageComponent } from "./components/pages/courses-page/courses-page.component";
import { CoursesDetailsPageComponent } from "./components/pages/courses-details-page/courses-details-page.component";
import { ProductsPageComponent } from "./components/pages/products-page/products-page.component";
import { RecipientsDetailShortComponent } from "./components/pages/recipients/recipients-detail-short/recipients-detail-short.component";
import { RecipientsDetailLongComponent } from "./components/pages/recipients/recipients-detail-long/recipients-detail-long.component";
import { FoodpassPageComponent } from "./components/pages/foodpass-page/foodpass-page.component";
import { FarmportalPageComponent } from "./components/pages/farmportal-page/farmportal-page.component";

const routes: Routes = [
  { path: "", component: HomepageOneComponent },
  { path: "home-two", component: HomepageTwoComponent },
  { path: "home-three", component: HomepageThreeComponent },
  { path: "home-four", component: HomepageFourComponent },
  { path: "about-us", component: AboutPageComponent },
  { path: "team", component: TeamPageComponent },
  { path: "services", component: ServicesPageComponent },
  { path: "services-details", component: ServicesDetailsPageComponent },
  { path: "gallery", component: GalleryPageComponent },
  { path: "courses", component: CoursesPageComponent },
  { path: "courses-details", component: CoursesDetailsPageComponent },
  { path: "events", component: EventsPageComponent },
  { path: "events-details", component: EventsDetailsPageComponent },
  {
    path: "case-studies-3-columns",
    component: CaseStudiesThreeColumnsPageComponent,
  },
  { path: "case-studies-details", component: CaseStudiesDetailsPageComponent },
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
  { path: "blog-details", component: BlogDetailsPageComponent },
  { path: "contact", component: ContactPageComponent },
  { path: "products", component: ProductsPageComponent },

  // Here add new component

  { path: "**", component: ErrorPageComponent }, // This line will remain down from the whole component list
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
