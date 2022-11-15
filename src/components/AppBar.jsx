import SearchIcon from "@mui/icons-material/Search";
import {
  Language,
  PictureAsPdf,
  Collections,
  LibraryMusic,
  TextSnippet,
  Email,
} from "@mui/icons-material";
import { InputBase, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import Context from "../Context/Context";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "4rem",
  backgroundColor: "#53585b",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  width: "100%",
  "& .MuiInputBase-input": {
    border: "1px solid transparent",
    borderRadius: "4rem",
    "&:focus": {
      borderColor: "white",
    },
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const AppBar = ({ openMenu }) => {
  return (
    <div
      className={`fixed top-[4.6rem] ${
        openMenu ? "left-0" : "-left-[22rem]"
      }  bg-[#616568] w-[22-rem] px-4 py-8 min-h-full transition-all`}
    >
      <div>
        <Search>
          <SearchIconWrapper>
            <SearchIcon sx={{ color: "#797d80" }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search QR Codes.."
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </div>
      <p className="mt-6 text-[#a4a6a8] font-semibold m-3">My qr codes</p>
      <div>
        <NavLink
          to="folder-web"
          className="p-1 block w-full hover:bg-[#797d80] text-[#eaeaea] rounded-sm mb-2"
        >
          <Language />
          <span className="ml-3">Website urls</span>
        </NavLink>
        <NavLink
          to="folder-pdf"
          className="p-1 block w-full hover:bg-[#797d80] text-[#eaeaea] rounded-sm mb-2"
        >
          <PictureAsPdf />
          <span className="ml-3">Pdf urls</span>
        </NavLink>
        <NavLink
          to="folder-image"
          className="p-1 block w-full hover:bg-[#797d80] text-[#eaeaea] rounded-sm mb-2"
        >
          <Collections />
          <span className="ml-3">Image urls</span>
        </NavLink>
        <NavLink
          to="folder-music"
          className="p-1 block w-full hover:bg-[#797d80] text-[#eaeaea] rounded-sm mb-2"
        >
          <LibraryMusic />
          <span className="ml-3">Music urls</span>
        </NavLink>
        <NavLink
          to="folder-text"
          className="p-1 block w-full hover:bg-[#797d80] text-[#eaeaea] rounded-sm mb-2"
        >
          <TextSnippet />
          <span className="ml-3">Text urls</span>
        </NavLink>
        <NavLink
          to="folder-email"
          className="p-1 block w-full hover:bg-[#797d80] text-[#eaeaea] rounded-sm mb-2"
        >
          <Email />
          <span className="ml-3">Email urls</span>
        </NavLink>
      </div>
    </div>
  );
};

export default AppBar;
