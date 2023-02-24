import React from "react";
import { useContext, useEffect, useState } from "react";
import Context from "../../Context/Context";
import { Language, List } from "@mui/icons-material";
import {
  DisplayDataList,
  NoContent,
  LoadingComponent,
  QrCodeFoldersHeader,
} from "../../components";

const WebQrCodes = () => {
  const [webLength, setWebLength] = useState(0);
  const { webData, fetchData } = useContext(Context);
  const [displayData, setDisplayData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchData(
      "https://jasuradmin.pythonanywhere.com/qrurl/",
      setDisplayData,
      setWebLength,
      setIsLoading
    );
  }, [webData]);
  console.log(displayData);

  return (
    <div>
      <QrCodeFoldersHeader
        headline={`Website QR Codes (${webLength})`}
        icon={<List sx={{ color: "#d4d4d4", fontSize: "2rem" }} />}
      />
      {!isLoading ? (
        displayData?.length ? (
          displayData
            .sort((a, b) => b.id - a.id)
            ?.map((data) => (
              <DisplayDataList
                key={data.id}
                data={data}
                icon={<Language sx={{ fontSize: "2rem", color: "#797d80" }} />}
                title={"Website"}
                imgUrl={data.image}
                headerInfo={data.url}
              />
            ))
        ) : (
          <div className="min-h-[45rem] flex items-center justify-center">
            <NoContent
              text={"There are no website QR Codes"}
              icon={<Language sx={{ color: "#d4d4d4", fontSize: "8rem" }} />}
            />
          </div>
        )
      ) : (
        <LoadingComponent text="Web" />
      )}
    </div>
  );
};

export default WebQrCodes;
