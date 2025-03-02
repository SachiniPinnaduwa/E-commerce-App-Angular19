import { Component } from '@angular/core';

import { HeaderComponent } from './component/header/header.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  template: `<app-header /> <router-outlet></router-outlet>`,
  styles: [],
})
export class AppComponent {
  title = 'angular-ecommerce';
}
