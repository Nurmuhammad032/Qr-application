import React from "react";
import { Navbar } from "../components";
import { Download, Check } from "@mui/icons-material";
import { Tooltip, CircularProgress } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { qrGenerationType, tabs } from "../FrontendCustomData/HomeTabs";
import Context from "../Context/Context";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const { urlValue, emailDataSimple, dispatch } = useContext(Context);
  const [qrCodeImg, setQrCodeImg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTab, setCurrentTab] = useState(1);

  const data = {
    qrdiz: 1,
    r1: 0,
    g1: 0,
    b1: 0,
    r2: 0,
    g2: 0,
    b2: 0,
    user_profile: 1,
  };

  // Post data function
  const setData = (check, url, data) => {
    if (check) {
      setIsLoading(true);
      axios
        .post(`http://45.90.216.74/${url}/`, data)
        .then((res) => {
          setQrCodeImg(`${res.data.Data.image}`);
          setIsLoading(false);
          dispatch({ type: "WEB_INVALID", payload: false });
        })
        .catch(() => {
          setIsLoading(false);
          dispatch({ type: "WEB_INVALID", payload: true });
        });
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    axios.get("http://45.90.216.74/qrtext/").then((res) => console.log(res));
  }, []);

  //
  useEffect(() => {
    // If current tab equal to 1 (web) then setData works, else if (text)
    if (currentTab === 1) {
      data.url = urlValue;
      setData(urlValue, "qrurl", data);
    } else if (currentTab === 3) {
      data.text = urlValue;
      setData(urlValue, "qrtext", data);
    }
  }, [urlValue]);

  useEffect(() => {
    // Every change current tab, web validation must be false
    dispatch({ type: "WEB_INVALID", payload: false });
  }, [currentTab]);

  useEffect(() => {
    data.email = emailDataSimple;
    setData(emailDataSimple, "qremail", data);
  }, [emailDataSimple]);

  // if user logged, navigate account page
  useEffect(() => {
    if (localStorage.getItem("login")) {
      navigate("account/folder-web");
    }
  }, []);

  const handleClick = (e) => {
    setCurrentTab(+e.currentTarget.id);
  };

  // Current active tab and default styles
  const currenTabStyle =
    "w-[6rem] border-b-2 border-[#eaeaea] px-1 cursor-pointer bg-[#f7f7f7] mr-6 mb-4";
  const defaultStyle =
    "w-[6rem] border-b-2 border-[#eaeaea] px-1 cursor-pointer mr-6 mb-4";

  return (
    <>
      <div className="mb-20">
        <Navbar />
      </div>
      <section className="py-4 w-full lg:w-[80%] px-5 mx-auto mt-4 lg:flex justify-between items-start lg:space-x-3 ">
        <div
          className="lg:w-2/3 py-5 sm:px-10 px-4 bg-white rounded-md"
          style={{
            boxShadow: "0 14px 16px rgb(0 0 0 / 6%)",
          }}
        >
          <ul className="flex flex-wrap">
            {qrGenerationType.map((qr) => (
              <Tooltip
                key={qr.id}
                title={
                  <span className="text-sm font-normal">{qr.tooltip}</span>
                }
                placement="top-start"
                arrow
              >
                <li
                  id={qr.id}
                  onClick={handleClick}
                  className={
                    qr.id === currentTab ? currenTabStyle : defaultStyle
                  }
                >
                  {qr.icon}
                  <span className="ml-1 uppercase text-xs font-semibold text-[#616568]">
                    {qr.text}
                  </span>
                </li>
              </Tooltip>
            ))}
          </ul>
          <div className="mt-[4rem]">
            {/* Tab is always one */}
            {tabs.filter((tab) => tab.id === currentTab)[0].content}
          </div>
        </div>
        <div
          className="lg:w-1/3 p-5 bg-white rounded-md relative mt-4 lg:mt-0"
          style={{
            boxShadow: "0 14px 16px rgb(0 0 0 / 6%)",
          }}
        >
          <div className="absolute text-white w-16 h-16 bg-[#f1f3f4] -left-9 top-[10rem] rounded-full lg:flex items-center justify-center shadow-inner hidden ">
            <div className="w-[70%] h-[70%] bg-white rounded-full flex items-center justify-center">
              <span className="text-green-400 ">
                {isLoading ? (
                  <div className="pt-1">
                    <CircularProgress />
                  </div>
                ) : (
                  <Check />
                )}
              </span>
            </div>
          </div>
          <div>
            <img
              src={
                qrCodeImg !== null
                  ? qrCodeImg
                  : "https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"
              }
              className="w-[12rem] block mx-auto"
              alt="qrcode"
            />
            <button
              className="uppercase font-bold px-5 py-1 bg-[#88C532] rounded-full text-white mt-3"
              type="file"
            >
              <Download />
              <a
                href={
                  qrCodeImg !== null
                    ? qrCodeImg
                    : "https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"
                }
              >
                download
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
