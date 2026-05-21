import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Row, Col, Form, FormGroup, Label, Button } from "reactstrap";
import { updatePortfolioAPI } from "../../../api/api";

const Update = ({ listId }) => {
  const history = useNavigate();
  const [portfolioTitle, setPortfolioTitle] = useState("");
  const [portfolioText, setPortfolioText] = useState("");

  const thelocation = useLocation();
  const ifExists = thelocation.state;

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    await updatePortfolioAPI(listId, { portfolioTitle, portfolioText });
    history(`${process.env.PUBLIC_URL}/hero_section/portfolio_section_list`, {
      replace: true,
    });
  };
  const populateData = () => {
    if (ifExists) {
      setPortfolioTitle(ifExists?.dataObj.portfoliosection_title);
      setPortfolioText(ifExists?.dataObj.portfoliosection_text);
    }
  };

  useEffect(() => {
    populateData();
  }, []);
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
                Update
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Update;
