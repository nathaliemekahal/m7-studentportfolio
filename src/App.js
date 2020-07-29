import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Studentslist from "./components/Studentslist";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
    };
  }
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col xs={12} className="text-center background-div">
              <h1>STUDENTS PORTFOLIO</h1>
            </Col>
          </Row>
        </Container>
        <Route
          path="/"
          exact
          render={(props) => (
            <Studentslist {...props} fetchStudents={this.fetchStudents} />
          )}
        />
      </>
    );
  }
}

export default App;
