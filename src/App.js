
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import NewTask from "./components/NewTask";
import Message from "./components/Message";
import ListOfTasks from "./components/ListOfTasks";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [change, setChange] = useState(1);
  const [deleteMessage, setDeleteMessage] = useState(false);

  const postData = (task) => {
    axios
      .post(
        // "https://react-http-e2d69-default-rtdb.firebaseio.com/new-tasks.json",
        `${process.env.REACT_APP_URL}.json`,
        {
          task,
        }
      )
      .then(() => {
        setChange((previosValue) => previosValue * -1);
      });
  };

  const delTask = () => {
    setChange((previosValue) => previosValue * -1);
    setDeleteMessage(true);
    setTimeout(() => {
      setDeleteMessage(false);
    }, 2000);
  };

  const doneTSK = () => {
    setChange((previosValue) => previosValue * -1);
  };

  useEffect(() => {
    //start
    axios.get(`${process.env.REACT_APP_URL}.json`).then(async (response) => {
      const tsk = await Object.keys(response.data).map((key) => {
        return { ...response.data[key].task, id: key };
      });

      setTasks(tsk);
    });

    //end
  }, [change]);

  return (
    <>
      {deleteMessage ? <Message /> : ""}
      <Container style={{ backgroundColor: "#F0E68C" }}>
        <Row>
          <NewTask createNewTask={postData} />
        </Row>
        <Row className="mt-5">
          <ListOfTasks tasks={tasks} delTask={delTask} doneTSK={doneTSK} />
        </Row>
      </Container>
    </>
  );
}

export default App;
