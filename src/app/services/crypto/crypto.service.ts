import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable, timer } from 'rxjs';
import { combineLatest, map, switchMap, shareReplay } from 'rxjs/operators';

const CACHE_SIZE = 1;
const REFRESH_INTERVAL = 3000;

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  private bitURL = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD,EUR';
  private ethURL = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH&tsyms=USD,EUR';

  private cache$: Observable<Array<any>>;


  constructor(private http: HttpClient) {
  }

  get coinPrices() {
    if (!this.cache$) {
      const timer$ = timer(0, REFRESH_INTERVAL);
      this.cache$ = timer$.pipe(
        switchMap(_ => this.requestCoinPrices()),
        shareReplay(CACHE_SIZE)
      );
    }

    return this.cache$;
  }

  private requestCoinPrices() {
    return of(null).pipe(
      combineLatest(
        this.http.get(this.bitURL),
        this.http.get(this.ethURL)
      ),
      map(_val => _val.splice(1))
    );
  }

}
