# audioBooks App

1. Init new project
``` ng n audioBooks --routing --style=scss --prefix=ab ```
2. Add manin layout
``` ng g c shared/components/main-layout/main-layout ```
3. Add home page
``` ng g c home-page ```
4. Add audiobooks page
``` ng g c audiobook-page ```
5. Modify app-routing.module.ts
6. Add router-outlet to app.component.html
7. Add router-outlet to main-layout.component.html
8. Add admin module in 
```mkdir admin```
```ng g m admin```
    * add routes in admin module
   ```RouterModule.forChild([routes])```
    * add routes in app-routing.module.ts
      https://angular.io/guide/lazy-loading-ngmodules
   ```{
    path: 'admin',
    loadChildren: () => {
      return import('./admin /admin.module').then((m) => m.AdminModule);
    }
9. Add admin-layout component
```ng g c admin/components/admin-layout```
10. Add login page
```ng g c admin/login-page```
11. Add login page in routes in admin.module.ts
12. Add router-outlet to admin-layout.component.html
13. Add pages in admin module
```ng g c admin/dashboard```
```ng g c admin/add-audiobook```
```ng g c admin/edit-page```
14. Add routers in admin.module.ts
