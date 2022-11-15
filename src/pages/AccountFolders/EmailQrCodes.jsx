import { Email } from "@mui/icons-material";
import {
  QrCodeFoldersHeader,
  NoContent,
  DisplayDataList,
  LoadingComponent,
} from "../../components";
import { useState, useEffect, useContext } from "react";
import Context from "../../Context/Context";

const EmailQrCodes = () => {
  const [displayData, setDisplayData] = useState(null);
  const [emailLength, setEmailLength] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { emailData, fetchData } = useContext(Context);

  useEffect(() => {
    setIsLoading(true);
    fetchData(
      "http://172.20.16.188:2000/qremail/",
      setDisplayData,
      setEmailLength,
      setIsLoading
    );
  }, [emailData]);

  return (
    <div>
      <QrCodeFoldersHeader
        headline={`Email QR Codes (${emailLength})`}
        icon={<Email sx={{ color: "#d4d4d4", fontSize: "2rem" }} />}
      />
      {!isLoading ? (
        displayData?.length ? (
          displayData
            ?.sort((a, b) => b.id - a.id)
            .map((data) => (
              <DisplayDataList
                key={data.id}
                data={data}
                icon={<Email sx={{ fontSize: "2rem", color: "#797d80" }} />}
                title={"Email"}
                imgUrl={data.image}
                headerInfo={data.email}
              />
            ))
        ) : (
          <div className="min-h-[45rem] flex items-center justify-center">
            <NoContent
              text={"There are no email QR Codes"}
              icon={<Email sx={{ color: "#d4d4d4", fontSize: "8rem" }} />}
            />
          </div>
        )
      ) : (
        <LoadingComponent text="Email" />
      )}
    </div>
  );
};

export default EmailQrCodes;
