import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';


import { AppComponent } from './app.component';
import { HoroscopComponent } from './horoscop/horoscop.component';
import { horoscop } from './horoscop/reducers/horoscop.reducer';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    HoroscopComponent
  ],
  imports: [
    BrowserModule,
    MatSelectModule,

    StoreModule.forRoot({zodie: horoscop })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
