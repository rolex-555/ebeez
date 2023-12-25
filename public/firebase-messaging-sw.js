/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');
/* eslint-disable no-undef */

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: 'AIzaSyCUG9dzRmYlMiomqWJTRhiy9oal8c2RS48',
  authDomain: 'betaflux-nhmate.firebaseapp.com',
  projectId: 'betaflux-nhmate',
  storageBucket: 'betaflux-nhmate.appspot.com',
  messagingSenderId: '511010023052',
  appId: '1:511010023052:web:f82ce00da3270e6302bda9',
  measurementId: 'G-PSJWHQQY8V',
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    data: { url: `/app/orders/detail/${payload.notification.data?.objectId}` },
  };

  return window.self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
