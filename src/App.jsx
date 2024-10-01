import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Your_Tasks from "./components/Your_Tasks";
import Profile from "./components/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Your_Tasks/><Footer/></>
    },
    {
      path: "/profile",
      element: <><Navbar/><Profile/><Footer/></>
    }
  ])

  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
