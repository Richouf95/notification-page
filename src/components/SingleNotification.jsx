import React from "react";

function SingleNotification({ currentNotifData }) {
  const direction =
    currentNotifData.message !== null
      ? { flexDirection: "column" }
      : currentNotifData.notifFile !== null
      ? { flexDirection: "row" }
      : {};

  const unReadBackground = !currentNotifData.isRead
    ? { background: "#F6FAFD" }
    : {};

  const groupColor = currentNotifData.notifTarget === "Chess Club" && {
    color: "#0A3278",
  };
  return (
    <div className="singleNotif" style={unReadBackground}>
      <div>
        <img
          className="avatar"
          src={currentNotifData.userAvatar}
          alt={currentNotifData.userAvatar}
        />
      </div>
      <div className="notifBody" style={direction}>
        <div>
          <p>
            <span className="activeItem" style={{ color: "hsl(224, 21%, 14%)", fontWeight: 800 }}>
              {currentNotifData.userName}{" "}
            </span>
            <span style={{ color: "hsl(219, 12%, 42%)", fontWeight: 500 }}>
              {currentNotifData.notifMessage}{" "}
            </span>
            <span
            className="activeItem"
              style={{
                color: "hsl(219, 12%, 42%)",
                fontWeight: 800,
                ...groupColor,
              }}
            >
              {currentNotifData.notifTarget}
            </span>{" "}
            {!currentNotifData.isRead && (
              <span
                className="unreadBadge"
              ></span>
            )}
          </p>
          <p style={{ color: "hsl(219, 12%, 42%)", marginTop: "5px" }}>
            {currentNotifData.publishedAt}
          </p>
        </div>
        <div>
          {currentNotifData.message !== null ? (
            <p className="message" style={{ color: "hsl(219, 12%, 42%)" }}>
              {currentNotifData.message}
            </p>
          ) : currentNotifData.notifFile !== null ? (
            <img
              className="notifFile activeItem"
              src={currentNotifData.notifFile}
              alt={currentNotifData.notifFile}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleNotification;
