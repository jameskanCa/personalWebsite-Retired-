import { Modal, Button } from "antd";
import React from "react";

interface infoProps {
  dateRange: string;
  title: string;
  details: string;
}

export default class App extends React.Component<infoProps> {
  state = {
    loading: false,
    visible: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
         More Info
        </Button>
        <Modal
          visible={visible}
          title={this.props.title}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>
          ]}
        >
          <div className="date">{this.props.dateRange}</div>
          <div className="details">
            <p>{this.props.details}</p>
          </div>
        </Modal>
      </div>
    );
  }
}
