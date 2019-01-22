import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToevoegenComponent } from './toevoegen/toevoegen.component';
import { ReceptService } from './service/recept.service';
import { AllereceptenComponent } from './allerecepten/allerecepten.component';

@NgModule({
  declarations: [
    AppComponent,
    ToevoegenComponent,
    AllereceptenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ReceptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
