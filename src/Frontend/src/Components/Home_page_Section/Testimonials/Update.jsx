import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Col, Form, FormGroup, Label, Row } from "reactstrap";
import { updateTestimonialsAPI } from "../../../api/api";

const Update = ({ listId }) => {
  const history = useNavigate();
  const [testimonialTitle, setTestimonialTitle] = useState("");
  const [testimonialText, setTestimonialText] = useState("");
  
  const thelocation = useLocation();
  const ifExists = thelocation.state;

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    await updateTestimonialsAPI(listId, { testimonialTitle, testimonialText });
    history(`${process.env.PUBLIC_URL}/hero_section/testimonials_list`, {
      replace: true,
    });
  };
  const populateData = () => {
    if (ifExists) {
      setTestimonialTitle(ifExists?.dataObj.testimonialsection_title);
      setTestimonialText(ifExists?.dataObj.testimonialsection_subtitle);
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
                name="testimonialsection_title"
                value={testimonialTitle}
                onChange={(e) => setTestimonialTitle(e.target.value)}
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
                name="testimonialsection_subtitle"
                value={testimonialText}
                onChange={(e) => setTestimonialText(e.target.value)}
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
