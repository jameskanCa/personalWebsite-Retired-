import { Divider, List, Avatar } from "antd";
import React from "react";
import TasktopLogo from "../assets/tasktop.png";
import TasktopIcon from "../assets/tasktopIcon.png";
import UBCMedicineLogo from "../assets/UBCOT.png";
import UBCDentistryLogo from "../assets/dent.jpg";
import OpencareLogo from "../assets/Opencare.png";
import OpencareIcon from "../assets/OpencareIcon.png";

export default class SlidingTabsDemo extends React.Component {
  render() {
    const WorkObject: any = [
      {
        companyName: "Opencare",
        positionName: "Software Engineering Co-op",
        duration: "May 2019 - Aug 2019",
        project: "Opencare Sync",
        description: (
          <div style={{ whiteSpace: "pre-wrap" }}>
            ➢ Implemented and deployed a cloud-based online-booking data-scraper API with
            Node.js and JavaScript for a platform that Opencare’s competitors cannot support{'\n'}
            ➢ Built a C# integration for a dental software 3 weeks earlier than scheduled and
            increased eligibility of Opencare’s Canadian clients by 30% through the desktop
            integration{'\n'}
            ➢ Created a C.I./C.D. build pipeline for the desktop application using Jenkins to
            encourage the team to deploy more regularly, and reduce the time that engineers spent
            creating/reviewing builds
          </div>
        ),
        logo: OpencareLogo,
        icon: OpencareIcon
      },
      {
        companyName: "Tasktop Technologies",
        positionName: "Jr. Software Engineer",
        duration: "Sept 2018 - April 2019",
        project: "Viz",
        description:
        (
          <div style={{ whiteSpace: "pre-wrap" }}>
            ➢ Delivered the first data visualization feature using D3 and SVG in
            React with TypeScript for an important product demo with BMW {'\n'}
            ➢ Deployed critical application monitoring infrastructure for
            production Kubernetes clusters using Datadog which helped to
            identify major performance bottlenecks {'\n'}
            ➢ Implemented parts of user access controls in the backend, working with Scala, Kafka,
            Kubernetes, and GraphQL to meet early access timeline
          </div>
        ),
        logo: TasktopLogo,
        icon: TasktopIcon
      },
      {
        companyName: "UBC Medicine",
        positionName: "Research Assistant (Software Developer)",
        duration: "Apr 2018 - Aug 2019",
        project: "VR & Autism",
        description:
          "The studied aimed to investigate the evidence base behind using a virtual reality in a pediatric rehabilitation form for patients on the autistic disorder spectrum. My role is a full-stack programmer for research team, tasked with developing front and back end of an evaluation software for research analytics. Maintain and debugXbox kinect software used in the study in addition to carrying out experimental trials with autistic patients. *Developed a deployed website using HTML & CSS for the purposes of participant recruitment.",
        logo: UBCMedicineLogo,
        icon: UBCMedicineLogo
      },
      {
        companyName: "UBC Dentistry",
        positionName: "Project Assistant",
        duration: "Sept 2016 - Apr 2018",
        project: "Record Digitization",
        description:
          "Responsible for digitizing sensitive patient records into secure database and assisting with the preparation and distribution of financial documents. Developed and maintained software on personal time to simplify the digitization process of patient records that is now utilized by the team. The software developed is now an integral part of the position for future students who take on the position. GUI were created after feedback from colleagues and focus on providing a simple, clean, and modern design.",
        logo: UBCDentistryLogo,
        icon: UBCDentistryLogo
      }
    ];
    return (
      <div>
        <Divider orientation="left">Work Experience</Divider>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 4
          }}
          dataSource={WorkObject}
          renderItem={(workObject: any) => (
            <List.Item
              key={workObject.companyName}
              extra={<img width={272} alt="logo" src={workObject.logo} />}
            >
              <List.Item.Meta
                avatar={<Avatar src={workObject.icon} />}
                title={<a>{workObject.companyName}</a>}
                description={
                  <div className="position">{workObject.positionName}</div>
                }
              />
              <div className="description">{workObject.description}</div>
            </List.Item>
          )}
        />
      </div>
    );
  }
}
