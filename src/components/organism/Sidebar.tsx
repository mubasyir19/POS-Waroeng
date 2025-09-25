"use client";

import {
  BadgePercent,
  Bell,
  ChartPie,
  House,
  LogOut,
  Mail,
  Settings,
} from "lucide-react";
import Image from "next/image";
// import Link from "next/link";
import React from "react";
import SidebarItem from "../molecules/SidebarItem";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="bg-background h-screen rounded-r-2xl p-2 lg:p-4 xl:p-6">
      <ul className="flex flex-col justify-between gap-6">
        <li className="bg-primary/30 flex items-center justify-center rounded-xl p-0.5 md:p-1 lg:p-2 xl:p-3">
          <Image
            src={`/icons/ic-logo.svg`}
            width={24}
            height={24}
            alt="logo"
            className="size-3 lg:size-4 xl:size-6"
          />
        </li>
        <SidebarItem href="home" icon={House} />
        <SidebarItem href="discount" icon={BadgePercent} />
        <SidebarItem href="dashboard" icon={ChartPie} />
        <SidebarItem href="messages" icon={Mail} />
        <SidebarItem href="notifications" icon={Bell} />
        <SidebarItem href="settings" icon={Settings} />
        <Link href={`#`} className="group">
          <li
            className={`group-hover:bg-primary flex items-center justify-center rounded-xl p-1 transition-all duration-300 lg:p-2 xl:p-3`}
          >
            <LogOut
              className={`text-primary size-3 transition-all duration-300 group-hover:text-white lg:size-4 xl:size-6`}
            />
          </li>
        </Link>
      </ul>
    </aside>
  );
}
