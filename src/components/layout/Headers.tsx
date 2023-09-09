import React, { useState } from "react";
import { LoginOutlined } from "@ant-design/icons";
import { AuthList } from "../services/Services";
import type { DrawerProps, MenuProps } from "antd";
import { Drawer, Dropdown } from "antd";
import { CustomLink } from "./Sidebar";

export const Headers = (props: AuthList) => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  // Mobile menu items
  const menu = [
    {
      id: 0,
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
      id: 1,
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

  // Proofile dropdown
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a href="/" className="login-link flex">
          <img src="./assets/icons/category-2.svg" className="mt-2" />
          <span className="text-[16px] font-semibold mx-3 mt-2">
            Analytics Dashboard
          </span>
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a href="/" className="login-link  bg-red-200\  flex rounded-md">
          <LoginOutlined className="mt-2 text-red-600" />
          <span className="text-[16px] font-semibold mx-3 text-red-600">
            Log out
          </span>
        </a>
      ),
    },
  ];

  return (
    <div>
      <div className="header bg-white w-full rounded-[30px]">
        <header className="flex justify-between px-10 py-5">
          <div className="mobile-menu"></div>
          <div>
            <h1 className="text-[24px] text-[#242424] font-normal mt-3">
              {props.title}
            </h1>
          </div>
          <div className="flex rounded-full cursor-pointer">
            <img
              src="./assets/icons/notificationIcon.svg"
              className="cursor-pointer mt-3"
              alt="bell"
            />
            <Dropdown menu={{ items }} placement="bottomRight" arrow>
              <div className="flex justify-between mt-1">
                <img
                  src="./assets/images/profile.jpg"
                  alt="profile-img"
                  className="w-[40px] mt-2 h-[40px] mx-3 cursor-pointer rounded-full"
                />
                <div className="mt-3">
                  <h3 className="text-[#000] text-[14px] font-bold">
                    Dexter Olaniyi
                  </h3>
                  <div className="flex ">
                    <p className="text-[#818181] text-[10px] font-normal">
                      Dexterola@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </Dropdown>
          </div>
        </header>
      </div>
      <div className="mobile-header px-5">
        <div className="mt-14 ">
          <h3 className="text-[#fff] text-[18px] font-normal tracking-[-0.24px]">
            Analytics dashboard
          </h3>
        </div>
        <button
          onClick={showDrawer}
          className="bg-[#2D4696] mt-14 text-white tracking-[-0.24px] font-normal  rounded-[10px] px-5 h-[36px] w-[87px]"
        >
          Menu
        </button>
      </div>
      <Drawer
        // title="Menu"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <nav className="mobile-drawer">
          {menu?.map((list: any, index) => {
            return (
              <CustomLink to={list.link} key={index}>
                <div className="flex mb-3">
                  <span className="px-3 icon">{list.icon}</span>
                  <span className="tracking-[-0.011em]">{list.title}</span>
                </div>
              </CustomLink>
            );
          })}
        </nav>
      </Drawer>
    </div>
  );
};
