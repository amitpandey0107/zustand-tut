import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="h-16 bg-slate-600 w-full fixed pl-5 pr-5 flex justify-start items-center z-20">
            <ul className="flex [&>li]:mr-5 [&>li]:text-lg [&>li]:capitalize m-0 p-0" >
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/apidemo">API Demo</Link>
                </li>
                <li>
                    <Link to="/counter">Counter</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar
