import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NotFoundComponent } from './components/not-found/not-found.component';
// import {QuillModule} from "ngx-quill";

@NgModule({
  imports: [
    HttpClientModule,
    RouterLink,
    NgIf,
    RouterLinkActive,
    AngularEditorModule,
    // QuillModule.forRoot(),
  ],
  exports: [
    HttpClientModule,
    HeaderComponent,
    FooterComponent,
    AngularEditorModule,
    // QuillModule,
  ],
  declarations: [HeaderComponent, FooterComponent, NotFoundComponent],
})
export class SharedModule {}
