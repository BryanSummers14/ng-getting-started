import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: '../app/pages/login/login.module#LoginModule'},
  { path: 'home', pathMatch: 'full', canActivate: [AuthGuard], loadChildren: '../app/pages/crypto-board/crypto-board.module#CryptoBoardModule'},
  { path: 'home/forms', pathMatch: 'full', canActivate: [AuthGuard], loadChildren: '../app/pages/forms/forms.module#FormsModule'},
  { path: 'home/directives', pathMatch: 'full', canActivate: [AuthGuard], loadChildren: '../app/pages/directives/directives.module#DirectivesModule'},
  { path: 'home/pipes', pathMatch: 'full', canActivate: [AuthGuard], loadChildren: '../app/pages/pipes/pipes.module#PipesModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
