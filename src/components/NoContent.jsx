const NoContent = ({ text, icon }) => {
  return (
    <div className="text-center">
      {icon}
      <h1 className="text-2xl text-[#616568] mt-5">{text}</h1>
    </div>
  );
};

export default NoContent;
