import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";

import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import DownloadsPage from "./pages/Downloads";
import DonateMe from "./pages/DonateMe";
import PaymentConfirmed from "./pages/PaymentConfirmed";
import ErrorElement from "./components/UI/ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorElement />,
    children: [
      { path: "", index: true, element: <HomePage /> },
      { path: "downloads", element: <DownloadsPage /> },
      { path: "donate", element: <DonateMe /> },
      {
        path: "success", element: (
          <PaymentSuccessRouteProtector>
            <PaymentConfirmed />
          </PaymentSuccessRouteProtector>
        )
      },
    ],
  },
]);

function PaymentSuccessRouteProtector({ children }) {
  const location = useLocation();
  const signature = new URLSearchParams(location.search).get('sign')
  return !signature ? <ErrorElement /> : children;
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
