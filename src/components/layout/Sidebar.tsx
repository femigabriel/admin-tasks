import React from "react";
import { MenuBarist } from "../services/Services"

import { Link, useMatch, useResolvedPath } from "react-router-dom";

const menu: MenuBarist[] = [
  {
    id: 1,
    title: " Home",
    icon: (
      <img
        src="./assets/icons/home.svg"
        className="cursor-pointer"
        alt="bell"
      />
    ),
    link: "/home",
  },
  {
    id: 2,
    title: "Admin Dashboard",
    icon: (
      <img
        src="./assets/icons/category-2.svg"
        className="cursor-pointer"
        alt="bell"
      />
    ),
    link: "/",
  },
];


export const Sidebar = () => {
  return (
    <div className="sidebar shadow-md px-5 h-screen">
      <div className="pt-10 menu-list ">
        <div>
          <div className="mb-10 sidebar-title">
            <h3 className="font-extrabold">Paybox</h3>
            <p>by LiberyPay</p>
          </div>
          <nav className="mb-7">
            {menu?.map((list: any, index) => {
              return (
                <CustomLink to={list.link} key={index}>
                  <div className="flex py-2">
                    <span className="px-3">{list.icon}</span>
                    <span className="tracking-[-0.011em] ">{list.title}</span>
                  </div>
                </CustomLink>
              );
            })}
          </nav>
        </div>
      </div>

    </div>
  );
};

export function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props} className="">
        {children}
      </Link>
    </li>
  );
}
