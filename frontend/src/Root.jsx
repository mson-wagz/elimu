import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/ui/Footer";

export default function Root() {
    return (
<div>
    <NavBar />
    <Outlet />
    <Footer />
</div>
    );
}