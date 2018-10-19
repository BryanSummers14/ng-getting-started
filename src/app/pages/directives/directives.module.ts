import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatSliderModule } from '@angular/material';

import { DirectivesComponent } from './directives.component';
import { MainNavModule } from '@components/main-nav/main-nav.module';
import { GrowModule } from '@directives/grow/grow.module';
import { RoleToggleModule } from '@directives/role-toggle/role-toggle.module';

const routes: Routes = [
  { path: '', component: DirectivesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    MainNavModule,
    GrowModule,
    RoleToggleModule,
    MatSliderModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DirectivesComponent]
})
export class DirectivesModule { }
