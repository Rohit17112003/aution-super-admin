"use client";
import Link from "next/link";
import { useState } from "react";

const DashboardLink = ({
  active = false,
  label = "Label",
  heroIcon,
  subMenu = [],
  route = "#",
  handleClick = () => {},
}) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const onParentClick = (e) => {
    if (subMenu.length > 0) {
      e.preventDefault(); 
      setIsSubMenuOpen((prev) => !prev); 
    } else {
      handleClick(); 
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <li className="flex w-full items-center justify-between">
        <Link
          href={route}
          onClick={onParentClick}
          className={`${
            active
              ? "bg-[#E7B01033] text-[#E7B010]"
              : "bg-transparent text-[#4D525F] "
          } flex w-full flex-row items-center justify-between rounded-md px-3 py-2.5 transition-all duration-200 hover:bg-[#E7B01033]/30 hover:text-[#E7B010]/80`}
        >
          <span className="text-md flex items-center gap-1.5">
            <i className={`${heroIcon} ri-lg font-light`}></i>
            <span className="font-urbanist text-[1.05rem] font-semibold capitalize ">{label}</span>
          </span>
          {subMenu.length > 0 && (
            <span className="text-sm font-medium capitalize">
              <i
                className={`${
                  active ? "text-[#4D525F]" : ""
                } ${
                  isSubMenuOpen
                    ? "ri-arrow-down-s-line"
                    : "ri-arrow-right-s-line"
                } ri-lg`}
              ></i>
            </span>
          )}
        </Link>
      </li>

      {/* Submenu Items */}
      {subMenu.length > 0 && (
        <div
          className={`flex-col gap-1 ${
            isSubMenuOpen ? "flex" : "hidden"
          }`}
        >
          {subMenu.map((item, index) => (
            <Link
              key={index}
              href={item.route}
              onClick={handleClick} 
              className="ms-4 flex w-[98%] flex-row items-center rounded-md px-3 py-2 bg-transparent text-[#4D525F] font-medium transition-all duration-200 hover:bg-[#E7B01033]/30 hover:text-[#E7B010]/80"
            >
              <span>
                <i
                  className={`${item.icon} ri-lg font-light pr-2`}
                ></i>
              </span>
              <span className="text-[1rem] font-medium capitalize text-[#4D525F] ">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardLink;
