import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotelistComponent } from './components/quotelist/quotelist.component';
import { QuotedetailsComponent } from './components/quotedetails/quotedetails.component';
import { QuoteComponent } from './components/quote/quote.component';
import { StrikeQuoteDirective } from './strike-quote.directive';
// import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    QuotelistComponent,
    QuotedetailsComponent,
    QuoteComponent,
    StrikeQuoteDirective,
    // HighlightDirective,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
