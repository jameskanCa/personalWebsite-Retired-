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
      projectName: "YouTube Focus Reminder ",
      techStack: "JavaScript, React, MongoDB, NodeJS",
      description: (
        <div>
          Created Chrome extension to collect video metadata and a popup modal
          to notify users whether a video is distracting towards studying.
          Implemented a RESTful API server using Node.js to store and retrieve
          user data from the MongoDB database, enforcing a client-server
          architecture. Built a Single-Page Application in React that performs
          REST calls to API to retrieve data for client-side calculation and
          rendering of watch history metrics in charts.
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
        <div>
          Collaborated to build a Chrome extension using JavaScript, accessing
          Google’s web API to achieve basic browser commands through voice.
          Wrote server-side code in Golang that handles JWT requests and
          performs routing of user’s voice commands from Google Home devices to
          the correct browser. Deployed server on Amazon AWS infrastructure
          utilizing EC2 and a load balancer (ELB) handling client requests.
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
      description: (
        <div>
          Designed and implemented an automation software that renamed over
          1000+ digitized patient records according to patient information.
          Learned JavaFX in a week to design G.U.I. and integrated M.V.C. design
          pattern. Back-end design utilized Java file systems to create folders,
          save files, and comply with departmental privacy and patient data
          security requirements.
        </div>
      ),
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
