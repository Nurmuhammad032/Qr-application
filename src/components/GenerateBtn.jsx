import { RestartAlt } from "@mui/icons-material";

const GenerateBtn = () => {
  return (
    <button
      type="submit"
      className="font-bold uppercase text-white text-lg rounded-full bg-[#88C532] px-[5rem] py-2 hover:bg-[#85b62b] mt-5"
    >
      <RestartAlt sx={{ mb: "5px" }} />
      <span className="ml-2">Generate qr code</span>
    </button>
  );
};

export default GenerateBtn;
