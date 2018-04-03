import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {Observable} from 'rxjs/Observable';


import * as Horoscop from './actions/horoscop.action';
import { AppState } from './models/horoscop.model';


@Component({
  selector: 'app-horoscop',
  templateUrl: './horoscop.component.html',
  styleUrls: ['./horoscop.component.css']
})
export class HoroscopComponent implements OnInit {
  horoscop$ : Observable<string>
  constructor(private store: Store<AppState>) {
    this.horoscop$ = store.pipe(select('zodie'));
   }

   capricorn() {
     this.store.dispatch(new Horoscop.Capricorn())
   }
   varsator() {
    this.store.dispatch(new Horoscop.Varsator())
  }
  pesti() {
    this.store.dispatch(new Horoscop.Pesti())
  }
  berbec() {
    this.store.dispatch(new Horoscop.Berbec())
  }
  taur() {
    this.store.dispatch(new Horoscop.Taur())
  }
  gemeni() {
    this.store.dispatch(new Horoscop.Gemeni())
  }
  rac() {
    this.store.dispatch(new Horoscop.Rac())
  }
  leu() {
    this.store.dispatch(new Horoscop.Leu())
  }
  fecioara() {
    this.store.dispatch(new Horoscop.Fecioara())
  }
  balanta() {
    this.store.dispatch(new Horoscop.Balanta())
  }
  scorpion() {
    this.store.dispatch(new Horoscop.Scorpion())
  }
  sagetator() {
    this.store.dispatch(new Horoscop.Sagetator())
  }

  ngOnInit() {
  }

}
