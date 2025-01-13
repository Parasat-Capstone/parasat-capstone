import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Users, BarChart2, Settings } from "lucide-react"; // Icons for enhanced design

const Sidebar = () => {
  const navItems = [
    { label: "Dashboard Home", path: "/dashboard", Icon: Home },
    { label: "Subscribers", path: "/dashboard/subscribers", Icon: Users },
    { label: "Reports", path: "/dashboard/reports", Icon: BarChart2 },
    { label: "Settings", path: "/dashboard/settings", Icon: Settings },
  ];

  return (
    <aside className="bg-[#00126B] text-white h-screen w-64 flex flex-col shadow-md">
      {/* Sidebar Header */}
      <div className="p-6 text-center text-2xl font-semibold border-b border-blue-800">
        Admin Dashboard
      </div>

      {/* Navigation Menu */}
      <nav className="flex-grow mt-4">
        <ul className="space-y-2 px-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-blue-800 text-white shadow"
                      : "hover:bg-blue-700 hover:text-white"
                  }`
                }
              >
                <item.Icon className="w-5 h-5 mr-3" /> {/* Icon */}
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
