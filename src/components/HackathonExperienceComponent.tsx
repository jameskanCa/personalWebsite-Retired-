import { Divider, List } from "antd";
import * as React from "react";
import "../styles/HackathonExperienceComponent.scss";
import Protohack from "../assets/protohack.jpg";
import Mechathon from "../assets/mechathon.jpg";
import Lumohacks from "../assets/lumohacks.jpg";
import Lumohacks2 from "../assets/lumohacks2.jpg";

export default class HackathonExperience extends React.Component {
  render() {
    const hackathonObject = [
      {
        name: "Protohack",
        topic: "Depression & Mental Wellbeing.",
        role: "Participant/Team Lead",
        placement: "2nd Place",
        description:
          "By far the most unique expereince, formed a team on the day of and facilitated the ideation of our Project by bringing out each individual's expertise in different areas such as business, mental health, technical ...etc. Focused on expanding problem solving skills by narrowing down and validating the problem in question. Learned and utlized prototyping tools to prepare for presentation. Our solution was to bridge the gap between counselors and students who are too afraid too reach out. We do this by having students enter thir daily emotions through the snapchat API bit emoji to engage with the youth and through datawarhousing, to detect deviations in emotions.",
        link: "",
        image: Protohack
      },

      {
        name: "Lumohacks 2.0",
        topic: "Depression & Mental Wellbeing",
        role: "Participant",
        placement: "7th Place",
        description:
          "My team worked on multi-level solution aiming to tackle drug abuse for Veterans. A mobile app, a smart wrist band, and a dedicated website, our solution attempted to distrupt individual's stream of thoughts.",
        link: "",
        image: Lumohacks2
      },

      {
        name: "Mechathon",
        topic: "Solving Opioid Crisis with Tech",
        role: "Team Lead",
        placement: "1st Place",
        description:
          "Our concept revolves around reducing patient wait times through profile matching and providing a one-stop visit to get connected with the necessary resources to seek opioid addiction help.",
        link: "https://github.com/jameskanCa/Mechathon24Hacks",
        image: Mechathon
      },
      {
        name: "Lumohacks",
        topic: "Depression & Mental Wellbeing",
        role: "Participant",
        placement: "11th Place",
        description:
          "The team worked on an android app that matches people based on selected mood for the day. The concept focuses on ensuring people are able to connect and support each other.",
        link: "https://github.com/ryanscovill/lumomeet",
        image: Lumohacks
      }
    ];
    return (
      <div>
        <Divider orientation="left">Hackathon Experience</Divider>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 3
          }}
          dataSource={hackathonObject}
          renderItem={(item: any) => (
            <List.Item
              key={item.name}
              extra={<img width={272} alt="logo" src={item.image} />}
            >
              <List.Item.Meta
                title={<a href={item.href}>{item.name}</a>}
                description={
                  <div className="details">
                    <div className="topic">
                      <b> Topic:</b> {item.topic}
                    </div>
                    <div className="role">
                      <b>Role: </b>
                      {item.role}
                    </div>
                    <div className="placement">
                      <b>Topic: </b>
                      {item.placement}
                    </div>
                    <a href={item.link} />
                  </div>
                }
              />
              <div className="description">{item.description}</div>
            </List.Item>
          )}
        />
      </div>
    );
  }
}
