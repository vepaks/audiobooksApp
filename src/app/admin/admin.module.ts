import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { AddAudiobookComponent } from './add-audiobook/add-audiobook.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    DashboardPageComponent,
    AddAudiobookComponent,
    EditPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminLayoutComponent,
        children: [
          // Правим редирект към login page когато няма път в URL адреса
          {
            path: '',
            redirectTo: '/admin/login',
            pathMatch: 'full',
          },
          //path: localhost:4200/admin/
          {path: 'login', component: LoginPageComponent},
          {path: 'dashboard', component: DashboardPageComponent},
          {path: 'add', component: AddAudiobookComponent},
          {path: 'audiobook/:id/edit', component: EditPageComponent},
        ],
      },
    ]),
    MatButtonModule,
  ],
  exports: [RouterModule],
})
export class AdminModule {}
