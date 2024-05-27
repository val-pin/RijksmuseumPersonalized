import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
// import { useState } from "react";
import "./App.css";
import ArtworksList from "./pages/ArtworksList";
import About from "./pages/About";
import ArtworkDetails from "./pages/ArtworkDetails";
import MyNavbar from "./components/MyNavbar";
import ErrorPage from "./pages/ErrorPage";
import { AuthContextProvider } from "./context/AuthContext";
import SecretPage from "./pages/SecretPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  // const [count, setCount] = useState(0)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="artworks" element={<ArtworksList />} />
        <Route path="artworks/:objectNumber" element={<ArtworkDetails />} />
        <Route path="about" element={<About />} />
        <Route
          path="secretPage"
          element={
            <ProtectedRoute message={"you need to login to see the secret"}>
              <SecretPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return (
    <>
      <div>
        <h1>Rijksmuseum Amsterdam - browse the selection</h1>
        {/* <ArtworksList/> */}
        <RouterProvider router={router} />
      </div>
    </>
  );
}

const Root = () => {
  return (
    <AuthContextProvider>
      <MyNavbar />
      <Outlet />
    </AuthContextProvider>
  );
};

export default App;
