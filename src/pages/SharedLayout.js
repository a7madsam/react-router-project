import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import Navbar from "../components/Navbar";
// every thing put here will be appear in every page
const SharedLayout = () => {
  return (
    <Fragment>
      <Navbar />
      {/* To show content of the distention page while NESTING */}
      <Outlet />
      {/* you can also add shared Footer here */}
    </Fragment>
  );
};
export default SharedLayout;
