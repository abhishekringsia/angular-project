import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { HttpModule } from '@angular/http';






@NgModule({
  imports: [
    BrowserModule,
    LoginModule,
    HttpModule,          // Eager loaded since we may need to go here right away as browser loads based on route user enters
    AppRoutingModule,     // Main routes for application
    CoreModule,           // Singleton objects (services, components that are loaded only once, etc.)
    SharedModule ,
    FormsModule ,        // Shared (multi-instance) objects
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
 
}
