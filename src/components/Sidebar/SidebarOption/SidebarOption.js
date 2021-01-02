import React from "react";
import "./SidebarOption.css";

const SidebarOption = ({ title, Icon, number }) => {
  return (
    <div className="sidebarOption">
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
};

export default SidebarOption;
