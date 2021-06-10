import React from "react";
import { Menu, Icon } from "semantic-ui-react";

export default function Sidebar() {
  return (
    <div>
      <Menu className="sidebarMenu" vertical secondary>
        <Menu.Item name="Job Positions">
          <Icon fitted name="search" size="large"/>
          Job Positions
        </Menu.Item>
        <Menu.Item name="Employees">
        <Icon fitted name="building outline" size="large"/>
          Employees
        </Menu.Item>
        <Menu.Item name="Employers">
        <Icon fitted name="briefcase" size="large" />
          Employers
        </Menu.Item>
      </Menu>
    </div>
  );
}
