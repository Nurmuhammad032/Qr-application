const DisplayDataList = ({ icon, title, imgUrl, headerInfo }) => {
  return (
    <div className="mt-5 px-4 py-3 bg-white">
      <div className="flex justify-between items-start ">
        <div className="w-2/3">
          <div className="flex items-end space-x-4">
            <div className="mb-2">{icon}</div>
            <div className="overflow-hidden">
              <p className="text-[#797d80] font-semibold">{title}</p>
              <p className="text-[#797d80] text-2xl w-max">{headerInfo}</p>
            </div>
          </div>
        </div>
        <div className="w-1/3 flex space-x-7 items-center">
          <div>
            <img
              className="w-[10rem]"
              src={`http://45.90.216.74${imgUrl}`}
              alt="qrcode"
            />
          </div>
          <div>
            <a
              href={`http://45.90.216.74${imgUrl}`}
              className="py-2 px-14 text-sky-400 hover:bg-[#25acdd] hover:text-white border-2 border-gray-300 cursor-pointer transition-all"
              download
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayDataList;
