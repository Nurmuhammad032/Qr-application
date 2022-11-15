import { PictureAsPdf } from "@mui/icons-material";
import { EnterQrCode, PreviewQrWrapper, PhoneFrame, CreateBtn } from "../";
import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePdf = () => {
  const inputFile = useRef(null);
  const navigate = useNavigate();
  const [file, setFile] = useState();

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { pdf: file };
    axios
      .post("http://172.20.16.188:2000/qrpdf/", data)
      .then(() => navigate("/account/folder-pdf"));
  };

  return (
    <form className="w-full" onSubmit={handleSubmit} action="/action_page.php">
      <div className="flex space-x-4">
        <div className="md:w-2/3 w-full">
          {/* <NameQrCodeInput /> */}
          <EnterQrCode
            title={"Upload PDF"}
            icon={<PictureAsPdf sx={{ color: "#616568", fontSize: "2rem" }} />}
          >
            <p className="text-[#82848f] mb-6">
              Select any PDF from your computer.
            </p>

            <div className="fileField">
              <p className="text-[#a4a6a8]">Upload a PDF file (up to 20MB)</p>
              <div className="w-1/4">
                <label
                  htmlFor="pdf"
                  className="px-8 py-3 bg-[#47bdef] rounded-sm text-white cursor-pointer"
                >
                  Upload PDF
                </label>
                <input
                  type="file"
                  id="pdf"
                  accept=".pdf"
                  className="hidden"
                  onChange={handleChange}
                  ref={inputFile}
                />
              </div>
            </div>
          </EnterQrCode>
        </div>
        <div className="min-w-[23rem] hidden md:block relative">
          {/* <PreviewQrCode imgUrl={previewImgUrl} /> */}
          <PreviewQrWrapper>
            <PhoneFrame>
              <div className="px-1 pt-2 pb-10 bg-[#d85066] text-white">
                <p>
                  Biike Cycles, LLC Catalogue 2.18 - Spring/Summer Our new bikes
                  for this season for riding in the city, mountains, and
                  everything in between.
                </p>
              </div>
              <img
                className="w-[15rem] rounded-sm absolute top-[7.5rem] left-[50%] translate-x-[-50%]"
                src="https://app.qr-code-generator.com/img/generator/pdf/bike-v2.jpg"
                alt="previewImg"
              />
            </PhoneFrame>
          </PreviewQrWrapper>
        </div>
      </div>
      <CreateBtn backBtn={true} disabled={false} />
    </form>
  );
};

export default CreatePdf;
