import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user/userdetail/userdetail.component';
import { AppComponent } from './app.component';
import { UsersComponent } from './user/users/users.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: UsersComponent},
  {path: 'users/:userId', component: UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
