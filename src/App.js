import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserManagePage from "./pages/UserManagePage/UserManagePage";
import DemoToolkitPage from "./demoToolkit/DemoToolkitPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SpinnerComponent from "./components/SpinnerComponent/SpinnerComponent";

function App() {
  return (
    <>
      <SpinnerComponent />
      <div className="container mx-auto">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserManagePage />} />
            <Route path="/toolkit" element={<DemoToolkitPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
