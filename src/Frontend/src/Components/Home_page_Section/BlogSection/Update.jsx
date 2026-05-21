import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Col, Form, FormGroup, Label, Row } from "reactstrap";
import { updateBlogAPI } from "../../../api/api";

const Update = ({listId}) => {
  const history = useNavigate();
  const [blogTitle, setBlogTitle] = useState("");
  const [blogText, setBlogText] = useState("");

  const thelocation = useLocation();
  const ifExists = thelocation.state;

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    await updateBlogAPI(listId, { blogTitle, blogText });
    history(`${process.env.PUBLIC_URL}/hero_section/blog_section_list`, {
      replace: true,
    });
  };
  const populateData = () => {
    if (ifExists) {
      setBlogTitle(ifExists?.dataObj.blogsection_title);
      setBlogText(ifExists?.dataObj.blogsection_text);
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
                name="blog_title"
                value={blogTitle}
                onChange={(e) => setBlogTitle(e.target.value)}
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
                name="blog_subtitle"
                value={blogText}
                onChange={(e) => setBlogText(e.target.value)}
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
