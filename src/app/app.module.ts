import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from 'src/app/data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipInputComponent } from './components/tip-input/tip-input.component';
import { TipOutputComponent } from './components/tip-output/tip-output.component';

@NgModule({
  declarations: [AppComponent, TipInputComponent, TipOutputComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
