import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoTicketComponent } from './auto-ticket/auto-ticket.component';
import { SeatsComponent } from './seats/seats.component';
import { HelloComponent } from './hello.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoTicketComponent,
    SeatsComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, AutoTicketComponent]
})
export class AppModule { }
