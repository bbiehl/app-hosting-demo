import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideClientHydration(),
        provideFirebaseApp(() =>
            initializeApp({
                apiKey: 'AIzaSyD3I-WXQ8y9GJLDrAkoXR8vPoUrZg0DDp0',
                authDomain: 'fir-app-hosting-e787b.firebaseapp.com',
                projectId: 'fir-app-hosting-e787b',
                storageBucket: 'fir-app-hosting-e787b.firebasestorage.app',
                messagingSenderId: '912650349399',
                appId: '1:912650349399:web:af06ddfafabfa05f92ac12',
                // projectId: process.env['PROJECT_ID'],
                // appId: process.env['APP_ID'],
                // storageBucket: process.env['STORAGE_BUCKET'],
                // apiKey: process.env['API_KEY'],
                // authDomain: process.env['AUTH_DOMAIN'],
                // messagingSenderId: process.env['MESSAGING_SENDER_ID'],
            })
        ),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideStorage(() => getStorage()),
    ],
};
