import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';
import { ProductsComponent } from './components/products/products.component';

@Component({
  selector: 'app-root',
  standalone: true, // Mark as standalone
  imports: [FormsModule, HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Eldab3Store';
}
