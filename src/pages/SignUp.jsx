import { useState, useEffect, useContext } from "react";
import { Box, TextField, CircularProgress } from "@mui/material";
import Context from "../Context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const { isLoading, userRegister, dispatch } = useContext(Context);

  // if user logged, navigate account page
  useEffect(() => {
    if (localStorage.getItem("login")) {
      navigate("/account/folder-web");
    }
  }, [navigate]);

  // Check validation
  const [isUserNameValidate, setIsUserNameValidate] = useState(false);
  const [isEmailValidate, setEmailValidate] = useState(false);
  const [isPasswordValidate, setPasswordValidate] = useState(false);
  // All inputs value
  const [userNameValue, setUsernameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  // Set inputs value function
  const userNameChange = (e) => {
    setUsernameValue(e.target.value);
  };

  const emailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const passwordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  // Check validation function
  const userNameValidate = () => {
    const re = /^[a-zA-Z0-9]{4,20}$/;

    if (!re.test(userNameValue)) {
      setIsUserNameValidate(true);
    } else {
      setIsUserNameValidate(false);
    }
  };

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
      email: emailValue,
      name: userNameValue,
      password: passwordValue,
    };

    axios
      .post("http://172.20.16.188:2000/profile/", data)
      .then(() => userRegister())
      .catch(() => dispatch({ type: "IS_LOADING", payload: false }));
  };

  return (
    <section className="w-full px-5 py-4 mx-auto lg:w-[35rem] md:w-[30rem] flex items-center justify-center min-h-screen">
      <div>
        <img
          src="https://login.qr-code-generator.com/_nuxt/3d67283525e7e7e75b07c58e5f6f6c88.svg"
          alt="logo"
          className="w-[20rem] block mx-auto mb-8"
        />
        <h1 className="text-black text-5xl font-black text-center leading-tight">
          Create, Manage and Track <br />
          <span className="text-[#3874cb]"> all your QR Codes</span> in one
        </h1>
        <p className="text-[#53678c] text-lg text-center mt-5">
          Sign up now and try all features free for 14 days
        </p>

        <form className="mt-[4rem] text-center" onSubmit={handleSubmit}>
          <Box
            component="div"
            sx={{
              "& > :not(style)": { width: "100%" },
            }}
            autoComplete="off"
          >
            <TextField
              error={isUserNameValidate}
              onBlur={userNameValidate}
              id="outlined-basic"
              label="Username"
              variant="outlined"
              sx={{ marginBottom: "1rem" }}
              helperText={
                isUserNameValidate
                  ? "Incorrect entry: Doesn't required gap and must be characters min 4 max 20"
                  : ""
              }
              value={userNameValue}
              onChange={userNameChange}
            />
            <TextField
              error={isEmailValidate}
              onBlur={emailValidate}
              id="outlined-basic"
              label="Email"
              type={"email"}
              variant="outlined"
              sx={{ marginBottom: "1rem" }}
              helperText={isEmailValidate ? "Please check your email!" : ""}
              value={emailValue}
              onChange={emailChange}
            />
            <TextField
              error={isPasswordValidate}
              onBlur={passwordValidate}
              id="outlined-basic"
              label="Password"
              type={"password"}
              variant="outlined"
              sx={{ marginBottom: "1rem" }}
              helperText={
                isPasswordValidate ? "Your password must be min 4 max 20" : ""
              }
              value={passwordValue}
              onChange={passwordChange}
            />
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
                <span className="uppercase">Sign up</span>
              )}
            </button>
          </Box>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
