import { EnterQrCode, PreviewQrWrapper, PhoneFrame, CreateBtn } from "../";
import { TextSnippet } from "@mui/icons-material";
import { useContext } from "react";
import Context from "../../Context/Context";

const CreateText = () => {
  const { dispatch, textData, handleSubmit } = useContext(Context);

  const handleChange = (e) => {
    dispatch({ type: "TEXT_DATA", payload: e.target.value });
  };

  return (
    <form className="w-full" onSubmit={(e) => handleSubmit(e, "text")}>
      <div className="flex space-x-4">
        <div className="md:w-2/3 w-full">
          <EnterQrCode
            title={"Enter text"}
            icon={<TextSnippet sx={{ color: "#616568", fontSize: "2rem" }} />}
          >
            <h1 className="text-[#82848f] mb-14">
              Enter your contact details. Users can save your info to their
              smartphone address book after scanning or contact you right away.
            </h1>
            <div className="flex items-start justify-between">
              <label htmlFor="message" className="font-semibold">
                Message:
              </label>
              <textarea
                onChange={handleChange}
                id="message"
                className="min-w-none w-2/3 border-2 border-[#d4d4d4] p-3 focus:outline-none font-semibold text-[#616568]"
                placeholder="Enter some text"
              ></textarea>
            </div>
          </EnterQrCode>
        </div>
        <div className="min-w-[23rem] hidden md:block relative">
          <PreviewQrWrapper>
            <PhoneFrame>
              <div className="bg-[#797d80] py-4 px-3">
                <p className="text-center text-white font-thin">My text</p>
              </div>
              <p className="pt-7 pl-3 text-[#777]">{textData}</p>
            </PhoneFrame>
          </PreviewQrWrapper>
        </div>
      </div>
      <CreateBtn backBtn={true} disabled={false} />
    </form>
  );
};

export default CreateText;
