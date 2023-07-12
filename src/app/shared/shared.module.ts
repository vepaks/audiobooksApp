import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';

@NgModule({
  imports: [HttpClientModule, RouterLink, NgIf, RouterLinkActive],
  exports: [HttpClientModule, HeaderComponent, FooterComponent],
  declarations: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
