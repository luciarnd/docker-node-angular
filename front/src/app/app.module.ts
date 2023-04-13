import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button'
import { AvatarModule } from 'primeng/avatar'
import { HttpClientModule } from '@angular/common/http'
import { DividerModule } from 'primeng/divider';
import { UserDetailComponent } from './user/userdetail/userdetail.component';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './user/users/users.component';
import { PanelModule} from 'primeng/panel';
import { PaginatorModule} from 'primeng/paginator';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    HttpClientModule,
    AvatarModule,
    DividerModule,
    PanelModule,
    PaginatorModule,
    SkeletonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
