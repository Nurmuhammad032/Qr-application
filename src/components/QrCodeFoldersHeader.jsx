import { useState } from "react";
import { FormControl, Select, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { Add, Tune } from "@mui/icons-material";

const QrCodeFoldersHeader = ({ headline, icon }) => {
  const [createdQrCodeTime, setCreatedQrCodeTime] = useState("latest");
  const [showCreatedQrCodeTime, setShowCreatedQrCodeTime] = useState(false);

  const handleChange = (event) => {
    setCreatedQrCodeTime(event.target.value);
  };
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center">
          {icon}
          <h1 className="text-lg ml-2 text-[#797d80]">{headline}</h1>
          <span
            className="ml-3 cursor-pointer mb-1 lg:hidden"
            onClick={() => setShowCreatedQrCodeTime((prev) => !prev)}
          >
            <Tune sx={{ color: "#797d80", fontSize: "1.3rem" }} />
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="hidden lg:block">
            <FormControl
              sx={{
                m: 1,
                minWidth: 120,
                borderRight: "1px solid #eaeaea",
                padding: "0 0.5rem",
              }}
              size="small"
            >
              <Select
                value={createdQrCodeTime}
                label=""
                onChange={handleChange}
                sx={{
                  ".MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "&:hover": {
                    background: "#eaeaea",
                  },
                  color: "#a4a6a8",
                }}
              >
                <MenuItem value={"latest"}>Last Created</MenuItem>
                <MenuItem value={"name"}>Name</MenuItem>
                <MenuItem value={"most"}>Most Scanned</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Link
            to="/account/create"
            className="px-6 py-1 bg-[#90c52d] rounded-sm text-white font-semibold"
          >
            <Add />{" "}
            <span className="hidden md:inline-block">Creat Qr code</span>
          </Link>
        </div>
      </div>
      {showCreatedQrCodeTime && (
        <div
          className="text-center bg-[#eaeaea] w-[18rem] mx-auto mt-3 lg:hidden"
          style={{}}
        >
          <FormControl
            sx={{
              m: 1,
              minWidth: 120,
              // padding: "0 0.5rem",
              margin: "0",
            }}
            size="small"
          >
            <Select
              value={createdQrCodeTime}
              label=""
              onChange={handleChange}
              sx={{
                ".MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                color: "#a4a6a8",
              }}
            >
              <MenuItem value={"latest"}>Last Created</MenuItem>
              <MenuItem value={"name"}>Name</MenuItem>
              <MenuItem value={"most"}>Most Scanned</MenuItem>
            </Select>
          </FormControl>
        </div>
      )}
    </>
  );
};

export default QrCodeFoldersHeader;
