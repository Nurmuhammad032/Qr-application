import { useState, useRef, useContext } from "react";
import Context from "../Context/Context";
import GenerateBtn from "./GenerateBtn";

const TextArea = ({ label }) => {
  const [isFocus, setIsFocus] = useState(true);
  const textareRef = useRef();
  const { dispatch, isWebInvalid } = useContext(Context);

  const handleChange = (e) => {
    if (e.target.value) {
      setIsFocus(false);
    } else {
      setIsFocus(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: "URL_VALUE", payload: textareRef.current.value });
  };

  return (
    <form className="relative" onSubmit={handleSubmit}>
      {isWebInvalid && (
        <p className="absolute -top-4 text-red-600 font-semibold">
          Invalid data
        </p>
      )}
      <textarea
        onChange={handleChange}
        ref={textareRef}
        rows="2"
        className="w-full font-semibold text-[2rem] max-w-none  resize-none placeholder-[#9e9e9e] focus:outline-none"
        placeholder={label}
      ></textarea>
      {isFocus && (
        <span className="absolute left-0 top-[3.3rem] text-[#9e9e9e] pointer-events-none hidden md:block">
          {" "}
          (Your QR Code will be generated automatically){" "}
        </span>
      )}

      <GenerateBtn />
    </form>
  );
};

export default TextArea;
