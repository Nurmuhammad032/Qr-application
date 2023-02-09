import Lottie from "react-lottie-player";
import loadingJson from "../animation/loading.json";

const Loading = () => {
  return (
    <div className="h-screen w-full bg-black/60 absolute left-0 top-0 z-50 flex items-center justify-center">
      <Lottie
        loop
        animationData={loadingJson}
        play
        style={{ width: 150, height: 150 }}
      />
    </div>
  );
};

export default Loading;
