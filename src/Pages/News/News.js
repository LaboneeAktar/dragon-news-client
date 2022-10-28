import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../hook/useTitle";

const News = () => {
  const news = useLoaderData();
  useTitle("News");
  const { category_id, title, details, image_url } = news;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="success">Go News Category</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
