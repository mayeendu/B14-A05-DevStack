import logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="flex justify-between container mx-auto border-b border-gray-200 bg-white px-6 py-4">
      <div>
        <img src={logo} />
      </div>
      <div>
        <ul className="flex gap-4 items-center font-medium">
          <li className="text-pink-600">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li> <li>Contacts</li>
        </ul>
      </div>
      <div className="flex justify-between gap-2">
        <button> Sign In </button>
        <button className="btn btn-active btn-secondary rounded-full">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Nav;
