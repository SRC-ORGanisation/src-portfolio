import { Routes } from '@angular/router';
import { AppMain } from './app-main';
import { ProfileSaitejaComponent } from './components/profiles/profile-saiteja.component';
import { ProfileRaviComponent } from './components/profiles/profile-ravi.component';
import { ProfileChakriComponent } from './components/profiles/profile-chakri.component';

export const routes: Routes = [
  { path: '', component: AppMain },
  { path: 'profile/saiteja', component: ProfileSaitejaComponent },
  { path: 'profile/ravi', component: ProfileRaviComponent },
  { path: 'profile/chakri', component: ProfileChakriComponent },
  { path: '**', redirectTo: '' }
];
