# audioBooks App

**i`m using this cheat sheet for create this app**

Folders-by-feature structure -> https://angular.io/guide/styleguide#folders-by-feature-structure

Using SCSS -> https://angular.io/guide/styleguide#using-scss-style-sheets

Lazy loading NgModules -> https://angular.io/guide/lazy-loading-ngmodules

Preloading NgModules -> https://web.dev/route-preloading-in-angular/

Material Design components for Angular -> https://material.angular.io/guide/getting-started

The best way to use Angular’s environment files: https://seangwright.medium.com/the-best-way-to-use-angulars-environment-files-a0c098551abc

tap operator on RxJs -> https://rxjs.dev/api/operators/tap

exp Firebase token solution: https://stackoverflow.com/questions/69058233/calling-subscribe-after-pipe-not-executing-my-redirection-code 

get token problem solution: https://github.com/Microsoft/TypeScript/issues/8322


### Start project
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
15. Add preloading strategy - https://web.dev/route-preloading-in-angular/
    * in app-routing.module.ts changes 
    ```imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],```
16. Add Material Design components for Angular
    * https://material.angular.io/guide/getting-started
    * ```ng add @angular/material```
17. Add new component for audiobook
    * ```ng g c shared/components/audiobook```
18. Add card in audiobook.component.html
19. Add style for an admin panel
20. Add logout() method in admin-layout.component.ts
21. Add register page
22. Add form in login page 
23. Add validations in login form 
24. Add services and shared module
25. Add interfaces in shared folder
26. Add firebase REST to project 
    * Auth service login with link: https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
    * register with link: https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
27. Add interface in environments folder, best practice - https://seangwright.medium.com/the-best-way-to-use-angulars-environment-files-a0c098551abc
28. Add login logic and set Token in localStorage

