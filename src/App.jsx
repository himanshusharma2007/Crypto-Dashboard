import "./index.css"; // Import Tailwind CSS first
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import "./App.css"; // Then, import your custom CSS file
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Support from "./pages/Support/Support.jsx";
import Transactions from "./pages/Transactions/Transactions.jsx";


const router = createBrowserRouter([
  {
    path: "",
    element:<Dashboard />,
     
  },
  {
    path: "/dashboard",
    element:<Dashboard />,
     
  },
  {
    path: "/transactions",
    element:<Transactions />,
     
  },
  {
    path: "/support",
    element:<Support />,
     
  },
]);
function App() {
  return (
    <div className="bg-lightPurple w-auto h-auto lg:h-screen sm:w-full">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
