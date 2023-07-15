import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  imports: [
    HttpClientModule,
    RouterLink,
    NgIf,
    RouterLinkActive,
    AngularEditorModule
  ],
  exports: [HttpClientModule,
    HeaderComponent,
    FooterComponent,
    AngularEditorModule
  ],
  declarations: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
