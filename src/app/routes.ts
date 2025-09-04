import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { MenuComponent } from './pages/menu.component';
import { ContactComponent } from './pages/contact.component';
import { FaqsComponent } from './pages/faqs.component';
import { TestimonialsComponent } from './pages/testimonials.component';
import { LegalComponent } from './pages/legal.component';
import { LocationsComponent } from './pages/locations.component';
import { BlogComponent } from './pages/blog.component';
import { PostComponent } from './pages/post.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'legal', component: LegalComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:slug', component: PostComponent }
];
