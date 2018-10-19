import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  title = 'Directives';
  growVal = 2;

  constructor() { }

  ngOnInit() {
  }

}
