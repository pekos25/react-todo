//import axios from "axios";
import { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style.css";

const NewTask = ({ createNewTask }) => {
  const [task, setTask] = useState("");
  const [taskdescription, setTaskdescription] = useState("");
  const [dis, setDis] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    if (task.trim() === "" || taskdescription.trim() === "") {
      setDis(false);
    } else {
      setDis(true);
    }
  }, [task, taskdescription]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      task: task,
      taskdescription: taskdescription,
      completed: ref.current.checked,
    };

    createNewTask(newTask);
    setTask("");
    setTaskdescription("");
    ref.current.checked = false;
    ref.current.focus();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formTaskTitle">
        <Form.Label>Task </Form.Label>
        <Form.Control
          type="text"
          ref={ref}
          placeholder="Enter Task title"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Form.Text className="text-muted">Enter shor task title</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formTaskDescription">
        <Form.Label>Task description</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Task description"
          value={taskdescription}
          onChange={(e) => setTaskdescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check ref={ref} type="checkbox" label="Completed" />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!dis}>
        Add task
      </Button>
    </Form>
  );
};

export default NewTask;
