import "@mui/material";
import "react-icons";
import "react-icons/bi";
import "react-icons/md";
import "react-icons/bs";
import "react-router-dom";
import { CssBaseline } from "@mui/material";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import PostView from "../views/PostView";
import CreatePostView from "../views/CreatePostView";
import ProfileView from "../views/ProfileView";
import LoginView from "../views/LoginView";
import SignupView from "../views/SignupView";
import ExploreView from "../views/ExploreView";
import PrivateRoute from "../components/util/PrivateRoute";
import SearchView from "../views/SearchView";
import MessengerView from "../views/MessengerView";
import { routes } from "./routes";
import SettingsView from "../components/Settings";
import Error404 from "../components/Results/404";
function Router() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path={routes.FEED} element={<ExploreView />} />
        <Route path={routes.READ_BLOG(":id")} element={<PostView />} />
        <Route
          path={routes.CREATE_BLOG}
          element={
            <PrivateRoute>
              <CreatePostView />
            </PrivateRoute>
          }
        />
        <Route
          path={routes.MESSANGER}
          element={
            <PrivateRoute>
              <MessengerView />
            </PrivateRoute>
          }
        />
        <Route path={routes.SEARCH} element={<SearchView />} />
        <Route path={routes.PROFILE(":id")} element={<ProfileView />} />
        <Route path={routes.LOGIN} element={<LoginView />} />
        <Route path={routes.SIGNUP} element={<SignupView />} />
        <Route path={routes.SETTINGS} element={<SettingsView />} />

        <Route path={routes.Error404} element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
