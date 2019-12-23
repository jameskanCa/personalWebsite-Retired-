import * as React from "react";
import { Divider, List, Avatar } from "antd";
import WezardRush from "../assets/wezardrushLogo.png";
import UBCDent from "../assets/dent.jpg";
import VoiceControl from "../assets/assistant.png";
import ResumeGenerator from "../assets/ResumeGenerator.png";
import YoutubeLogo from "../assets/youtubeLogo.png";
import "../styles/PortfolioComponent.scss";

export default class HackathonExperience extends React.Component {
  render() {
    const portfolioObject = [
      {
        projectName: "Youtube Note Taker",
        techStack: "JavaScript, React, MongoDB, NodeJS",
        description: (
          <div style={{ whiteSpace: "pre-wrap" }}>
            ➢ Created a chrome extension using React that operates on YouTube
            video pages as a popup with the transcript of the video in a text
            editor {'\n'}
            ➢ Building a local Node.js server to store user inputs and
            metadata in MongoDB {"\n"}
            <ul style={{ listStyleType: "none" }}>
              <li>
                <a href={"https://github.com/jameskanCa/youtubeextension"}>
                  Client Code
                </a>
              </li>
              <li>
                <a href={"https://github.com/jameskanCa/Youtube-Server"}>
                  Server Code
                </a>
              </li>
            </ul>
          </div>
        ),
        projectLink: "https://github.com/jameskanCa/youtubeextension",
        imageLink: YoutubeLogo
      },
      {
        projectName: "Voice Control Chrome Browser",
        techStack: "Typescript, React, Dialogflow, Firebase",
        description: (
          <div style={{ whiteSpace: "pre-wrap" }}>
            Designed and architected a P.O.C. of controlling various chrome
            browser commands through voice with Google Assistant's Dialogflow
            API. Collaborated to create initial implementation design in one
            week and built a chrome extension using Node.js, accessing Google's
            web API to achieve commands. {"\n"}
            <ul style={{ listStyleType: "none" }}>
              <li>
                <a href={"https://github.com/jameskanCa/flow-client"}>
                  Client Code
                </a>
              </li>
              <li>
                <a href={"https://github.com/jameskanCa/flow-server"}>
                  Server Code
                </a>
              </li>
            </ul>
          </div>
        ),
        projectLink: "https://github.com/jameskanCa/flow-client",
        imageLink: VoiceControl
      },
      {
        projectName: "UBC Dent File Renamer",
        techStack: "JavaFX, Java",
        description:
          "Built to rename 1000+ patient record files for the faculty of Dentistry. Lightening the manual task of scanning and renaming patient record files. Users input information and allow for the program to create a folder and rename all items within according to the standard naming system at UBC dentistry.",
        projectLink: "https://github.com/jameskanCa/ubcDentFileRenamer",
        imageLink: UBCDent
      },
      {
        projectName: "Wezard Rush",
        techStack: "C#, Unity, VRTK",
        description:
          "VR centered game where users play as a wizard defending their tower. Enemies are eliminated by being thrown in the the air and let to fall down. Utilizing Oculus Rift's SDK unity's OpenVR support to develop the game. Coordinated with a game designer, 2D artist, and sound artist to work on the game.",
        projectLink: "https://github.com/jameskanCa/WezardRushMain",
        imageLink: WezardRush
      },
      {
        projectName: "Resume Generator",
        techStack: "Angular, Typescript, SQL, PHP",
        description:
          " Built as part of CPSC 304 (Introduction to Relational Database) course at UBC. Students were given the opportunity to form groups and decide on their own project, implementing a database as part of their project. Resume Generator coordinates between employer's posting and applicant's resume information to generate matching cadidates. Utilzing Angular and SQL Database, the project was completed over one week.",
        projectLink: "https://github.com/Wonton304/ResumeGenerator",
        imageLink: ResumeGenerator
      }
    ];
    return (
      <div>
        <Divider orientation="left">Portfolio</Divider>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 5
          }}
          dataSource={portfolioObject}
          renderItem={(item: any) => (
            <List.Item
              key={item.name}
              extra={<img width={272} alt="logo" src={item.imageLink} />}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.imageLink} />}
                title={<a href={item.projectLink}>{item.projectName}</a>}
                description={<div className="techStack">{item.techStack}</div>}
              />
              <div className="description">{item.description}</div>
            </List.Item>
          )}
        />
      </div>
    );
  }
}
