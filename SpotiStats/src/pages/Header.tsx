import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { GoBell, GoHome, GoPeople } from "react-icons/go";

import { getCookieValue } from "../Tools/Tools";

const Header = ({ data }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ q: "", type: "artist" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    navigate(`/search?artist=$${value}`);
  };

  return (
    <div>
      <header className="bg-black fixed top-0 w-full z-50">
        <nav className="flex justify-between items-center text-white p-2">
          <NavLink className="" to="/">
            <GoHome size={22} />
          </NavLink>

          <div className="">
            <div className="flex flex-row items-center">
              <form>
                <input
                  type="text"
                  required
                  name="q"
                  className="bg-[#131313] placeholder-[#b5b5b5] font-bold rounded-lg px-4 py-4 text-sm outline-none"
                  placeholder="Search..."
                  onChange={handleChange}
                  value={formData.q}
                />
              </form>
            </div>
          </div>

          <div className="flex flex-row items-center space-x-6">
            <Link to="/">
              <GoBell size={20} />
            </Link>

            <div>
              <Link to="/">
                <GoPeople size={20} />
              </Link>
            </div>

            {data?.images && data?.images.length > 0 && (
              <div>
                <img
                  src={data.images[0].url}
                  className="rounded-full p-1 bg-[#292929] "
                  width={40}
                />
              </div>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;


 