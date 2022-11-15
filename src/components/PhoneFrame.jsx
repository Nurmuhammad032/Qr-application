const PhoneFrame = ({ children }) => {
  return (
    <div className="w-full group bg-white h-[40rem] rounded-[4rem] py-14 px-5 border-[1px] border-gray-300">
      <div className="w-full h-full border-[1px] relative border-gray-300 overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default PhoneFrame;
