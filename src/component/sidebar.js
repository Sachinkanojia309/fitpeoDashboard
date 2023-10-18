import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import "./sidebar.scss";
import { TbSettings2 } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { LiaHireAHelper } from "react-icons/lia";
import { PiCubeFocusLight } from "react-icons/pi";
import { TbKey } from "react-icons/tb";
import { LiaPercentageSolid } from "react-icons/lia";
import profile from "../images/profile.png"; // Adjust the path to your profile image

export default function Sidebar() {
  return (
    <ProSidebar className="prosidebar">
      <SidebarHeader>
        <h2 className="header">
          <TbSettings2 className="iconset" />
          Dashboard
        </h2>
      </SidebarHeader>
      <SidebarContent>
        <Menu>
          <MenuItem icon={<TbKey />} className="custom-menu-item">
            Dashboard
          </MenuItem>
          <SubMenu
            icon={<PiCubeFocusLight />}
            className="custom-menu-item"
            title="Product"
          >
            <MenuItem>Product 1</MenuItem>
            <MenuItem>Product 2</MenuItem>
          </SubMenu>
          <SubMenu
            icon={<BsPerson />}
            className="custom-menu-item"
            title="Customer"
          >
            <MenuItem>Customer 1</MenuItem>
            <MenuItem>Customer 2</MenuItem>
          </SubMenu>
          <SubMenu
            icon={<CiWallet />}
            className="custom-menu-item"
            title="Income"
          >
            <MenuItem>Income 1</MenuItem>
            <MenuItem>Income 2</MenuItem>
          </SubMenu>
          <SubMenu
            icon={<LiaPercentageSolid />}
            className="custom-menu-item"
            title="Promote"
          >
            <MenuItem>Promote 1</MenuItem>
            <MenuItem>Promote 2</MenuItem>
          </SubMenu>
          <SubMenu
            icon={<LiaHireAHelper />}
            className="custom-menu-item"
            title="Help"
          >
            <MenuItem>Help 1</MenuItem>
            <MenuItem>Help 2</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
      <SidebarFooter className="footer">
        <div className="footer-content">
          <div className="avatar">
            <img src={profile} alt="SACHIN" />
          </div>
          <div className="info">
            <div className="user-info">
              <div className="name">
                Name <span class="dropdown-arrow">&gt;</span>
              </div>
              <div className="job-title">Your Job Title</div>{" "}
              {/* Replace with your actual job title */}
            </div>
          </div>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
}
