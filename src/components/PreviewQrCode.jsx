import PhoneFrame from "./PhoneFrame";

const PreviewQrCode = ({ imgUrl }) => {
  return (
    <>
      {imgUrl ? (
        <PhoneFrame>
          <div className="w-full h-full bg-[rgba(0,0,0,0.5)] absolute left-0 top-0 text-white group-hover:flex hidden items-center justify-center ">
            No live preview
          </div>
          <img className="h-full w-full" src={imgUrl} alt="qr-code" />
        </PhoneFrame>
      ) : (
        <div className="">
          <img
            className="w-[12rem] mx-auto"
            src="https://cdn.qr-code-generator.com/img/generator/cody/CodyE_PointingLeft.svg"
            alt="noqrcode"
          />
          <p className="text-center font-bold mt-3">
            Please choose one <br /> to view a page <br /> preview
          </p>
        </div>
      )}
    </>
  );
};

export default PreviewQrCode;
