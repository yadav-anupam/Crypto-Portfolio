import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "./container";
import Logo from "./Logo";

function Header() {
  const navigate = useNavigate();
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true,
    },
    {
      name: "Connect Wallet",
      slug: "/connectwallet",
      active: true,
    },
  ];

  return (
    <header className="bg-gray-800 py-3 shadow-md">
      <Container>
        <nav className="flex items-center justify-between">
          <div>
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex space-x-4 px-4">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded transition duration-300"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;