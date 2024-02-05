import React from 'react'

function NotificationHeader({countUnReadNotif, markAsRead}) {
  return (
    <div className='header'>
        <h1>Notifications <span id='countNotification'>{countUnReadNotif}</span></h1>
        <button onClick={markAsRead}>
            Mark all as read
        </button>
    </div>
  )
}

export default NotificationHeader