import { EnterQrCode, PreviewQrWrapper, PhoneFrame, CreateBtn } from "../";
import { useRef } from "react";
import { Collections } from "@mui/icons-material";

const CreateImage = () => {
  const inputFile = useRef(null);
  return (
    <form className="w-full">
      <div className="flex space-x-4">
        <div className="md:w-2/3 w-full">
          <EnterQrCode
            title={"Upload image"}
            icon={<Collections sx={{ color: "#616568", fontSize: "2rem" }} />}
          >
            <p className="text-[#82848f] mb-6">
              Upload or drag and drop images to include in your gallery. You can
              arrange them once they appear.
            </p>

            <div className="fileField">
              <p className="text-[#a4a6a8]">Upload a image file (up to 20MB)</p>
              <div className="w-1/3">
                <label
                  htmlFor="pdf"
                  className="px-8 py-3 bg-[#47bdef] rounded-sm text-white cursor-pointer"
                >
                  Upload Image
                </label>
                <input
                  type="file"
                  id="pdf"
                  className="hidden"
                  ref={inputFile}
                />
              </div>
            </div>
          </EnterQrCode>
        </div>
        <div className="min-w-[23rem] hidden md:block relative">
          <PreviewQrWrapper>
            <PhoneFrame>
              <img
                className="w-full h-full"
                src="https://app.qr-code-generator.com/img/generator/preview-type-dgallery-en.jpg"
                alt="there's photo"
              />
            </PhoneFrame>
          </PreviewQrWrapper>
        </div>
      </div>
      <CreateBtn backBtn={true} disabled={false} />
    </form>
  );
};

export default CreateImage;
