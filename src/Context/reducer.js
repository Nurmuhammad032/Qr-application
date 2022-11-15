const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return {
        ...state,
        isOpenMenu: !state.isOpenMenu,
      };
    case "IS_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "URL_VALUE":
      return {
        ...state,
        urlValue: action.payload,
      };
    case "CHANGE_CONTENT":
      return {
        ...state,
        changeContent: action.payload,
      };
    case "URL_DATA":
      return {
        ...state,
        urlData: action.payload,
      };
    case "WEB_DATA":
      return {
        ...state,
        webData: action.payload,
      };
    case "TEXT_DATA":
      return {
        ...state,
        textData: action.payload,
      };
    case "EMAIL_DATA":
      return {
        ...state,
        emailData: action.payload,
      };
    case "EMAIL_SIMPLE":
      return {
        ...state,
        emailDataSimple: action.payload,
      };
    case "OPEN_DESIGN":
      return {
        ...state,
        isOpenDesign: action.payload,
      };
    case "WEB_INVALID":
      return {
        ...state,
        isWebInvalid: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
