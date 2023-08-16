import SideBar from "@/src/components/SideBar";
import React from "react";

export default function layout({ children }) {
  return <SideBar>{children}</SideBar>;
}
