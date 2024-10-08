import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-292px)] px-1 md:px-2 py-4">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
