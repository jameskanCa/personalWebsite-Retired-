import { List, Icon, Divider, notification } from "antd";
import React from "react";
import ProfilePic from "../assets/James.jpg";
import "../styles/AboutMe.scss";

const ProfileInfo = [
  {
    profile: ProfilePic,
    description:
      "Third year Student at the University of British Columbia majoring in computer science and microbiology & immunology. I am passionate about health care and technology and I am always seeking opportunities to improve and explore developing software for fields beyond healthcare. Currently seeking co-op position for summer 2020 in any field of software development that will challenge me to grow and explore."
  }
];

const openNotification = () => {
  notification.open({
    message: "I'm glad you want to email me!",
    description: "james.kan.bc@gmail.com",
    icon: <Icon type="smile" style={{ color: "#108ee9" }} />
  });
};

export default class SlidingTabsDemo extends React.Component {
  render() {
    return (
      <div className="about-me-block">
        <Divider orientation="left">About Me</Divider>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={ProfileInfo}
          renderItem={(item: any) => (
            <List.Item
              extra={<img width={272} alt="logo" src={item.profile} />}
            >
              <List.Item.Meta title={<div className="myname">James Kan</div>} />
              <div className="description">{item.description}</div>
              <div className="icons">
                <a
                  className="iconButton"
                  href="http://www.linkedin.com/in/jameskanbc"
                >
                  <Icon type="linkedin" />
                </a>
                <a className="iconButton" href="https://github.com/jameskanCa">
                  <Icon type="github" />
                </a>
                <a className="iconButton" onClick={openNotification}>
                  <Icon type="mail" />
                </a>
              </div>
            </List.Item>
          )}
        />
      </div>
    );
  }
}
