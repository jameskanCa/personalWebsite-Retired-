import { Timeline, Button, Divider } from "antd";
import React from "react";
import MoreInfoVolunteer from "./MoreInfoVolunteer";
export default class VolunteerTimeLine extends React.Component {
  state = {
    reverse: true
  };

  handleClick = () => {
    this.setState({ reverse: !this.state.reverse });
  }

  render() {
    const volunteerObjects = [
      {
        title: "Burnaby Central Secondary Business Club",
        details:
          "Oversaw event hosting, sales, and lectures for the club. Provided the school with sales and events to teach students about business and promote school spirit.",
        date: "2011 – 2016"
      },
      {
        title: "Beyond - Coding Conference",
        details:
          "Created, planned and coordinated logistical operations, funding for this inaugural coding conference for over 80 student attendees. Worked closely with Lighthouse Labs to develop event content focusing on intro to JavaScript.",
        date: "2015 – 2016"
      },
      { title: "BCIT CASE COMPETITION", details: "", date: "2014 - 2015" },
      {
        title: "Burnaby Central First Aid Program",
        details:
          "Responded to over 200 different medical cases and oversaw the operation of the first aid program. Lectured, trained and evaluated students obtaining St.John certification.",
        date: "2012 - 2016"
      },
      {
        title: "Beyond–Business Competition",
        details:
          "Lead a team of 14 that hosted a successful business case competition with over 100 attendees. Designed and developed the case study for the competition and oversaw the recruitment of industry experts as judges and industry sponsors.",
        date: "2015 – 2016"
      },
      {
        title: "Burnaby Citizen Support Services",
        details:
          "Performed front desk duties for the Fraser Health and the City of Burnaby at child immunization clinics.Called seniors and take grocery orders for delivery purposes every week. Accumulated over 200 hours of service.",
        date: "2014 - 2017"
      },
      {
        title: "Spyre Science Fair 2018",
        details:
          "Asked to judge for high school science fair with 15 participating groups. Provided feedback on tech projects and helped students develop further passion for computer science and innovation.",
        date: "2018"
      },
      {
        title: "U.B.C. Science Orientation leader",
        details:
          "Mentor first year students transition into U.B.C.. Provided academic advices and ensuring mental well being of students to ensure successful transition into university.",
        date: "2017 - 2018"
      },
      {
        title: "unBounded at UBC",
        details:
          "Co-founder of an AMS & UBC club that worked with schools in the lower mainland to science beyond classrooms. Organized and oversaw the successful implementation of outreach with Moscrop Secondary School’s cancer society club.",
        date: "2016 – 2017"
      },
      {
        title: "UBC GIRLsmarts4tech",
        details:
          "Involved in planning and delivery on cybersecurity and ciphers themed workshops for elementary school students to promote women in computer science. Helped students understand the basic ideas of encryption through connecting real world analogies with activities.",
        date: "2017 - 2018"
      },
      {
        title:
          "UBC Computer Science Department's Committee on Student Development",
        details:
          "Provide student input on co-curricular activities proposed by C.S. department. Brainstormed activities aimed at helping to improve C.S. student's career development such as 'From the Future You', a panel of graduates giving career advices.",
        date: "2018"
      }
    ];
    return (
      <div>
        <Divider orientation="right">Volunteer Experience</Divider>
        <Timeline
          pending="More coming in the future!"
          reverse={this.state.reverse}
        >
          {volunteerObjects.map(volunteer => {
            return (
              <div>
                <Timeline.Item>
                  {volunteer.title}{" "}
                  <div>
                    {" "}
                    <MoreInfoVolunteer
                      title={volunteer.title}
                      dateRange={volunteer.date}
                      details={volunteer.details}
                    />
                  </div>{" "}
                </Timeline.Item>
              </div>
            );
          })}
        </Timeline>
        <Button
          type="primary"
          style={{ marginTop: 16 }}
          onClick={this.handleClick}
        >
          Reverse Timeline
        </Button>
      </div>
    );
  }
}
