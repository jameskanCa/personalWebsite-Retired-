import * as React from "react";
import { Layout, Menu, Icon } from "antd";
const { Sider } = Layout;
import { HashRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default class Sidebar extends React.Component {

  render() {
    return (
      <Sider
        style={{
          overflow: 'auto', height: '100vh', position: 'fixed', left: 0
        }}
        collapsed={true}
      >
        <div className="logo" />
        <HashRouter>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <HashLink to="/#aboutMe">
                <Icon type="user" />
                <span>About Me</span>
              </HashLink>
            </Menu.Item>
            <Menu.Item key="2">
              <HashLink to="/#workExperience">
                <Icon type="team" />
                <span>Work Experience</span>
              </HashLink>
            </Menu.Item>
            <Menu.Item key="3">
              <HashLink to="/#portfolio">
                <Icon type="branches" />
                <span>Portfolio</span>
              </HashLink>
            </Menu.Item>
            <Menu.Item key="4">
              <HashLink to="/#volunteerExperience">
                <Icon type="appstore" />
                <span>Volunteer Experience</span>
              </HashLink>
            </Menu.Item>
            <Menu.Item key="5">
              <HashLink to="/#hackathonExperience">
                <Icon type="experiment" />
                <span>Hackathon Experience</span>
              </HashLink>
            </Menu.Item>
          </Menu>
        </HashRouter>
      </Sider>
    );
  }
}
