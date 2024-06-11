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
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { app, auth } from "./config/firebaseConfig";

function App() {
  // const [count, setCount] = useState(0)
  console.log("app : ", app);
  console.log("current user in Firebase Server:::s: ", auth.currentUser);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="artworks" element={<ArtworksList />} />
        <Route path="artworks/:objectNumber" element={<ArtworkDetails />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route
          path="secretPage"
          element={
            <ProtectedRoute message={"you need to login to see the secret"}>
              <SecretPage />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="commentsSection"
          element={
            <ProtectedRoute message={"you need to login to see the secret"}>
              <CommentsSection />
            </ProtectedRoute>
          }
        /> */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return (
    <>
      <div>
        <h1>Rijksmuseum Amsterdam - browse the (floral) collection</h1>
        {/* <ArtworksList/> */}

        {/* <AuthContextProvider> */}
        <RouterProvider router={router} />
        {/* </AuthContextProvider> */}
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
