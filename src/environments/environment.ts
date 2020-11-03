// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  appName: 'Meowing Cloudflare Worker Logger Website',
  firebase: {
    apiKey: 'AIzaSyAjzO_o7YaCunpyovD6CUIDBb-QB6TVEgs',
    authDomain: 'meowing-cf-worker-logger.firebaseapp.com',
    databaseURL: 'https://meowing-cf-worker-logger.firebaseio.com',
    projectId: 'meowing-cf-worker-logger',
    storageBucket: 'meowing-cf-worker-logger.appspot.com',
    messagingSenderId: '290960042654',
    appId: '1:290960042654:web:25496dfa964f04ca5c298f'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
