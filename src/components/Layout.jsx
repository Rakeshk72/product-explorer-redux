// Import Outlet from React Router.
import { Outlet } from "react-router-dom";

// Import the Navbar component.
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <>
      {/* Display the navigation bar. */}
      <Navbar />

      {/* Display the current page. */}
      <main>
        <Outlet />
      </main>
    </>
  );
}