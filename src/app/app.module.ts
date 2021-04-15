import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { ButtonModule } from "carbon-components-angular";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
