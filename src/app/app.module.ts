import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ExampleContainerComponent } from "./example-container/example-container.component";
import { DynamicContentOneComponent } from "./dynamic-content-one/dynamic-content-one.component";
import { DynamicContentTwoComponent } from "./dynamic-content-two/dynamic-content-two.component";
import { DialogDemoModule } from "dialog-demo";
import { ComponentTransferComponent } from "./component-transfer/component-transfer.component";

@NgModule({
  declarations: [
    AppComponent,
    ExampleContainerComponent,
    DynamicContentOneComponent,
    DynamicContentTwoComponent,
    ComponentTransferComponent,
  ],
  imports: [BrowserModule, DialogDemoModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DynamicContentOneComponent,
    DynamicContentTwoComponent,
    ComponentTransferComponent,
  ],
})
export class AppModule {}
