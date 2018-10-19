import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CryptoBoardComponent } from './crypto-board.component';
import { DashboardModule } from '@components/dashboard/dashboard.module';
import { MainNavModule } from '@components/main-nav/main-nav.module';

const routes: Routes = [
  { path: '', component: CryptoBoardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    MainNavModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CryptoBoardComponent]
})
export class CryptoBoardModule { }
