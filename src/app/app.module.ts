import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotelistComponent } from './components/quotelist/quotelist.component';
import { QuotedetailsComponent } from './components/quotedetails/quotedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotelistComponent,
    QuotedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
