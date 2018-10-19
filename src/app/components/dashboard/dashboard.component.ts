import { Component, Input, ViewChild, OnInit, ElementRef, AfterViewChecked } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

declare const io: any;
declare const SmoothieChart: any;
declare const TimeSeries: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewChecked {

  @Input() coinInfo$: any;
  @ViewChild('coinCanvas') coinCanvas: ElementRef;
  found = false;

  mobileCards = [
    { title: 'Card 1',
      cols: 1,
      rows: 1,
      content: ''
    },
    { title: 'BTC',
      cols: 1,
      rows: 1,
      content: ''
    },
    { title: 'ETH',
      cols: 1,
      rows: 1,
      content: ''
    }
  ];

  desktopCards = [
    { title: 'Realtime Data',
      cols: 2,
      rows: 1,
      content: ''
    },
    { title: 'BTC',
      cols: 1,
      rows: 1,
      content: ''
    },
    { title: 'ETH',
      cols: 1,
      rows: 1,
      content: ''
    }
  ];

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.mobileCards;
      }

      return this.desktopCards;
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.coinInfo$.subscribe(_data => {
      this.desktopCards[1].content = _data[0]['BTC']['USD'];
      this.desktopCards[2].content = _data[1]['ETH']['USD'];
    });
  }

  ngAfterViewChecked() {
    if (this.coinCanvas && !this.found) {
      this.found = true;
      const coinSmoothie = new SmoothieChart();
      coinSmoothie.streamTo(document.getElementById('coincanvas'), 1000);
      const bit = new TimeSeries();

      coinSmoothie.addTimeSeries(bit,
      { strokeStyle: 'rgb(0, 255, 0)', fillStyle: 'rgba(0, 255, 0, 0.4)', lineWidth: 3 });

      const socket = io.connect('https://streamer.cryptocompare.com/');
        const subscription = ['5~CCCAGG~BTC~USD', '5~CCCAGG~ETH~USD'];
        socket.emit('SubAdd', { subs: subscription });
        socket.on('m', function (message) {
            const messageData = message.split('~');
            const messageType = messageData[4];
            if ((messageType === '1' || messageType === '2')  && messageData[2] === 'BTC') {
              bit.append(new Date().getTime(), parseFloat(messageData[5]));
            }
        });
    }
  }
}
