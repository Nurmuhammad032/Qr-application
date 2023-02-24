import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Box, CircularProgress, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Context from "../Context/Context";
import axios from "axios";

const Login = () => {
  let navigate = useNavigate();
  const { isLoading, userRegister, dispatch } = useContext(Context);

  // if user logged, navigate account page
  useEffect(() => {
    if (localStorage.getItem("login")) {
      navigate("/account/folder-web");
    }
  }, [navigate]);

  // Check validation
  const [isEmailValidate, setEmailValidate] = useState(false);
  const [isPasswordValidate, setPasswordValidate] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);

  // inputs value
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  // Set inputs value function
  const emailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const passwordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  // Check validation function
  const emailValidate = () => {
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9-\.]+)\.([a-zA-Z]{2,5})$/;

    if (!re.test(emailValue)) {
      setEmailValidate(true);
    } else {
      setEmailValidate(false);
    }
  };

  const passwordValidate = () => {
    const re = /^[a-zA-Z0-9]{4,15}$/;

    if (!re.test(passwordValue)) {
      setPasswordValidate(true);
    } else {
      setPasswordValidate(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "IS_LOADING", payload: true });

    const data = {
      username: emailValue,
      password: passwordValue,
    };

    axios
      .post("https://jasuradmin.pythonanywhere.com/user/login/", data)
      .then(() => userRegister())
      .catch(() => {
        dispatch({ type: "IS_LOADING", payload: false });
        setWrongPassword(true);
        setPasswordValidate(false);
      });
  };

  return (
    <section className="w-full px-5 mx-auto lg:w-[35rem] md:w-[30rem] flex items-center justify-center min-h-screen">
      <div className="w-full">
        <img
          src="https://login.qr-code-generator.com/_nuxt/3d67283525e7e7e75b07c58e5f6f6c88.svg"
          alt="logo"
          className="max-w-[20rem] w-full block mx-auto mb-8"
        />
        <div className="border-2 w-full p-5 rounded-2xl">
          <div className="mt-4 text-center mb-[3.2rem]">
            <p className="text-base">
              No account yet?{" "}
              <Link
                to={"/signup"}
                className="border-b-[1px] border-[#03bfff] pb-1 text-[#1974d2] ml-1"
              >
                Sign up
              </Link>
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <Box
              component="div"
              sx={{
                "& > :not(style)": { width: "100%", padding: "inherit" },
              }}
              autoComplete="off"
            >
              <TextField
                error={isEmailValidate}
                onBlur={emailValidate}
                id="outlined-basic"
                label="Email"
                type={"email"}
                variant="outlined"
                sx={{ marginBottom: "1rem", maxWidth: "100%" }}
                helperText={isEmailValidate ? "Please check your email!" : ""}
                value={emailValue}
                onChange={emailChange}
              />
              <TextField
                error={isPasswordValidate || wrongPassword}
                onBlur={passwordValidate}
                id="outlined-basic"
                label="Password"
                type={"password"}
                variant="outlined"
                sx={{ marginBottom: "1rem" }}
                helperText={
                  isPasswordValidate
                    ? "Incorrect entry!"
                    : wrongPassword
                    ? "Wrong password or user not found."
                    : ""
                }
                value={passwordValue}
                onChange={passwordChange}
              />
            </Box>
            <button
              type="submit"
              className={`h-[2.7rem] w-full rounded-full text-lg  text-white font-semibold relative ${
                isLoading ? "bg-[#a6a6a6]" : "bg-[#00bfff]"
              }`}
            >
              {isLoading ? (
                <CircularProgress
                  size={24}
                  sx={{
                    color: "#595959",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                  }}
                />
              ) : (
                <span>Log in</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
