import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, SignUp, Login, AccountPage, CreateNewQrCode } from "./pages";
import { ContextProvider } from "./Context/Context";

function App() {
  return (
    <Router>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account/*" element={<AccountPage />} />
          <Route path="/account/create" element={<CreateNewQrCode />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
}

export default App;
