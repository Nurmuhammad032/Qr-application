import React from "react";
import { TextField } from "@mui/material";

const ColorInput = ({ color, setColor, handleBlur, inputChange, label }) => {
  return (
    <div className="relative w-[13rem]">
      <input
        type="color"
        value={color}
        onChange={setColor}
        className="w-7 h-7 block absolute right-5 top-2 border-none z-10 cursor-pointer"
      />
      <TextField
        onBlur={handleBlur}
        id="outlined-basic"
        label={`${label} Color`}
        size="small"
        value={color}
        variant="outlined"
        onChange={inputChange}
        sx={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default ColorInput;
