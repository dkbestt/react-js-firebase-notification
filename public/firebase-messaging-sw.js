importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    // dev1.iconfisys@gmail.com (company mail id through create firebase project & configuration)
    // apiKey: "AIzaSyBHiDlm0pM560q3Eqxz72uBiVcHevXzAcI",
    // authDomain: "react-js-noti.firebaseapp.com",
    // projectId: "react-js-noti",
    // storageBucket: "react-js-noti.appspot.com",
    // messagingSenderId: "220201424325",
    // appId: "1:220201424325:web:1bd75cf0b5b968656227ac"

    // dk.bestt@gmail.com (own mail id through create firebase project & configuration)
    apiKey: "AIzaSyCCfdYRqo5OlNWY6KX9A8u7YZCfx1FccDk",
    authDomain: "react-js-push-noti.firebaseapp.com",
    projectId: "react-js-push-noti",
    storageBucket: "react-js-push-noti.appspot.com",
    messagingSenderId: "415346126015",
    appId: "1:415346126015:web:e8096e4d5c8669654aea0a"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,notificationOptions);
});