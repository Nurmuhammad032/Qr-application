import { useEffect, useState, useContext } from "react";
import { TextSnippet } from "@mui/icons-material";
import {
  QrCodeFoldersHeader,
  NoContent,
  DisplayDataList,
  LoadingComponent,
} from "../../components";
import Context from "../../Context/Context";

const TextQrCodes = () => {
  const [displayData, setDisplayData] = useState(null);
  const [textLength, setTextLength] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { textData, fetchData } = useContext(Context);

  useEffect(() => {
    setIsLoading(true);
    fetchData(
      "http://45.90.216.74/qrtext/",
      setDisplayData,
      setTextLength,
      setIsLoading
    );
  }, [textData]);

  return (
    <div>
      <QrCodeFoldersHeader
        headline={`Text QR Codes (${textLength})`}
        icon={<TextSnippet sx={{ color: "#d4d4d4", fontSize: "2rem" }} />}
      />
      {!isLoading ? (
        displayData?.length ? (
          displayData
            ?.sort((a, b) => b.id - a.id)
            .map((data) => (
              <DisplayDataList
                key={data?.id}
                data={data}
                icon={
                  <TextSnippet sx={{ fontSize: "2rem", color: "#797d80" }} />
                }
                title={"Text"}
                imgUrl={data.image}
                headerInfo={data.text}
              />
            ))
        ) : (
          <div className="min-h-[45rem] flex items-center justify-center">
            <NoContent
              text={"There are no website QR Codes"}
              icon={<TextSnippet sx={{ color: "#d4d4d4", fontSize: "8rem" }} />}
            />
          </div>
        )
      ) : (
        <LoadingComponent text="Text" />
      )}
    </div>
  );
};

export default TextQrCodes;
