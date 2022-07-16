import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="border-b-4 border-white">
      <div className="p-4 text-xl font-semibold">
        <Link
          to="/"
          className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 hover:to-pink-600"
        >
          Workout Builder
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
