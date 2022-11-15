import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MenuOpen,
  Person,
  HelpOutline,
  LogoutOutlined,
} from "@mui/icons-material";
import AppBar from "./AppBar";
import {
  Tooltip,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  List,
} from "@mui/material";
import Context from "../Context/Context";
import { useState } from "react";

const Navbar = ({ accountNavbar }) => {
  const navigate = useNavigate();
  const { isOpenMenu, dispatch } = useContext(Context);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <nav
        className="flex justify-between z-10 items-center px-5 bg-white fixed top-0 left-0 right-0 h-[5rem]"
        style={{
          boxShadow:
            accountNavbar &&
            "0 3px 3px -2px rgb(27 41 75 / 12%), 0 3px 4px 0 rgb(27 41 75 / 12%), 0 1px 8px 0 rgb(27 41 75 / 12%)",
        }}
      >
        <div className="flex space-x-3 items-center">
          <div className="flex align-center space-x-2 border-r-[1px] pr-2">
            <img
              src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/logos/egoditor/logo-icon-blue.svg"
              alt=""
              className="block w-10"
            />
            <div className="hidden sm:block">
              <h1 className="text-[1.4rem] font-semibold">QR Code Generator</h1>
              <p className="text-xs font-medium">
                CREATE YOUR QR CODE FOR FREE
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {accountNavbar ? (
              <MenuOpen
                onClick={() => dispatch({ type: "OPEN_MENU" })}
                sx={{
                  transform: `rotate(${isOpenMenu ? "0" : "180deg"})`,
                  cursor: "pointer",
                  color: "#00BFFF",
                  padding: "0.2rem 0.2rem",
                  fontSize: "2rem",
                  borderRadius: "0.2rem",
                  "&:hover": {
                    backgroundColor: "rgb(224, 242, 254, 1)",
                  },
                }}
              />
            ) : (
              <>
                <p className="text-sm uppercase hidden sm:block">Powered by</p>
                <p className="sm:hidden">BY</p>
                <img
                  src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/logos/egoditor/logo-bitly-color.svg"
                  alt=""
                  className="block w-14 pt-1"
                />
              </>
            )}
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-5">
            {!accountNavbar ? (
              <>
                <Link
                  to={"/login"}
                  className="block border-b-2 border-sky-400 text-[#1E94F3]"
                >
                  Login
                </Link>
                <Link
                  to={"/signup"}
                  className="block px-4 py-1 rounded-full text-white font-semibold bg-sky-400"
                >
                  Sign up
                </Link>
              </>
            ) : (
              <>
                <Tooltip
                  title={
                    <span className="text-sm font-normal">
                      customer id: 31 <br />
                      username: nurmuhammad
                    </span>
                  }
                  placement="bottom"
                  arrow
                >
                  <div className="px-2 py-1 rounded-sm hover:bg-sky-100 cursor-pointer">
                    <HelpOutline sx={{ color: "#00BFFF", fontSize: "2rem" }} />
                  </div>
                </Tooltip>
                <div className="border-l-2 border-gray-200 pl-4 relative">
                  <button
                    className="px-2 py-1 rounded-sm font-semibold text-[#1974D2] text-lg hover:bg-sky-100 flex justify-center items-center"
                    onClick={() => setShowDropdown((prev) => !prev)}
                  >
                    <Person sx={{ color: "#00BFFF", fontSize: "2rem" }} />
                    Account
                  </button>
                  {showDropdown && (
                    <div
                      className="absolute z-20 top-16 -left-[10rem] w-[18rem] bg-white rounded-md"
                      style={{
                        boxShadow:
                          "0 2px 4px -1px rgb(27 41 75 / 12%), 0 4px 5px 0 rgb(27 41 75 / 12%), 0 1px 10px 0 rgb(27 41 75 / 12%)",
                      }}
                    >
                      <div>
                        <List
                          sx={{
                            padding: "0.3rem 1rem",
                          }}
                        >
                          <ListItemButton
                            onClick={() => {
                              localStorage.removeItem("login");
                              navigate("/login");
                            }}
                            sx={{
                              my: 1,
                            }}
                          >
                            <ListItemIcon>
                              <LogoutOutlined sx={{ color: "#6F7E85" }} />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <span className="text-[#6F7E85]">log out</span>
                              }
                            />
                          </ListItemButton>
                        </List>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
      {accountNavbar && <AppBar openMenu={isOpenMenu} />}
    </>
  );
};

export default Navbar;
