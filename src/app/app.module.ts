import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RideComponent } from './ride/ride.component';
import { ParksectionComponent } from './parksection/parksection.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RideComponent,
    ParksectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
