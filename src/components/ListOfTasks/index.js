import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../ListOfTasks/style.css";
import Task from "../Task";

const ListOfTasks = ({ tasks, delTask, doneTSK }) => {
  return (
    <ul>
      <Container>
        <Row>
          {tasks.map((data) => (
            <Col sm={12} md={6} lg={4} key={data.id}>
              <li key={data.id}>
                <Task task={data} delTask={delTask} doneTSK={doneTSK} />
              </li>
            </Col>
          ))}
        </Row>
      </Container>
    </ul>
  );
};

export default ListOfTasks;
