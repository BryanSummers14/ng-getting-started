import { Component, OnInit } from '@angular/core';
import { CryptoService } from '@services/crypto.service';

@Component({
  templateUrl: './crypto-board.component.html',
  styleUrls: ['./crypto-board.component.scss']
})
export class CryptoBoardComponent implements OnInit {

  title = 'Crypto Board';
  coinInfo: any;

  constructor(private cryptoService: CryptoService) { }

  ngOnInit() {
    this.coinInfo = this.cryptoService.coinPrices;
  }

}
