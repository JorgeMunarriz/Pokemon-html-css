import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, Layout, PokemonPageDetail, ProfilePage } from "../pages";
import { ErrorRoute, PrivateRoute, PublicRoute } from "../router";

const RouterPaths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="profile" element={<ProfilePage />} />
            <Route path="pokemon/:id" element={<PokemonPageDetail />} />
          </Route>
          <Route path="*" element={<ErrorRoute/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPaths;
