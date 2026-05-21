import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Col, Form, FormGroup, Label, Row } from "reactstrap";
import { updateServiceSectionApI } from "../../../api/api";
const Update = ({ listId }) => {
  const [servicetitle, setServiceTitle] = useState("");
  const [serviceSubTitle, setServiceSubTitle] = useState("");
  const history = useNavigate();

  const thelocation = useLocation();
  const ifExists = thelocation.state;

  // console.log(ifExists)


  const onHandleSubmit = async (e) => {
    e.preventDefault();
    await updateServiceSectionApI(listId, { servicetitle, serviceSubTitle });

    history(`${process.env.PUBLIC_URL}/hero_section/service_section_list`, {
      replace: true,
    });
  };
  const populateData = () => {
    if (ifExists) {
      setServiceTitle(ifExists?.dataObj.servicesection_title);
      setServiceSubTitle(ifExists?.dataObj.servicesection_subtitle);
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
                type={"text"}
                name={"servicesection_title"}
                placeholder={"Title"}
                className="form-control"
                value={servicetitle}
                onChange={(e) => setServiceTitle(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <FormGroup>
              <Label>{"Subtitle"}</Label>
              <input
                type={"text"}
                placeholder="SubTitle"
                name="servicesection_subtitle"
                value={serviceSubTitle}
                className="form-control"
                onChange={(e) => setServiceSubTitle(e.target.value)}
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
