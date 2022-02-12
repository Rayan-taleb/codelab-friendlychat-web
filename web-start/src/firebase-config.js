/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyDA6ISuTffPc2x2A6OKIV5wRVxD5ZvlioE",
  authDomain: "friendlychat-taleb.firebaseapp.com",
  projectId: "friendlychat-taleb",
  storageBucket: "friendlychat-taleb.appspot.com",
  messagingSenderId: "239834090923",
  appId: "1:239834090923:web:8441678151a99bbc5a96ee"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}