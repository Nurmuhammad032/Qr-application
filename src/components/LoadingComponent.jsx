import { CircularProgress } from "@mui/material";

const LoadingComponent = ({ text }) => {
  return (
    <div className="text-center mt-7">
      <CircularProgress sx={{ color: "#47bdef" }} />
      <p className="text-gray-600">Loading {text} Qr Codes...</p>
    </div>
  );
};

export default LoadingComponent;
