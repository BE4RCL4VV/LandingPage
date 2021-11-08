import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { Srt905Component } from './srt905/srt905.component';
import { Ec401Component } from './ec401/ec401.component';
import { Rga72Component } from './rga72/rga72.component';

@NgModule({
  declarations: [							
    AppComponent,
      NavbarComponent,
      ProductComponent,
      MainComponent,
      AboutComponent,
      Srt905Component,
      Ec401Component,
      Rga72Component
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
