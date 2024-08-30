import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import DownloadsPage from "./pages/Downloads";
import DonateMe from "./pages/DonateMe";
import PaymentConfirmed from "./pages/PaymentConfirmed";
import ErrorElement from "./components/UI/ErrorElement";
import { loader } from "./pages/PaymentConfirmed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorElement />,
    children: [
      { path: "", index: true, element: <HomePage /> },
      { path: "downloads", element: <DownloadsPage /> },
      { path: "donate", element: <DonateMe /> },
      { path: "success", 
        element: <PaymentConfirmed />, 
        // loader: loader 
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
