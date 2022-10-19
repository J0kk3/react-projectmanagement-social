import { Route, Routes } from "react-router-dom";
//components
import MainHeader from "./Components/Nav/MainHeader";
//pages
import Home from "./Pages/Home/Home";
import AuthPage from "./Pages/Auth/AuthPage";
import Profile from "./Pages/Profile/Profile";
import ProjectCreate from "./Pages/ProjectCreate/ProjectCreate";
import ProjectManage from "./Pages/ProjectManage/ProjectManage";
import Search from "./Pages/Search/Search";

const App = () =>
{
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={ <AuthPage /> } />
          <Route path="/Home" element={ <Home /> } />
          <Route path="/Profile" element={ <Profile /> } />
          <Route path="/ProjectCreate" element={ <ProjectCreate /> } />
          <Route path="/ProjectManage" element={ <ProjectManage /> } />
          <Route path="/Search" element={ <Search /> } />
        </Routes>
      </main>
    </div>
  );
};

export default App;