import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdDoneAll, MdHighlightOff } from "react-icons/md";
import axios from "axios";

const Task = ({ task, delTask, doneTSK }) => {
  const deleteTask = () => {
    console.log(task.id);
    axios.delete(`${process.env.REACT_APP_URL}/${task.id}.json`).then(() => {
      console.log("task je obrisan");
      delTask();
    });
  };

  const doneTask = () => {
    const taskDone = {
      task: {
        ...task,
        completed: true,
      },
    };

    axios
      .put(
        // `https://react-http-e2d69-default-rtdb.firebaseio.com/new-tasks/${task.id}.json`,
        `${process.env.REACT_APP_URL}/${task.id}.json`,
        taskDone
      )
      .then(() => {
        doneTSK();
      });
  };

  const updateTask = () => {
    return task.id;
  };

  return (
    <Card
      className="mb-5"
      style={{ backgroundColor: "#F0E68C", border: "0px" }}
    >
      <Card.Header
        style={{
          backgroundColor: "#DAA520",
          color: "#FAFAD2",
          borderRadius: "10px",
        }}
      >
        {task.task ? task.task : "NO Name"}
      </Card.Header>
      <Card.Body style={{ backgroundColor: "#C5B358", borderRadius: "10px" }}>
        <Card.Title
          style={{
            height: "100px",
            backgroundColor: "#DAA520",
            color: "#FAFAD2",
            borderRadius: "10px",
          }}
        >
          {task.task} task ID : {task.id}
        </Card.Title>
        <Card.Text>
          {task.description}
          {task.completed ? (
            <MdDoneAll fontSize={100} style={{ color: "green" }} />
          ) : (
            <MdHighlightOff fontSize={100} style={{ color: "red" }} />
          )}
        </Card.Text>
        <Container>
          <Row className="text-center">
            <Col xs="4">
              <Button variant="primary" onClick={doneTask}>
                Done
              </Button>
            </Col>
            <Col xs="4">
              <Button variant="warning" onClick={updateTask}>
                Update
              </Button>
            </Col>
            <Col xs="4">
              <Button variant="danger" onClick={deleteTask}>
                Delete
              </Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default Task;
