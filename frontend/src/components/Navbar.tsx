import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="border-b-2 border-green-600">
      <div className="p-4 text-xl font-semibold">
        <Link
          to="/"
          className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-500 hover:to-blue-600"
        >
          Workout Builder
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
