import ContactForm from "./components/contactForm";
import LoginForm from "./components/loginForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ReducerComp } from "./components/Reducer";
function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <h1>Error page this is</h1>,
    },
    {
      path: "/",
      element: <LoginForm />,
    },
    {
      path: "/contact",
      element: <ContactForm />,
    },
    {
      path: "/reducer",
      element: <ReducerComp />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
