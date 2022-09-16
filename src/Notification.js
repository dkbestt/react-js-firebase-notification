import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { getDeviceToken, onMessageListener } from './firebase';

const Notification = () => {
    const [notification, setNotification] = useState({ title: "", body: "" });
    const notify = () => toast(
        <div>
            <h2>{notification?.title}</h2>
            <p>{notification?.body} </p>
        </div>,
        {
            duration: 5000,
            position: 'bottom-right',
            icon: "🤵",
        }
    );

    useEffect(() => {
        getDeviceToken()
        if (notification?.title) {
            notify()
        }
    }, [notification])

    onMessageListener().then((payload) => {
        // console.log(payload.data,'-----------------------------');
        setNotification({
            title: payload?.notification?.title,
            body: payload?.notification?.body,
        });
    }).catch((err) => console.log('failed: ', err))

    return (
        <Toaster />
    )
}

export default Notification