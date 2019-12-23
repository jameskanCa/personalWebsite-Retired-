import * as React from "react";
import { Layout } from "antd";
import View from "./View";
import VolunteerTimeLine from "./VolunteerTimeLine";
import WorkExperienceComponent from "./WorkExperienceComponent";
import HackathonExperience from "./HackathonExperienceComponent";
import PortfolioComponent from "./PortfolioComponent";
import AboutMeComponent from "./AboutMeComponent";

const { Content } = Layout;
export default class Panel extends React.Component {
  render() {
    return (
        <View>
          <Content style={{ margin: "0 16px" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              <a id="aboutMe">
                <AboutMeComponent />
              </a>
              <a id="workExperience">
                <WorkExperienceComponent />
              </a>
              <a id="portfolio">
                <PortfolioComponent />
              </a>
              <a id="volunteerExperience">
                <VolunteerTimeLine />
              </a>
              <a id="hackathonExperience">
                <HackathonExperience />
              </a>
            </div>
          </Content>
        </View>
    );
  }
}
