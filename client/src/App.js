import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import DownloadsPage from "./pages/Downloads";
import DonateMe from "./pages/DonateMe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", index: true, element: <HomePage /> },
      { path: "downloads", element: <DownloadsPage /> },
      { path: "donate", element: <DonateMe /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
