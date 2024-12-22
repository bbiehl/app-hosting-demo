import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: process.env['FIREBASE_PROJECT_ID'],
        appId: process.env['FIREBASE_APP_ID'],
        storageBucket: process.env['FIREBASE_STORAGE_BUCKET'],
        apiKey: process.env['FIREBASE_API_KEY'],
        authDomain: process.env['FIREBASE_AUTH_DOMAIN'],
        messagingSenderId: process.env['FIREBASE_MESSAGING_SENDER_ID'],
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
};
