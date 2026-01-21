import { Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

export const routes: Routes = [{
    path: '',
    providers: [
        provideHttpClient(),
        provideTranslateService({
        loader: provideTranslateHttpLoader({
            prefix: `${'https://v1x0.github.io/resume-project'}/i18n/`,
            suffix: '.json'
        })
        }),
        providePrimeNG({
            theme: { preset: Aura }
        })
    ],
    children: [{
        path: 'en',
        loadComponent: () => import('./pages/home-page/home.page').then(m => m.ResumePageComponent),
        data: {
            language: 'en'
        }
    }, {
        path: 'es',
        loadComponent: () => import('./pages/home-page/home.page').then(m => m.ResumePageComponent),
        data: {
            language: 'es'
        }
    }, {
        path: '',
        loadComponent: () => import('./pages/home-page/home.page').then(m => m.ResumePageComponent),
        data: {
            language: 'en'
        }
    }]
}];
