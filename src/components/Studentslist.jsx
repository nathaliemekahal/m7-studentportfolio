import React, { Component } from "react";
import { Container, Button, Card, Row, Spinner } from "react-bootstrap";
import StudentDetails from "./StudentDetails";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  DataLoaded: () => dispatch({ type: "IS_LOADING" }),
  fetchStudents: (url) => dispatch(fetchStudentsList(url)),
});

const fetchStudentsList = (url) => {
  return (dispatch, getState) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: "GET_STUDENT_LIST",
          payload: data,
        })
      );
  };
};
class Studentslist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
      studentSelected: "",
    };
  }

  componentDidMount = () => {
    let url = "http://localhost:3002/students/";

    this.props.fetchStudents(url);
    setTimeout(this.props.DataLoaded, 1500);
  };

  selectStudent = (id) => {
    this.setState({
      studentSelected: id,
    });
  };
  render() {
    return (
      <Container>
        {this.props.fetching.loading && (
          <Row
            className="justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <Spinner animation="grow" />
          </Row>
        )}
        {!this.props.isFetching && (
          <Row className="row-cols-sm-4 mt-4">
            {this.props.students.list.map((student) => (
              <Card
                className="mr-5"
                onClick={() => {
                  this.selectStudent(student._id);
                }}
              >
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdkX6KyvU2A4fhiOdwV_CGaf7ZYm6MKnRTtw&usqp=CAU"
                />
                <Card.Body>
                  <Card.Title>
                    {student.name + " " + student.surname}
                  </Card.Title>
                  <Card.Text>{student.email}</Card.Text>
                  <Button variant="primary">Show Projects</Button>
                </Card.Body>
              </Card>
            ))}
          </Row>
        )}

        {this.state.studentSelected && (
          <StudentDetails studentSelected={this.state.studentSelected} />
        )}
      </Container>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Studentslist);
