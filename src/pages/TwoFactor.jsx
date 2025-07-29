import React, { useContext, useEffect, useState } from "react";
import FormInput from "../components/FormInput";
import Switch from "@mui/material/Switch";
import { UserContext } from "../UserContext";
import TwoFactorPopup from "../components/twofactor/TwoFactorPopup";
import useGetTwoFAQR from "../hooks/auth/useGetTwoFAQR";
import Loading from "../components/Loading";
import useVerify2FA from "../hooks/auth/useVerify2FA";

export default function TwoFactor() {
  const { user } = useContext(UserContext);
  const [checked, setChecked] = useState(user?.is2FAEnabled);
  const [showQR, setShowQR] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [code, setCode] = useState("");
  const { loading, getQR, qr } = useGetTwoFAQR();
  const { loading: verifyLoading, verify2FA } = useVerify2FA();

  useEffect(() => {
    if (!checked && user?.is2FAEnabled) {
      setShowPopup(true);
    }
  }, [checked]);

  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 flex flex-col gap-5">
      <p className="text-2xl text-[#76C6E0]">2 Factor Authentication</p>
      {verifyLoading ? (
        <Loading />
      ) : (
        <>
          <div className="flex justify-between py-5 border-b border-[#244A66]">
            <p className="text-lg font-semibold">Enable 2FA</p>
            <Switch
              checked={checked}
              onChange={(e) => {
                setChecked(e.target.checked);
              }}
              sx={{
                "& .MuiSwitch-track": {
                  backgroundColor: checked ? "#f50057" : "#ccc", // background when OFF
                },
                // "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                //   backgroundColor: "#f50057", // background when ON
                // },
              }}
            />
          </div>
          {checked && !user?.is2FAEnabled && (
            <div className="flex lg:flex-row flex-col gap-5 lg:justify-around lg:gap-20 item-center my-10">
              <div className="flex flex-col items-center gap-3 relative p-5 rounded">
                <div className="flex flex-col items-center gap-3">
                  <p className={`${!showQR && "hidden"}`}>
                    Scan the QR code using Google Authenticator
                  </p>
                  {loading ? (
                    <Loading />
                  ) : (
                    <img
                      src={`${qr ? qr : "/QRCODE.png"} `}
                      className={`w-32 transition-all duration-300 ${
                        showQR ? "blur-none" : "blur-sm"
                      }`}
                    />
                  )}

                  <p className={`text-sm ${!showQR && "hidden"}`}>
                    The QR code will be automatically detected
                  </p>
                </div>
                {!showQR && (
                  <div className="absolute inset-0 bg-black opacity-50 z-10 flex justify-center items-center">
                    <p
                      className="text-white cursor-pointer"
                      onClick={async () => {
                        await getQR();
                        setShowQR(true);
                      }}
                    >
                      Tap to reveal QR code
                    </p>
                  </div>
                )}
              </div>
              <div className="flex flex-col items-center gap-5">
                <FormInput
                  styles={"bg-[#07EAD31A]"}
                  type={"text"}
                  placeholder={"Enter Code"}
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
                <button
                  onClick={() => verify2FA({ code })}
                  className="px-6 py-2 rounded-md bg-[#07EAD3] text-black w-fit"
                >
                  Enable 2FA
                </button>
              </div>
            </div>
          )}
          {showPopup && (
            <TwoFactorPopup
              open={showPopup}
              setOpen={setShowPopup}
              setChecked={setChecked}
            />
          )}
        </>
      )}
    </div>
  );
}
