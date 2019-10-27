# angular-firebase

## Firebase Authenticate 

Using Firebase Authentication on Websites

### Setup Firebase Authentication

1. From the [Firebase setup page](https://firebase.google.com/docs/web/setup), follow the steps 1 (Create a Firebase project) and 2 (Register your app).

2. Once you register the app, firebase will provide you the Firebase app credentials. Copy the credentials to the `environment.ts` file as the example below. If you close the page, don't worry! You can always access your credentials by going to the Project Settings page in Firebase Console. 

```
export const environment = {
  firebase: {
    apiKey: "api-key",
    authDomain: "project-id.firebaseapp.com",
    databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
    storageBucket: "project-id.appspot.com",
    messagingSenderId: "sender-id",
    appId: "app-id",
    measurementId: "G-measurement-id"
   }
};
```

> **WARNING**: Be careful with your credentials. Do **NOT** publish them!

3. Install `@angular/fire` and `firebase`- the official libraries for Firebase and Angular
4. Import the Firebase libraries into the `app.modules.ts`:

```
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
```

and declare them on the Modules imports section (still on `app.modules.ts`):

```
imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ...
  ],
```

### Integrate Login Providers

Let's enable the Google sign-in option for the app.

1. To select which authentication method to integrate on the app, go to the Firebase project on Firebase console and click on *Develop > Authentication*. On *Sign-in method* tab, you can see all the sing-in options available through Firebase:

![Firebase Sign-in methods](../readme-content/Firebase-Sign-in-methods.PNG)

For each provider, there will be some specific configuration and setup steps to follow. 

#### Google authentication setup

1. Enable Google sign-in provider and follow the instructions for the SHA1 fingerprint:

![Enable Google provider](../readme-content/Firebase-Google-provider-enable.PNG)

2. Check Angular code to use Google login in your application. Use AuthGuard to protect your routes allowing only authorized users to access them. Check this [page](https://angular-templates.io/tutorials/about/firebase-authentication-with-angular) for more login options.


## Host static website with Firebase
1. Build you Angular app in prod:
``` ng build --prod ```

1. Install the firebase CLI:
``` npm install -g firebase-tools ```

1. Login to Firebase
``` finebase login ```

1. Initialize project:
``` firebase init ``` 

- Choose Hosting option.
- On the public directory question, type `dist/<app-name>`
- On the single-page appp question, usually your selection will be `Yes`
- On the question about if you want to overwrite your index.html, say `no`

By the end, you will get a message saying the Firebase initialization is completed.

5. Deploy to Firebase Hosting:

``` firebase deploy```

6. Launch your app from the CLI using the following cmd:

``` firebase open ```

