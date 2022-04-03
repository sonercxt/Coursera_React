import { Card } from "react-bootstrap";

const DishdetailComponent = ({ product }) => {
  const showCard = () => {
    return (
      <Card style={{ width: "25rem", marginLeft: "130px" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.presentation}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  const showComments = () => {
    let template = product.comments.map((dish) => (
      <li className="mt-3">
        <p>{dish.comment}</p>
        <span>--{dish.commentator}, </span>
        <span>{dish.date}</span>
      </li>
    ));

    return template;
  };
  return (
    <div className="row mt-5">
      <div className="col-lg-5 col-md-5 col-sm-12 mt-3">{showCard()}</div>
      <div
        className="col-lg-5 col-md-5 col-sm-12 mt-3"
        style={{ marginLeft: "130px" }}
      >
        <h4>Comments</h4>
        <ul className="list-unstyled">{showComments()}</ul>
      </div>
    </div>
  );
};

export default DishdetailComponent;
