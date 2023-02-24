import { useRef, useContext, useEffect } from "react";
import Context from "../Context/Context";
import GenerateBtn from "./GenerateBtn";

const TextArea = ({ label }) => {
  const textareRef = useRef();
  const { dispatch, isWebInvalid } = useContext(Context);

  useEffect(() => {
    textareRef.current.value = "";
  }, [label]);

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
        ref={textareRef}
        rows="2"
        className="w-full font-semibold text-[2rem] max-w-none  resize-none placeholder-[#9e9e9e] focus:outline-none"
        placeholder={label}
      ></textarea>

      <GenerateBtn />
    </form>
  );
};

export default TextArea;
