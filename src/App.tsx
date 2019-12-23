import React, { Component } from "react";
import "./styles/App.scss";
import Panel from "./components/Panel";
import Sidebar from "./components/Sidebar";
import { Layout } from "antd";
const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Sidebar />
          <Layout style={{ marginLeft: 110 }}>
          <Content style={{ overflow: "initial" }}>
            <Panel />
          </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
