import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useReducer } from "react";
import reducer from "./reducer";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const initialState = {
    isOpenMenu: true,
    isLoading: false,
    urlValue: "",
    changeContent: false,
    urlData: null,
    webData: "",
    textData: "",
    emailData: "",
    emailDataSimple: "",
    isOpenDesign: false,
    isWebInvalid: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // If user pass register form, then navigate to account pages
  const userRegister = () => {
    navigate("/account/folder-web");
    localStorage.setItem("login", true);
    dispatch({ type: "IS_LOADING" });
  };

  // account/create page's form is filled by user, navigate to appropriate page
  const handleSubmit = (e, page) => {
    e.preventDefault();
    navigate(`/account/folder-${page}`);
  };

  // Fetch data from api
  const fetchData = (url, setDisplay, setLength, setIsLoading) => {
    axios
      .get(url)
      .then((res) => {
        setDisplay(res.data);
        setLength(res.data?.length);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  };

  return (
    <Context.Provider
      value={{
        userRegister,
        fetchData,
        handleSubmit,
        dispatch,
        ...state,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
