import { Card } from "react-bootstrap";
import JsonData from "../dishes.json";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const DishdetailComponent = ({ product }) => {
  const productList = JsonData[product];
  const [newCommentList, setNewCommentList] = useState(productList.comments);
  const commentDate = new Date().toLocaleDateString();
  
  const showCard = () => {
    return (
      <Card style={{ width: "25rem", marginLeft: "130px" }}>
        <Card.Img variant="top" src={productList.image} />
        <Card.Body>
          <Card.Title>{productList.name}</Card.Title>
          <Card.Text>{productList.presentation}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  const showComments = () => {
    let template = newCommentList.map((dish,index) => (
      <li key={index} className="mt-3">
        <p className="fs-5">{dish.comment}</p>
        <span>--{dish.commentator}, </span>
        <span>{dish.date}</span>
        <p>
          <span>Rate:</span> {dish.rate}
        </p>
        <hr/>
      </li>
    ));

    return template;
  };

  function Example() {
    const [show, setShow] = useState(false);

    const [rating, setRating] = useState("");
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const nameLimit = name.length
    const commentLimit = comment.length
    const [nameWarning, setNameWarning] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => {
      setShow(true);
      setNameWarning("");
    };

    const handleSubmit = () => {
      const newComment = {
        comment: comment,
        commentator: name,
        date: commentDate,
        rate: rating,
      };
      if (nameLimit > 2 && nameLimit < 15 && commentLimit < 120 && commentLimit > 20 && rating < 6 && rating > 0) {
        setNewCommentList([...newCommentList, newComment]);
        setNameWarning("");
        setShow(false)
      } else if (nameLimit > 14) {
        setNameWarning("Must be 15 characters or less");
        setShow(true)
      } else if (nameLimit < 3) {
        setNameWarning("Must be greater than 2 characters");
        setShow(true)
      }

      console.log(nameLimit);
    };

    return (
      <>
        <Button
          variant="light"
          className=" text-secondary border border-solid"
          onClick={handleShow}
        >
          Submit Comment
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Submit Comment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  type="number"
                  onChange={(e) => setRating(e.target.value)}
                  placeholder="Rating"
                  min="1"
                  max="5"
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                />
                <p className="text-danger">{nameWarning}</p>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  as="textarea"
                  onChange={(e) => setComment(e.target.value)}
                  rows={3}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  return (
    <div className="row mt-5">
      <div className="col-lg-5 col-md-5 col-sm-12 mt-3">{showCard()}</div>
      <div
        className="col-lg-5 col-md-5 col-sm-12 mt-3"
        style={{ marginLeft: "130px" }}
      >
        <h4>Comments</h4>
        <ul className="list-unstyled">{showComments()}</ul>
        <Example />
      </div>
    </div>
  );
};

export default DishdetailComponent;
