import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { IoNotifications } from "react-icons/io5";
import Notifications from "./Notifications";
import useClearNotifications from "../../hooks/notifications/useClearNotifications";
import Loading from "../Loading";
import { useQueryClient } from "@tanstack/react-query";

export default function NotificationDrawer({ user }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const { loading, clearNotification } = useClearNotifications();
  const queryClient = useQueryClient();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {" "}
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          // size="small"
          // sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <div className="text-[#07EAD3] relative cursor-pointer">
            <IoNotifications />
            <p className="md:text-sm md:w-6 w-4 md:h-6 h-4 rounded-full flex justify-center items-center bg-blue-500 absolute -top-3 -right-3">
              {user?.notifications?.length}
            </p>
          </div>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflowY: "scroll",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              backgroundColor: "#011532",
              color: "#FFFFFF",
              border: "1px solid #42E8E03B",
              padding: "15px",
              minWidth: "300px",
              maxWidth: "400px",
              maxHeight: "600px",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "#011532",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {loading && <Loading />}
        <button
          onClick={async () => {
            await clearNotification();
            queryClient.invalidateQueries({ queryKey: ["user-info"] });
            handleClose();
          }}
          className="text-end block ms-auto text-xs underline cursor-pointer"
        >
          Clear all
        </button>
        <Notifications />
      </Menu>
    </>
  );
}
