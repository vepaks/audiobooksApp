import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { AddAudiobookComponent } from './add-audiobook/add-audiobook.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import {AuthGuard} from "./shared/services/auth.guard";
// import {ButtonModule} from "primeng/button";
// import { EditorModule } from 'primeng/editor';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    DashboardPageComponent,
    AddAudiobookComponent,
    EditPageComponent,
    RegisterPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    // ButtonModule,
    // EditorModule,
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
          { path: 'login', component: LoginPageComponent },
          {
            path: 'dashboard',
            component: DashboardPageComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'add',
            component: AddAudiobookComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'audiobook/:id/edit',
            component: EditPageComponent,
            canActivate: [AuthGuard],
          },
          { path: 'register', component: RegisterPageComponent },
        ],
      },
    ]),
  ],
  exports: [RouterModule, AddAudiobookComponent],
  providers: [AuthGuard],
})
export class AdminModule {}
