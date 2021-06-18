import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainLeftComponent } from './components/main-left/main-left.component';
import { MainRightComponent } from './components/main-right/main-right.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BottomLeftComponent } from './components/bottom-left/bottom-left.component';
import { BottomRightComponent } from './components/bottom-right/bottom-right.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLeftComponent,
    MainRightComponent,
    BottomLeftComponent,
    BottomRightComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSelectModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
