import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import "./App.css";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/Dialogs/*"
              element={<Dialogs state={props.state.dialogsPage} />}
            />
            <Route
              path="/Profile/*"
              element={<Profile state={props.state.profilePage} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
