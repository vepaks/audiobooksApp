import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [AdminLayoutComponent, LoginPageComponent],
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
          //path: localhost:4200/admin/login
          { path: 'login', component: LoginPageComponent },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AdminModule {}
