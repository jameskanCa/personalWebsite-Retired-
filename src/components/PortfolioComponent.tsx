import * as React from "react";
import { Modal, List, Avatar, Carousel, Button } from "antd";
import "../styles/PortfolioComponent.scss";

import WezardRush from "../assets/wezardrushLogo.png";
import UBCDent from "../assets/dent.jpg";
import VoiceControl from "../assets/assistant.png";
import ResumeGenerator from "../assets/ResumeGenerator.png";
import YoutubeLogo from "../assets/youtubeLogo.png";

import p1 from "../assets/YoutubeProjectPhotos/p1.png";
import p2 from "../assets/YoutubeProjectPhotos/p2.png";
import p3 from "../assets/YoutubeProjectPhotos/p3.png";
import p4 from "../assets/YoutubeProjectPhotos/p4.png";
import p5 from "../assets/YoutubeProjectPhotos/p5.png";

export default class HackathonExperience extends React.Component {
  state = { visible: false };

  showModal = () => {
    console.log("Hi");
    this.setState({
      visible: true
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  handleOk() {
    this.setState(
      {
        visible: false
      },
      () => {
        console.log(this.state.visible);
      }
    );
  }

  imageDisplay(list: any[]) {
    if (list.length > 1) {
      return (
        <div>
          <div style={{ height: "auto" }} onClick={this.showModal}>
            <Carousel autoplay style={{ height: "100%", width: "100%" }}>
              {list.map((imageItem: any) => {
                return (
                  <img
                    alt="logo"
                    src={imageItem}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain"
                    }}
                  />
                );
              })}
            </Carousel>
          </div>
          <Modal
            title="Application Images"
            width={800}
            mask={true}
            destroyOnClose={true}
            visible={this.state.visible}
            onCancel={this.handleCancel}
            onOk={() => {
              this.handleOk();
            }}
          >
            {this.state.visible ? (
              <div className="popup">
                <Carousel autoplay dots={true} dotPosition={"top"}>
                  {list.map((imageItem: any) => {
                    return <img alt="logo" src={imageItem} />;
                  })}
                </Carousel>
              </div>
            ) : null}
          </Modal>
        </div>
      );
    } else {
      return <img className="singleImage" alt="logo" src={list[0]} />;
    }
  }

  portfolioObject = [
    {
      projectName: "Youtube Note Taker",
      techStack: "JavaScript, React, MongoDB, NodeJS",
      description: (
        <div style={{ whiteSpace: "pre-wrap" }}>
          ➢ Created a chrome extension using React that operates on YouTube
          video pages as a popup with the transcript of the video in a text
          editor {"\n"}➢ Building a local Node.js server to store user inputs
          and metadata in MongoDB {"\n"}
        </div>
      ),
      projectLink: "https://github.com/jameskanCa/youtubeextension",
      imageLink: [p1, p2, p3, p4, p5],
      imageAvatar: YoutubeLogo,
      linkObjs: [
        {
          link: "https://github.com/jameskanCa/youtubeappwebpage",
          linkText: "Client Web App Code"
        },
        {
          link: "https://github.com/jameskanCa/Youtube-Server",
          linkText: "Server Code"
        },
        {
          link: "https://github.com/jameskanCa/youtubeextension",
          linkText: "Client Extension Code"
        }
      ]
    },
    {
      projectName: "Voice Control Chrome Browser",
      techStack: "Typescript, React, Dialogflow, Firebase",
      description: (
        <div style={{ whiteSpace: "pre-wrap" }}>
          Designed and architected a P.O.C. of controlling various chrome
          browser commands through voice with Google Assistant's Dialogflow API.
          Collaborated to create initial implementation design in one week and
          built a chrome extension using Node.js, accessing Google's web API to
          achieve commands. {"\n"}
        </div>
      ),
      projectLink: "https://github.com/jameskanCa/flow-client",
      imageLink: [VoiceControl],
      imageAvatar: VoiceControl,
      linkObjs: [
        {
          link: "https://github.com/jameskanCa/flow-client",
          linkText: "Client Code"
        },
        {
          link: "https://github.com/jameskanCa/flow-server",
          linkText: "Server Code"
        }
      ]
    },
    {
      projectName: "UBC Dent File Renamer",
      techStack: "JavaFX, Java",
      description:
        "Built to rename 1000+ patient record files for the faculty of Dentistry. Lightening the manual task of scanning and renaming patient record files. Users input information and allow for the program to create a folder and rename all items within according to the standard naming system at UBC dentistry.",
      projectLink: "https://github.com/jameskanCa/ubcDentFileRenamer",
      imageLink: [UBCDent],
      imageAvatar: UBCDent,
      linkObjs: [
        {
          link: "https://github.com/jameskanCa/ubcDentFileRenamer",
          linkText: "Application Code"
        }
      ]
    },
    {
      projectName: "Wezard Rush",
      techStack: "C#, Unity, VRTK",
      description:
        "VR centered game where users play as a wizard defending their tower. Enemies are eliminated by being thrown in the the air and let to fall down. Utilizing Oculus Rift's SDK unity's OpenVR support to develop the game. Coordinated with a game designer, 2D artist, and sound artist to work on the game.",
      projectLink: "https://github.com/jameskanCa/WezardRushMain",
      imageLink: [WezardRush],
      imageAvatar: WezardRush,
      linkObjs: [
        {
          link: "https://github.com/jameskanCa/WezardRushMain",
          linkText: "Game Code"
        }
      ]
    },
    {
      projectName: "Resume Generator",
      techStack: "Angular, Typescript, SQL, PHP",
      description:
        " Built as part of CPSC 304 (Introduction to Relational Database) course at UBC. Students were given the opportunity to form groups and decide on their own project, implementing a database as part of their project. Resume Generator coordinates between employer's posting and applicant's resume information to generate matching cadidates. Utilzing Angular and SQL Database, the project was completed over one week.",
      projectLink: "https://github.com/Wonton304/ResumeGenerator",
      imageLink: [ResumeGenerator],
      imageAvatar: ResumeGenerator,
      linkObjs: [
        {
          link: "https://github.com/Wonton304/ResumeGenerator",
          linkText: "Application Code"
        }
      ]
    }
  ];

  render() {
    return (
      <div>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 5
          }}
          dataSource={this.portfolioObject}
          renderItem={(item: any) => (
            <List.Item
              key={item.name}
              extra={this.imageDisplay(item.imageLink)}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.imageAvatar} />}
                title={<a href={item.projectLink}>{item.projectName}</a>}
                description={<div className="techStack">{item.techStack}</div>}
              />
              <div className="description">{item.description}</div>
              <div>
                <ul style={{ listStyleType: "none" }}>
                  {item.linkObjs.map((item: any) => {
                    return (
                      <li>
                        <Button type="primary">
                          <a href={item.link}>{item.linkText}</a>
                        </Button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </List.Item>
          )}
        />
      </div>
    );
  }
}
