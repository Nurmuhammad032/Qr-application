import { Edit } from "@mui/icons-material";

const EnterQrCode = ({ children, title, icon }) => {
  return (
    <div className="border-[1px] border-[#d4d4d4] mt-3">
      <div className="py-6 px-4 flex items-center space-x-3">
        {icon}
        <h1 className="text-2xl text-[#616568]">{title}</h1>
      </div>
      <div className="px-20 py-5 bg-white">{children}</div>
    </div>
  );
};

export default EnterQrCode;
