import { useContext, useEffect, useState } from "react";
import { Navbar, SelectDesignQrCode } from "../components";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  WebQrCodes,
  ImageQrCodes,
  PdfQrCodes,
  TextQrCodes,
  EmailQrCodes,
  MusicQrCodes,
} from "./";
import Context from "../Context/Context";

const AccountPage = () => {
  const { isOpenMenu, dispatch, webData, textData, emailData, isOpenDesign } =
    useContext(Context);
  const navigate = useNavigate();

  // When navigate to account page, changeContent must be false otherwise in /accunt/create page occured error!
  useEffect(() => {
    dispatch({ type: "CHANGE_CONTENT", payload: false });
  }, []);

  useEffect(() => {
    if (webData || textData || emailData) {
      dispatch({ type: "OPEN_DESIGN", payload: true });
    } else {
      dispatch({ type: "OPEN_DESIGN", payload: false });
    }
  }, [webData, textData, emailData]);

  // if user didn't login, navigate to login page
  useEffect(() => {
    if (localStorage.getItem("login") === null) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <div className="mb-20">
        <Navbar accountNavbar={true} />
      </div>
      {isOpenDesign && <SelectDesignQrCode />}
      <div
        className={`${
          isOpenMenu ? "pl-[20rem]" : "pl-5"
        } w-full transition-all overflow-x-hidden`}
      >
        <div className={`py-4 max-w-[80rem] w-full mx-auto pr-5 min-w-[18rem]`}>
          <Routes>
            <Route path="/folder-web" element={<WebQrCodes />} />
            <Route path="/folder-pdf" element={<PdfQrCodes />} />
            <Route path="/folder-image" element={<ImageQrCodes />} />
            <Route path="/folder-text" element={<TextQrCodes />} />
            <Route path="/folder-email" element={<EmailQrCodes />} />
            <Route path="/folder-music" element={<MusicQrCodes />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
