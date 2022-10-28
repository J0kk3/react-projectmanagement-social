//hooks
import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
//components
import AuthContext from "./store/auth-context";
import MainHeader from "./Components/Nav/MainHeader";
//pages
import HomePage from "./Pages/Home/HomePage";
import AuthPage from "./Pages/Auth/AuthPage";
import ProfilePage from "./Pages/Profile/ProfilePage";
import ProfileDetailPage from "./Pages/Profile/ProfileDetailPage";
import ProjectCreatePage from "./Pages/ProjectCreate/ProjectCreatePage";
import ProjectManagePage from "./Pages/ProjectManage/ProjectManagePage";
import SearchPage from "./Pages/Search/SearchPage";

//TODO: hide some routes if not authenticated
const App = () =>
{
  const authCtx = useContext( AuthContext );

  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          { !authCtx.isLoggedIn && <Route path="/" element={ <AuthPage /> } />}
          <Route path="/homepage" element={ <HomePage /> } />
          { authCtx.isLoggedIn && <Route path="/profile" element={ authCtx.isLoggedIn ? <ProfilePage /> : <Navigate to="/" /> } />}
          <Route path="/profile/:profileid" element={ <ProfileDetailPage /> } />
          <Route path="/projectcreate" element={ <ProjectCreatePage /> } />
          <Route path="/projectmanage" element={ <ProjectManagePage /> } />
          <Route path="/search" element={ <SearchPage /> } />
          <Route path="*" element={ <Navigate to="/" replace /> } />
        </Routes>
      </main>
    </div>
  );
};

export default App;
