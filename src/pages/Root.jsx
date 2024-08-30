import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Root</h1>
      <div className=" px-36">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
