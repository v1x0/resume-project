import { Routes } from '@angular/router';
import { ResumePageComponent } from './pages/home-page/home.page';

export const routes: Routes = [{
    path: 'es',
    loadComponent: () => import('./pages/home-page/home.page').then(m => m.ResumePageComponent),
    data: {
        language: 'es'
    }
}, {
    path: 'en',
    loadComponent: () => import('./pages/home-page/home.page').then(m => m.ResumePageComponent),
    data: {
        language: 'en'
    }
}, {
    path: '',
    loadComponent: () => import('./pages/home-page/home.page').then(m => m.ResumePageComponent),
    data: {
        language: 'en'
    }
}];
