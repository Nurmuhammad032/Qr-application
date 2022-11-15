import { PictureAsPdf } from "@mui/icons-material";
import {
  QrCodeFoldersHeader,
  NoContent,
  DisplayDataList,
} from "../../components";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const PdfQrCodes = () => {
  const [displayData, setDisplayData] = useState(null);

  useEffect(() => {
    axios
      .get("http://172.20.16.188:2000/qrpdf/")
      .then((res) => setDisplayData(res.data));
  }, []);

  return (
    <div>
      <QrCodeFoldersHeader
        headline={"Pdf QR Codes (0)"}
        icon={<PictureAsPdf sx={{ color: "#d4d4d4", fontSize: "2rem" }} />}
      />
      {displayData?.length ? (
        displayData?.map((data) => (
          <DisplayDataList
            key={data.id}
            data={data}
            icon={<PictureAsPdf sx={{ fontSize: "2rem", color: "#797d80" }} />}
            title={"Pdf"}
            imgUrl={data.image}
            headerInfo={data.url}
          />
        ))
      ) : (
        <div className="min-h-[45rem] flex items-center justify-center">
          <NoContent
            text={"There are no pdf QR Codes"}
            icon={<PictureAsPdf sx={{ color: "#d4d4d4", fontSize: "8rem" }} />}
          />
        </div>
      )}
    </div>
  );
};

export default PdfQrCodes;
