// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
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

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app)

const requestPermission = () => {
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.')
        } else {
            console.log('Not granted');
        }
    })
}

export const getDeviceToken = async () => {
    requestPermission()
    const currentToken = await getToken(messaging, { vapidKey: "BJESR0Zi2d7yRJ2huL_c6-I8vJLAmoPGD6qqTQPBhqsXL4VwHwVCRVRulrL4KNKsJaxFL2ENM1Un6ywMVL2ejNM" });
    console.log(currentToken);
    return currentToken
}

export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        });
    });
