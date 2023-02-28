import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  selectedUserIds: string[];

  constructor(public translate: TranslateService) {
    translate.addLangs(["pl", "en"]);
    translate.setDefaultLang("pl");

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/pl|en/) ? browserLang : "pl");
  }

  public changeTranslation(event: string) {
    this.translate.use(event);
  }
}
