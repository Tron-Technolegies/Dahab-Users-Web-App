import React, { useContext, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import AccountSettingItem from "./AccountSettingItem";
import { IoLogOutOutline } from "react-icons/io5";
import NotificationSettings from "./NotificationSettings";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useTour } from "@reactour/tour";
import { UserContext } from "../../UserContext";
import useLogout from "../../hooks/auth/useLogout";
import Loading from "../Loading";

export default function AccountSettings({ user }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { ownedMiners } = useContext(UserContext);
  const { setIsOpen, setCurrentStep } = useTour();
  const [openNotification, setOpenNotification] = useState(false);
  const { loading, logout } = useLogout();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar sx={{ width: 32, height: 32 }}>
            {user.username.slice(0, 1)}
          </Avatar>
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
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              backgroundColor: "#011532",
              color: "#FFFFFF",
              border: "1px solid #42E8E03B",
              padding: "15px",
              minWidth: "250px",
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
        <div className="flex flex-col gap-5 w-full">
          <p className=" text-[#76C6E0]">Account Settings</p>
          <div className="w-full">
            <AccountSettingItem
              name={"Profile"}
              handleClose={handleClose}
              link={"/dashboard/profile"}
            />
            <AccountSettingItem
              name={"Notifications"}
              handleClose={handleClose}
              click={() => setOpenNotification(true)}
            />
            <AccountSettingItem
              name={"My Wallet"}
              handleClose={handleClose}
              link={"/dashboard/wallet"}
            />
            <AccountSettingItem
              name={"2FA"}
              handleClose={handleClose}
              link={"/dashboard/2fa"}
            />
            <AccountSettingItem
              name={"Payout Mode"}
              handleClose={handleClose}
              link={"/dashboard/payout-switch"}
            />
          </div>
          <Divider
            sx={{
              borderColor: "#07EAD338",
            }}
          />
          <p className=" text-[#76C6E0]">More</p>
          <div>
            <AccountSettingItem
              name={"Help"}
              handleClose={handleClose}
              link={"/dashboard/help"}
            />
            <MenuItem>
              <button
                className="flex justify-between items-center w-full cursor-pointer disabled:cursor-not-allowed"
                disabled={ownedMiners.length === 0}
                onClick={() => {
                  handleClose();
                  setCurrentStep(0);
                  setIsOpen(true);
                }}
              >
                <p className="text-sm">{"Tutorial"}</p>
                <MdOutlineKeyboardArrowRight />
              </button>
            </MenuItem>
            <AccountSettingItem
              name={"Privacy Policy"}
              handleClose={handleClose}
              link={"/privacy"}
            />
            <AccountSettingItem
              name={"Terms of Use"}
              handleClose={handleClose}
              link={"/terms"}
            />
          </div>
          <Divider
            sx={{
              borderColor: "#07EAD338",
            }}
          />
          <MenuItem
            onClick={async () => {
              await logout();
              handleClose;
            }}
          >
            <div className="flex gap-2 items-center text-[#07EAD3]">
              <IoLogOutOutline />
              <p>Logout</p>
            </div>
          </MenuItem>
          {loading && <Loading />}
        </div>
      </Menu>
      <NotificationSettings
        open={openNotification}
        setOpen={setOpenNotification}
      />
    </>
  );
}
