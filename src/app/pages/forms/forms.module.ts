import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';
import { MainNavModule } from '@components/main-nav/main-nav.module';
import { ReactiveFormModule } from '@components/reactive-form/reactive-form.module';

const routes: Routes = [
  { path: '', component: FormsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    MainNavModule,
    ReactiveFormModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormsComponent]
})
export class FormsModule { }
