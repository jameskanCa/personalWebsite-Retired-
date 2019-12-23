import { Layout } from "antd";
import * as React from "react";

export default class View extends React.Component {
  render() {
    return <Layout>{this.props.children}</Layout>;
  }
}
