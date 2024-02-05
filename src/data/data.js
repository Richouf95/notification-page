import Mark from "../assets/images/avatar-mark-webber.webp";
import Angela from "../assets/images/avatar-angela-gray.webp";
import Jacob from "../assets/images/avatar-jacob-thompson.webp";
import Rizky from "../assets/images/avatar-rizky-hasanuddin.webp";
import Kimberly from "../assets/images/avatar-kimberly-smith.webp";
import Nathan from "../assets/images/avatar-nathan-peterson.webp";
import Anna from "../assets/images/avatar-anna-kim.webp";
import myPicture from "../assets/images/image-chess.webp";

const notificationData = [
    {
        id: 1,
        userAvatar: Mark,
        userName: "Mark Webber",
        notifMessage: "reacted to your recent post",
        notifTarget: "My first tournament today!",
        message: null,
        notifFile: null,
        publishedAt: "1m ago",
        isRead: false
    },
    {
        id: 2,
        userAvatar: Angela,
        userName: "Angela Gray",
        notifMessage: "followed you",
        notifTarget: null,
        message: null,
        notifFile: null,
        publishedAt: "5m ago",
        isRead: false
    },
    {
        id: 3,
        userAvatar: Jacob,
        userName: "Jacob Thompson",
        notifMessage: "has joined your group",
        notifTarget: "Chess Club",
        message: null,
        notifFile: null,
        publishedAt: "1 day ago",
        isRead: false
    },
    {
        id: 4,
        userAvatar: Rizky,
        userName: "Rizky Hasanuddin",
        notifMessage: "sent you a private message",
        notifTarget: null,
        message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        notifFile: null,
        publishedAt: "5 days ago",
        isRead: true
    },
    {
        id: 5,
        userAvatar: Kimberly,
        userName: "Kimberly Smith",
        notifMessage: "commented on your picture",
        notifTarget: null,
        message: null,
        notifFile: myPicture,
        publishedAt: "1 week ago",
        isRead: true
    },
    {
        id: 6,
        userAvatar: Nathan,
        userName: "Nathan Peterson",
        notifMessage: "reacted to your recent post",
        notifTarget: "5 end-game strategies to increase your win rate",
        message: null,
        notifFile: null,
        publishedAt: "2 weeks ago",
        isRead: true
    },
    {
        id: 7,
        userAvatar: Anna,
        userName: "Anna Kim",
        notifMessage: "left the group",
        notifTarget: "Chess Club",
        message: null,
        notifFile: null,
        publishedAt: "2 weeks ago",
        isRead: true
    }
]

export default notificationData;