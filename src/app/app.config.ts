import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { connectAuthEmulator, getAuth, provideAuth } from '@angular/fire/auth';
import { connectFirestoreEmulator, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { connectStorageEmulator, getStorage, provideStorage } from '@angular/fire/storage';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
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
        provideAuth(() => {
            const auth = getAuth();
            if (isDevMode()) {
                connectAuthEmulator(auth, 'http://127.0.0.1:9099');
            }
            return auth;
        }),
        provideFirestore(() => {
            const firestore = getFirestore();
            if (isDevMode()) {
                connectFirestoreEmulator(firestore, '127.0.0.1', 8080);
            }
            return firestore;
        }),
        provideStorage(() => {
            const storage = getStorage();
            if (isDevMode()) {
                connectStorageEmulator(storage, '127.0.0.1', 9199);
            }
            return storage;
        }),
    ],
};
