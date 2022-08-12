import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipInputComponent } from './components/tip-input/tip-input.component';
import { TipOutputComponent } from './components/tip-output/tip-output.component';

@NgModule({
  declarations: [
    AppComponent,
    TipInputComponent,
    TipOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
