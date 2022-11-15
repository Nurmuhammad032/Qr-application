import { useContext } from "react";
import Context from "../Context/Context";
import { ArrowBack } from "@mui/icons-material";

const CreateBtn = ({ backBtn, disabled }) => {
  const { changeContent, dispatch } = useContext(Context);

  const handleClick = () => {
    if (!backBtn) {
      dispatch({ type: "CHANGE_CONTENT", payload: true });
    }
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#424242] text-center w-full py-3">
      {backBtn && (
        <div
          onClick={() => dispatch({ type: "CHANGE_CONTENT", payload: false })}
          className="absolute left-4 top-[50%] translate-y-[-50%] text-[#797d80] hover:text-white transition-all cursor-pointer"
        >
          <ArrowBack /> Back
        </div>
      )}
      <button
        onClick={handleClick}
        type="submit"
        className={`text-white font-semibold py-2 w-[18rem] hover:bg-[#81b028] capitalize rounded-sm bg-[#90c52d] disabled:bg-[#73973b] disabled:text-[#c1c3c5]`}
        disabled={disabled}
      >
        next
      </button>
    </footer>
  );
};

export default CreateBtn;
