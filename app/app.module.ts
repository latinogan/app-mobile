app.module.ts
import {NgModule, No_ERRORS_SCHEMA } from "@angular/core";
import {NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import {AppRoutingModule } from "./app-routing.module";
import {appComponent } from "./app.component";

@ngModule ({
bootstrap:[
      AppComponent
],

imports: [
    AppRoutingModule,
    NativeScriptModule,
    NativeScriptUISideDrawerModule
].

declarations:  [
    AppComponent
],
shema: [
   NO_ERRORS_SCHEMA
]

})

export class AppModule { }