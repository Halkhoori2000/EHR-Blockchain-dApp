import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Form, FormGroup, Label, Button } from "reactstrap";
import { insertPortfolioAPI } from "../../../api/api";
const Create = () => {
  const history = useNavigate();
  const [portfolioTitle, setPortfolioTitle] = useState("");
  const [portfolioText, setPortfolioText] = useState("");
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    await insertPortfolioAPI({ portfolioTitle, portfolioText });
    history(`${process.env.PUBLIC_URL}/hero_section/portfolio_section_list`, {
      replace: true,
    });
  };
  return (
    <>
      <Form
        className="theme-form"
        onSubmit={onHandleSubmit}
        method="post"
        encType="multipart/form-data"
      >
        <Row>
          <Col md="12">
            <FormGroup>
              <Label>{"Title"}</Label>
              <input
                placeholder="Title"
                className="form-control"
                name="title"
                value={portfolioTitle}
                onChange={(e) => setPortfolioTitle(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <FormGroup>
              <Label>{"Text"}</Label>
              <input
                placeholder="Text"
                className="form-control"
                name="text"
                value={portfolioText}
                onChange={(e) => setPortfolioText(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup className="mb-0">
              <Button type="submit" color="success">
                Submit
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Create;
