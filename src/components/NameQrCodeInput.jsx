import React from "react";
import {
  Box,
  TextField,
  styled,
  Tooltip,
} from "@mui/material";
import { HelpOutline, Language } from "@mui/icons-material";

const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#a4a6a8",
    },
    "&:hover fieldset": {
      borderColor: "#a4a6a8",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#a4a6a8",
    },
  },
  ".css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
    fontSize: "1.5rem",
    lineHeight: "1.9rem",
  },
});

const NameQrCodeInput = () => {
  return (
    <>
      <div className="flex items-center w-full space-x-2">
        <div>
          <Language sx={{ fontSize: "1.9rem", color: "#a4a6a8" }} />
        </div>
        <Box
          component="form"
          sx={{
            width: "100%",
            position: "relative",
          }}
        >
          <CssTextField
            id="outlined-basic"
            label={<span className="text-[#a4a6a8]">Name your qr code</span>}
            variant="outlined"
            sx={{
              width: "100%",
              ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                color: "#616568",
                fontWeight: "500",
                fontSize: "2rem",
                padding: "0.3rem 3rem 0.3rem 1rem",
              },
            }}
          />
          <div className="absolute top-3 right-4">
            <Tooltip
              placement="left"
              arrow
              title={
                <span className="w-[1rem]">
                  Names help you to stay organized and will only appear in your
                  account and are not displayed to customers who scan your QR
                  Codes.
                </span>
              }
            >
              <HelpOutline
                sx={{
                  color: "#c9c9ce",
                  "&:hover": { color: "#616568" },
                }}
              />
            </Tooltip>
          </div>
        </Box>
      </div>
    </>
  );
};

export default NameQrCodeInput;
