import { Route } from '@angular/router';
import { MaterialCardComponent } from './components/material-card.component';
import { TailwindCardComponent } from './components/tailwind-card.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'material-card', pathMatch: 'full' },
  { path: 'material-card', component: MaterialCardComponent },
  { path: 'tailwind-card', component: TailwindCardComponent},
];
