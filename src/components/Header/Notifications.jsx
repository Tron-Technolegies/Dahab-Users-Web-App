import React from "react";
import useGetAllNotifications from "../../hooks/notifications/useGetAllNotifications";
import Loading from "../Loading";
import Divider from "@mui/material/Divider";
import { formatTimeElapsed, getTimeElapsed } from "../../utils/timeFunction";

export default function Notifications() {
  const { loading, notifications } = useGetAllNotifications();
  return loading ? (
    <Loading />
  ) : (
    <div className="p-3 flex flex-col gap-3">
      {notifications.length > 0 &&
        notifications.map((item) => (
          <div key={item._id} className="flex flex-col gap-2">
            <p className="text-sm">Dahab Cheif</p>
            <p className="text-sm">{item.content}</p>
            <p className="text-xs self-end">
              {formatTimeElapsed(getTimeElapsed(item.createdAt))} ago
            </p>
            <Divider
              sx={{
                borderColor: "#07EAD338",
              }}
            />
          </div>
        ))}
      {!notifications.length && <p>No recent notifications</p>}
    </div>
  );
}
