const PreviewQrWrapper = ({ children }) => {
  return (
    <div
      className="min-w-[26rem] max-w-[26rem] bg-white h-screen fixed top-0 pt-[7rem] px-10 overflow-y-scroll"
      style={{
        boxShadow: "0 0 24px 0 rgb(0 0 0 / 10%)",
      }}
    >
      {children}
    </div>
  );
};

export default PreviewQrWrapper;
