import React, { Fragment, useContext, useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import ProjectContext from "../../../_helper/Project";
import { Breadcrumbs, Btn } from "../../../AbstractElements";
import { useNavigate, Link, useLocation } from "react-router-dom";
import axios from "axios";

import { useForm } from "react-hook-form";
import { insertUsefulLinks, updateUsefulLink } from "../../../api/api";

function Useful_Link() {
  const navigate = useNavigate();
  const project = useContext(ProjectContext);
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [nameState, setnameState] = useState("");
  const [urlState, seturlState] = useState("");

  const sendtodb = async () => {
    const dataObj = {
      usefullinksection_name: nameState,
      usefullinksection_url: urlState,
    };
    const res = await insertUsefulLinks(dataObj);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/hero_section/useful_link_list`);
    } else {
      alert("Error occured");
    }
  };

  const updateUsefulLinkfunc = async (id) => {
    const dataObj = {
      usefullinksection_name: nameState,
      usefullinksection_url: urlState,
    };
    const res = await updateUsefulLink(id, dataObj);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/hero_section/useful_link_list`);
    } else {
      alert("Error occured.");
    }
  };

  const populateData = () => {
    if (location.state) {
      setnameState(location.state.dataObj.usefullinksection_name);
      seturlState(location.state.dataObj.usefullinksection_url);
    }
  };

  useEffect(() => {
    populateData();
  }, []);

  return (
    <Fragment>
      <Breadcrumbs
        parent="Footer"
        title="Useful Links"
        mainTitle="Useful Links"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Form
                  className="theme-form"
                  // onSubmit={handleSubmit(AddProject)}
                >
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label>{"Name"}</Label>
                        <Input
                          onChange={(e) => setnameState(e.target.value)}
                          value={nameState}
                          type="text"
                          placeholder="Name"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label>{"URL"}</Label>
                        <Input
                          onChange={(e) => seturlState(e.target.value)}
                          value={urlState}
                          type="text"
                          placeholder="URL"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        {location.state ? (
                          <Button
                            onClick={() =>
                              updateUsefulLinkfunc(
                                location.state.dataObj.usefullinksection_id
                              )
                            }
                            className="me-3"
                            color="success"
                          >
                            {"Update"}
                          </Button>
                        ) : (
                          <Button
                            onClick={sendtodb}
                            disabled={
                              nameState && urlState !== "" ? false : true
                            }
                            className="me-3"
                            color="success"
                          >
                            {"Submit"}
                          </Button>
                        )}
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Useful_Link;
