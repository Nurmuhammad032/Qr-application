import { HelpOutlined } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { useState, useContext } from "react";
import Context from "../Context/Context";
import hexRgb from "hex-rgb";
import axios from "axios";
import ColorInput from "./ColorInput";
import Loading from "./Loading";

const frames = [
  {
    id: 1,
    img: "/images/qrcode_1.jpg",
  },
  {
    id: 2,
    img: "/images/qrcode_2.jpg",
  },
  {
    id: 3,
    img: "/images/qrcode_3.jpg",
  },
  {
    id: 4,
    img: "/images/qrcode_4.jpg",
  },
  {
    id: 5,
    img: "/images/qrcode_5.jpg",
  },
  {
    id: 6,
    img: "/images/qrcode_6.jpg",
  },
];

const SelectDesignQrCode = () => {
  const [colorValue, setColorValue] = useState("#ebb2b2");
  const [colorCenter, setColorCenter] = useState("#ebb2b2");
  const [qrImg, setQrImg] = useState(frames[0].img);
  const [qrFrameId, setQrFrameId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const { webData, dispatch, textData, emailData } = useContext(Context);

  const colorChange = (e) => {
    setColorValue(e.target.value);
  };

  const colorCenterChange = (e) => {
    setColorCenter(e.target.value);
  };

  const inputChange = (e) => {
    setColorValue(e.target.value);
  };

  const handleBlur = () => {
    if (!colorValue) {
      setColorValue("#000000");
    }
  };

  // Function is created to post data to api
  const postData = (url, data, type) => {
    axios
      .post(`http://45.90.216.74/${url}/`, data)
      .then(() => {
        dispatch({ type: "OPEN_DESIGN", payload: false });
        dispatch({ type: `${type}`, payload: "" });
      })
      .finally(() => setIsLoading(false));
  };

  let handleClick = () => {
    setIsLoading(true);
    let edgeColors = hexRgb(`${colorValue}`);
    let centerColors = hexRgb(`${colorCenter}`);

    // The data ready to post
    const data = {
      qrdiz: qrFrameId,
      r1: edgeColors.red,
      g1: edgeColors.green,
      b1: edgeColors.blue,
      r2: centerColors.red,
      g2: centerColors.blue,
      b2: centerColors.blue,
      user_profile: 1,
    };

    // Which input is filled by user in account/create page, that data can be post
    if (webData) {
      data.url = webData;
      postData("qrurl", data, "WEB_DATA");
    } else if (textData) {
      data.text = textData;
      postData("qrtext", data, "TEXT_DATA");
    } else if (emailData) {
      data.email = emailData;
      postData("qremail", data, "EMAIL_DATA");
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="w-screen h-screen bg-[#d3dce0] z-10 opacity-[0.6] fixed top-0 left-0 right-0"></div>
      <div className="w-[50rem] bg-white z-20 py-10 px-5 absolute top-[50%] shadow-lg left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-md flex space-x-5">
        <div className="1/3">
          <div className="border-r-2 border-gray-300 pr-5 w-full">
            <div className="h-[15rem] w-full flex items-center justify-center">
              <img
                className="w-[10rem] object-content"
                src={qrImg}
                alt="qrcode"
              />
            </div>
          </div>
        </div>
        <div className="2/3">
          <div>
            <div className="flex mb-2 items-center">
              <h1 className="font-bold mr-3">Frame</h1>
              <Tooltip
                title="Frames make your QR Code stand out from the crowd, inspiring more scans."
                placement="right"
                arrow
              >
                <HelpOutlined sx={{ fontSize: "1rem" }} />
              </Tooltip>
            </div>
            <div className="flex flex-wrap">
              {frames.map((fr) => (
                <div
                  onClick={() => {
                    setQrImg(fr.img);
                    setQrFrameId(fr.id);
                  }}
                  key={fr.id}
                  className={`w-[6rem] h-[6rem] border-[1px] mr-3 mt-4 py-2 px-3 bg-[#f5f8fa] hover:bg-[#e6edf0] rounded-sm flex items-center justify-center cursor-pointer ${
                    qrFrameId === fr.id
                      ? "bg-[rgba(0,191,255,.08)] border-[#00bfff]"
                      : ""
                  }`}
                >
                  <img
                    className="w-[3rem] object-content"
                    src={fr.img}
                    alt="qrcode"
                  />
                </div>
              ))}
            </div>
            <div className="flex space-x-5 mt-5">
              <ColorInput
                color={colorValue}
                setColor={colorChange}
                handleBlur={handleBlur}
                inputChange={inputChange}
                label="Edge"
              />
              <ColorInput
                color={colorCenter}
                setColor={colorCenterChange}
                handleBlur={handleBlur}
                inputChange={colorCenterChange}
                label="Center"
              />
            </div>
          </div>
        </div>
        <button
          onClick={handleClick}
          className="absolute bottom-4 right-4 px-6 py-2 bg-green-600 text-white rounded-sm"
        >
          Generate
        </button>
      </div>
    </>
  );
};

export default SelectDesignQrCode;
