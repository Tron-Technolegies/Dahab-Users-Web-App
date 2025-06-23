import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTour } from "@reactour/tour";

export default function TourWatcher() {
  const { currentStep, setCurrentStep, setIsOpen } = useTour();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // If step 2 is done, and we're still on home, go to miners
    if (currentStep === 2 && location.pathname !== "/my-miners") {
      navigate("/my-miners");
    }
  }, [currentStep, location.pathname]);

  useEffect(() => {
    // Once we're on /my-miners, and step 2 was just completed, wait for DOM
    const waitForElement = async () => {
      if (location.pathname === "/my-miners" && currentStep === 2) {
        const check = () => {
          const el = document.querySelector("#my-miners");
          if (el) {
            // Resume tour at step 2 (now on /my-miners)
            setTimeout(() => {
              setCurrentStep(2); // re-trigger step 2 (which is on page 2)
            }, 300);
          } else {
            setTimeout(check, 100);
          }
        };
        check();
      }
    };
    waitForElement();
  }, [location.pathname, currentStep]);

  return null;
}
