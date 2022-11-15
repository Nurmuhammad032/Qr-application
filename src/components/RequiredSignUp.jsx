import React from "react";
import { Link } from "react-router-dom";

const RequiredSignUp = ({ heading, info }) => {
  return (
    <div>
      <div className="mb-[3rem]">
        <h1 className="text-lg text-[#616568] font-semibold">{heading}</h1>
        <p className="text-[#797d80] text-lg mt-4">{info}</p>
      </div>
      <Link
        to="signup"
        className="tracking-wide font-semibold mt-5 text-white uppercase bg-sky-400 px-10 py-2 rounded-sm"
      >
        Sign Up for free
      </Link>
    </div>
  );
};

export default RequiredSignUp;
