import EnterQrCode from "../EnterQrCode";
import { PreviewQrWrapper, PhoneFrame, CreateBtn } from "../";
import { useContext } from "react";
import { Edit } from "@mui/icons-material";
import Context from "../../Context/Context";

const CreateWeb = () => {
  const { dispatch, webData, handleSubmit } = useContext(Context);

  const handleChange = (e) => {
    dispatch({ type: "WEB_DATA", payload: e.target.value });
  };

  return (
    <form className="w-full" onSubmit={(e) => handleSubmit(e, "web")}>
      <div className="flex space-x-4">
        <div className="md:w-2/3 w-full">
          {/* <NameQrCodeInput /> */}
          <EnterQrCode
            title={"Enter your website"}
            icon={<Edit sx={{ color: "#616568", fontSize: "2rem" }} />}
          >
            <p className="text-[#82848f] mb-6">
              Type in the website to link with your QR Code
            </p>
            <div className="flex justify-between items-center">
              <label
                htmlFor="text"
                className="text-[#797d80] font-semibold w-1/3"
              >
                Website:
              </label>
              <input
                id="text"
                onChange={handleChange}
                type="text"
                placeholder="http://www.my-website.com"
                className="border-[1px] border-[#d4d4d4] py-3 px-1 w-2/3 focus:outline-none"
              />
            </div>
          </EnterQrCode>
        </div>
        <div className="min-w-[23rem] hidden md:block relative">
          {/* <PreviewQrCode imgUrl={previewImgUrl} /> */}
          <PreviewQrWrapper>
            <PhoneFrame>
              <div className="bg-gray-400 py-4 px-3">
                <p className="py-2 w-full h-[2rem] bg-white flex items-center px-2 overflow-hidden">
                  {webData}
                </p>
              </div>
            </PhoneFrame>
          </PreviewQrWrapper>
        </div>
      </div>
      <CreateBtn backBtn={true} disabled={false} />
    </form>
  );
};

export default CreateWeb;
