import { Email } from "@mui/icons-material";
import { useContext } from "react";
import { PreviewQrWrapper, PhoneFrame, EnterQrCode, CreateBtn } from "../";
import Context from "../../Context/Context";

const CreateEmail = () => {
  const { dispatch, emailData, handleSubmit } = useContext(Context);

  const setEmailFunc = (e) => {
    dispatch({ type: "EMAIL_DATA", payload: e.target.value });
  };

  return (
    <form className="w-full" onSubmit={(e) => handleSubmit(e, "email")}>
      <div className="flex space-x-4">
        <div className="md:w-2/3 w-full">
          <EnterQrCode
            title={"Enter an email address"}
            icon={<Email sx={{ color: "#616568", fontSize: "2rem" }} />}
          >
            <h1 className="text-[#82848f] mb-14">
              After scanning the QR Code, users can send an email to the address
              you entered. You may provide a subject and message they can edit
              before sending.
            </h1>
            <div className="flex justify-between items-start my-4">
              <label htmlFor="email" className="text-gray-500 w-1/4">
                Email:
              </label>
              <div className="flex justify-between w-3/4 flex-wrap">
                <input
                  onChange={setEmailFunc}
                  type="email"
                  id="email"
                  placeholder="Your email"
                  className="block focus:outline-none border-2 py-2 px-2 w-[100%]"
                />
              </div>
            </div>
          </EnterQrCode>
        </div>
        <div className="min-w-[23rem] hidden md:block relative">
          <PreviewQrWrapper>
            <PhoneFrame>
              <div className="bg-[#797d80] py-4 px-3">
                <p className="text-center text-white font-thin">Send Email</p>
              </div>
              <div className="py-3 border-b-2 overflow-hidden border-gray-300">
                <span className="mx-4 text-[#bbb]">Address:</span>
                <span className="text-[#428bca] font-semibold">
                  {emailData}
                </span>
              </div>
            </PhoneFrame>
          </PreviewQrWrapper>
        </div>
      </div>
      <CreateBtn backBtn={true} disabled={false} />
    </form>
  );
};

export default CreateEmail;
