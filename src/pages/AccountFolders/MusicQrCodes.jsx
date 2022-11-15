import {
  QrCodeFoldersHeader,
  NoContent,
  DisplayDataList,
} from "../../components";
import { LibraryMusic } from "@mui/icons-material";
import { useState } from "react";

const MusicQrCodes = () => {
  const [displayData, setDisplayData] = useState(null);

  // useEffect(() => {
  //   axios.get('http://172.20.16.188:2000/qrpdf/').then((res) => setDisplayData(res.data))
  // }, [])

  return (
    <div>
      <QrCodeFoldersHeader
        headline={"Music QR Codes (0)"}
        icon={<LibraryMusic sx={{ color: "#d4d4d4", fontSize: "2rem" }} />}
      />
      {displayData?.length ? (
        displayData?.map((data) => (
          <DisplayDataList
            key={data.id}
            data={data}
            icon={<LibraryMusic sx={{ fontSize: "2rem", color: "#797d80" }} />}
            title={"Music"}
            imgUrl={data.image}
            headerInfo={data.url}
          />
        ))
      ) : (
        <div className="min-h-[45rem] flex items-center justify-center">
          <NoContent
            text={"There are no music QR Codes"}
            icon={<LibraryMusic sx={{ color: "#d4d4d4", fontSize: "8rem" }} />}
          />
        </div>
      )}
    </div>
  );
};

export default MusicQrCodes;
