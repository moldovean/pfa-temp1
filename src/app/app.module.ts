import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSliderModule} from "@angular/material/slider";

// const material = [
//   MatMenu
// ];

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    MatSliderModule,
    // MatMenu

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
