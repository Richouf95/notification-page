import React, { useEffect, useState } from 'react'
import NotificationHeader from './NotificationHeader'
import data from "../data/data"
import SingleNotification from './SingleNotification'

function Notifications() {

    const [notifState, setNotifState] = useState(data);
    const [countUnReadNotif, setCountUnReadNotif] = useState(0);

    useEffect(() => {
        const unRead = data.filter(i => !i.isRead);
        setCountUnReadNotif(unRead.length)
    }, [notifState])

    const markAsRead = () => {
        const notifStateCopy = [...notifState];
        notifStateCopy.forEach(i => {
            if (!i.isRead) {
                i.isRead = true
            }
        })
        setNotifState(notifStateCopy);
    }

  return (
    <>
        <NotificationHeader countUnReadNotif={countUnReadNotif} markAsRead={markAsRead} />
        {
            data.map(item => {
                return(
                    <SingleNotification key={item.id} currentNotifData={item} notifState={notifState} setNotifState={setNotifState}  />
                )
            })
        }
    </>
  )
}

export default Notifications