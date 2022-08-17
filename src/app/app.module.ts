import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PremierComponent } from './premier/premier.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StockComponent } from './stock/stock.component';

@NgModule({
  declarations: [
    AppComponent,
    PremierComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
