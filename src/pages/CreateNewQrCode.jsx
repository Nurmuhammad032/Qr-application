import { ArrowBack, Check } from "@mui/icons-material";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../Context/Context";
import { PreviewQrCode, CreateBtn } from "../components";
import {
  tabTypes,
  generateQrCodeComponents,
} from "../FrontendCustomData/ChangeContent";

const CreateNewQrCode = () => {
  const [previewImgUrl, setPreviewImgUrl] = useState("");
  const [holdId, setHoldId] = useState();
  const { changeContent } = useContext(Context);

  return (
    <>
      <nav
        className="h-[5rem] z-10 bg-white flex items-center fixed top-0 left-0 right-0"
        style={{
          boxShadow:
            "0 3px 3px -2px rgb(27 41 75 / 12%), 0 3px 4px 0 rgb(27 41 75 / 12%), 0 1px 8px 0 rgb(27 41 75 / 12%)",
        }}
      >
        <Link
          to="/account/folder-web"
          className="hover:bg-sky-100 cursor-pointer ml-10 px-3 py-1 rounded-sm"
        >
          <ArrowBack sx={{ color: "#0097d9", fontSize: "1.5rem" }} />
        </Link>
      </nav>
      <div className="mt-[8rem] pb-[10rem]">
        <div className="max-w-[80rem] w-full mx-auto px-3">
          {!changeContent ? (
            <>
              <div className="flex space-x-4">
                <div className="md:w-2/3 w-full">
                  <h1 className="text-center text-[#a4a6a8] flex items-center space-x-3">
                    <span className="w-full h-[1px] bg-[#a4a6a8] block"></span>
                    <span className="w-[70%] capitalize">dynamic codes</span>
                    <span className="w-full h-[1px] bg-[#a4a6a8] block"></span>
                  </h1>
                  <ul className="lg:flex flex-wrap justify-between mt-5">
                    {tabTypes.map((tab) => (
                      <li
                        onClick={() => {
                          setPreviewImgUrl(tab.imgUrl);
                          setHoldId(tab.id);
                        }}
                        key={tab.id}
                        className={`bg-white lg:w-[48%] flex space-x-3 items-center px-3 py-2 lg:mb-3 mb-6 cursor-pointer group relative ${
                          tab.id === holdId && tab.work
                            ? "border-[#90c52d] border-2"
                            : tab.id !== holdId
                            ? "border-gray-300 border-[1px] hover:border-[#a4a6a8]"
                            : "border-red-600 border-2"
                        }`}
                      >
                        <div
                          className={`bg-[#90c52d] flex items-center justify-center rounded-full w-6 h-6 absolute -right-2 -bottom-2 ${
                            tab.id === holdId && tab.work ? "flex" : "hidden"
                          }`}
                        >
                          <Check sx={{ color: "#fff", fontSize: "1.1rem" }} />
                        </div>
                        <div className="group-hover:scale-110 transition-all">
                          {tab.icon}
                        </div>
                        {!tab.work && (
                          <div
                            className={`absolute bottom-0 right-0 px-3 text-white bg-red-600 ${
                              tab.id === holdId ? "block" : "hidden"
                            }`}
                          >
                            Not working
                          </div>
                        )}
                        <div>
                          <h1 className="font-semibold text-[#616568] capitalize">
                            {tab.title}
                          </h1>
                          <p className="text-[#797d80]">{tab.text}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="min-w-[23rem] hidden md:block relative">
                  <PreviewQrCode imgUrl={previewImgUrl} />
                </div>
              </div>
              <CreateBtn backBtn={false} disabled={!previewImgUrl} />
            </>
          ) : (
            <div>
              {
                generateQrCodeComponents?.filter(
                  (comp) => comp.id === holdId
                )[0].content
              }
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CreateNewQrCode;
