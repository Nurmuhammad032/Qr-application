import GenerateBtn from "./GenerateBtn";
import Context from "../Context/Context";
import { useContext, useState } from "react";

const EmailComponent = () => {
  const { dispatch } = useContext(Context);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "EMAIL_SIMPLE", payload: inputValue });
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-lg text-[#616568] font-semibold">Email QR Code</h1>
      <div className="flex justify-between items-start my-4">
        <label htmlFor="email" className="text-gray-500 w-1/4">
          Email:
        </label>
        <div className="flex justify-between w-3/4 flex-wrap">
          <input
            type="email"
            id="email"
            placeholder="Your email"
            className="block focus:outline-none border-2 py-2 px-2 w-[100%]"
            onChange={handleChange}
          />
        </div>
      </div>
      <GenerateBtn />
    </form>
  );
};

export default EmailComponent;
