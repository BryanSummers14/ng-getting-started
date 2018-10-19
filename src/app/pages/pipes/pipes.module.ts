import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { PipesComponent } from './pipes.component';
import { MatCardModule, MatInputModule, MatButtonModule } from '@angular/material';
import { MainNavModule } from '@components/main-nav/main-nav.module';
import { MultiplyPipeModule } from '@pipes/mul/mul.module';

const routes: Routes = [
  { path: '', component: PipesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MainNavModule,
    MatButtonModule,
    MultiplyPipeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PipesComponent],
})
export class PipesModule { }
