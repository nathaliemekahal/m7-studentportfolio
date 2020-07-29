import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class StudentDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student: [],
    };
  }

  componentDidMount = async (prevProps) => {
    {
      console.log("PROPS", this.props.studentSelected);
    }
    let response = await fetch(
      "http://localhost:3002/students/" + this.props.studentSelected
    );
    let student = await response.json();
    this.setState({ student }, () => {
      console.log("STUDENT STATE", this.state.student);
    });
  };

  componentDidUpdate = async (prevProps) => {
    if (prevProps.studentSelected !== this.props.studentSelected) {
      {
        console.log("PROPS", this.props.studentSelected);
      }
      let response = await fetch(
        "http://localhost:3002/students/" + this.props.studentSelected
      );
      let student = await response.json();
      this.setState({ student }, () => {
        console.log("STUDENT STATE", this.state.student);
      });
    }
  };
  render() {
    return (
      <>
        <Row>
          <Col xs={12} className="text-center background-div mt-3">
            <h1>STUDENT DETAILS</h1>
          </Col>
        </Row>
        <Row>
          <h2>{this.state.student.name}</h2>
          <img className="profileImage" src={this.state.student.ImageUrl} />
        </Row>
      </>
    );
  }
}

export default StudentDetails;
