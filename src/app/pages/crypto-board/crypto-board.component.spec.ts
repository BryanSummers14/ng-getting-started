import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoBoardComponent } from './crypto-board.component';

describe('CryptoBoardComponent', () => {
  let component: CryptoBoardComponent;
  let fixture: ComponentFixture<CryptoBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
