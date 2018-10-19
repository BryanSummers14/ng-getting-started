import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { PipesComponent } from './pipes.component';
import { MatCardModule, MatInputModule, MatButtonModule } from '@angular/material';
import { MainNavModule } from '@components/main-nav/main-nav.module';
import { MultiplyPipeModule } from '@pipes/mul/mul.module';
import { UsersListModule } from '@components/users-list/users-list.module';
import { FormsModule } from '@angular/forms';

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
    UsersListModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PipesComponent],
})
export class PipesModule { }
