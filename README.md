# AppHostingDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.1.

## Firebase project setup

1. Install or update Firebase Tools globally `npm install -g firebase-tools`
2. `firebase login`
3. Initialize a Firebase Project `firebase init`
4. Choose features to setup (i.e. `Firestore`, `App Hosting`, `Storage`, `Emulators`)

## App Hosting

1. Create project aliases (i.e. `production`, `staging`) via `firebase use --add`
2. Create the default `apphosting.yaml` via `firebase init apphosting`
3. For your environment-specific configuration, create a file with the name `apphosting.ENVIRONMENT_NAME.yaml` in order to specify environment-specific overrides. This file has the same format as the default apphosting.yaml and must be located in your app's root directory alongside `apphosting.yaml`.
   > Protip: `touch apphosting.staging.yaml`.
4. Point to the alias you want to create env variables for (i.e. `staging`). `firebase use staging`.
   > Protip: to get the project's backend `firebase apphosting:backends:list`.

### Manual Option

5. For each environment, manually set Firebase project config secrets via the project's Google Cloud Secret Manager.
6. To use each secret, grant the backend's service account access `firebase apphosting:secrets:grantaccess 'mySecretRef' --backend=YOUR_BACKEND`

### CLI Option

5. Set secret variables via `firebase apphosting:secrets:set KEY --project YOUR_PROJECT`

## Handling Rules

1. Point to the project alias `firebase use ALIAS`
2. Publish rules (i.e. `Firestore Security Rules`, `Firestore Indexes`, `Firebase Storage Security Rules`) via `firebase deploy`

## Firebase emulators for local development

Run `firebase emulators:start`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
