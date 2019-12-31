import * as React from "react";
import VolunteerTimeLine from "./VolunteerTimeLine";
import WorkExperienceComponent from "./WorkExperienceComponent";
import HackathonExperience from "./HackathonExperienceComponent";
import PortfolioComponent from "./PortfolioComponent";
import AboutMeComponent from "./AboutMeComponent";
import { Layout, Card } from "antd";
const { Content } = Layout;
export default class Panel extends React.Component {
  render() {
    return (
      <div style={{ minHeight: 360 }}>
        <a id="aboutMe">
          <div style={{ padding: "15px" }}>
            <Card title="About Me" bordered={false} style={{ width: "100%" }}>
              <AboutMeComponent />
            </Card>
          </div>
        </a>
        <a id="workExperience">
          <div style={{ padding: "15px" }}>
            <Card title="Work Experience" bordered={false} style={{ width: "100%" }}>
              <WorkExperienceComponent />
            </Card>
          </div>
        </a>
        <a id="portfolio">
          <div style={{ padding: "15px" }}>
            <Card title="Portfolio" bordered={false} style={{ width: "100%" }}>
              <PortfolioComponent />
            </Card>
          </div>
        </a>
        <a id="volunteerExperience">
          <div style={{ padding: "15px" }}>
            <Card title="Volunteer Experience" bordered={false} style={{ width: "100%" }}>
              <VolunteerTimeLine />
            </Card>
          </div>
        </a>
        <a id="hackathonExperience">
          <div style={{ padding: "15px" }}>
            <Card title="Hackathon Experience" bordered={false} style={{ width: "100%" }}>
              <HackathonExperience />
            </Card>
          </div>
        </a>
      </div>
    );
  }
}
