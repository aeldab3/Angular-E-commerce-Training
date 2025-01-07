import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VisionComponent } from './components/about-us/vision/vision.component';
import { ValuesComponent } from './components/about-us/values/values.component';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/account/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'details/:id/:name', component: DetailsComponent },
  {
    path: 'about',
    component: AboutUsComponent,
    children: [
      { path: '', redirectTo: 'vision', pathMatch: 'full' },
      { path: 'vision', component: VisionComponent },
      { path: 'values', component: ValuesComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }, // Fallback wildcard route
];
