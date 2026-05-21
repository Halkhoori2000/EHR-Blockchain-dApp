import React, { Fragment, useContext, useState } from "react";
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
  CardHeader,
} from "reactstrap";

import { Breadcrumbs, Btn } from "../../../AbstractElements";
import { useNavigate, Link } from "react-router-dom";

function Plugins_Form() {
  return (
    <Fragment>
      <Breadcrumbs
        parent="Settings"
        title="Plugins"
        mainTitle="Plugins"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="4">
            <Card>
              <CardHeader>Facebook Login</CardHeader>
              <CardBody>
                <Form
                  className="theme-form"
                  // onSubmit={handleSubmit(AddProject)}
                >
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Status"}</Label>
                        <Input
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled> Select a Status</option>
                          <option selected>Active</option>
                          <option>Deactive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Facebook App ID"}</Label>
                        <Input
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Facebook App Secret"}</Label>
                        <Input
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card>
              <CardHeader>Google Login</CardHeader>
              <CardBody>
                <Form
                  className="theme-form"
                  // onSubmit={handleSubmit(AddProject)}
                >
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Status"}</Label>
                        <Input
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled> Select a Status</option>
                          <option selected>Active</option>
                          <option>DeActive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Google Client ID"}</Label>
                        <Input
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Google Client Secret"}</Label>
                        <Input
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card>
              <CardHeader>WhatsApp Chat Button</CardHeader>
              <CardBody>
                <Form
                  className="theme-form"
                  // onSubmit={handleSubmit(AddProject)}
                >
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Status"}</Label>
                        <Input
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled> Select a Status</option>
                          <option selected>Active</option>
                          <option>DeActive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"WhatsApp Number"}</Label>
                        <Input
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{" WhatsApp Header Title"}</Label>
                        <Input
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        <Label>{"WhatsApp Popup Message"}</Label>
                        <Input
                          type="textarea"
                          className="form-control"
                          placeholder=""
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* //!Secnd row */}
        <Row>
          <Col sm="4">
            <Card>
              <CardHeader>Tawk.to</CardHeader>
              <CardBody>
                <Form
                  className="theme-form"
                  // onSubmit={handleSubmit(AddProject)}
                >
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Tawk.to Status"}</Label>
                        <Input
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled> Select a Status</option>
                          <option selected>Active</option>
                          <option>Deactive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        <Label>{"Short Description"}</Label>
                        <Input
                          type="textarea"
                          className="form-control"
                          placeholder=""
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card>
              <CardHeader>Disqus</CardHeader>
              <CardBody>
                <Form
                  className="theme-form"
                  // onSubmit={handleSubmit(AddProject)}
                >
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Disqus Status "}</Label>
                        <Input
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled> Select a Status</option>
                          <option selected>Active</option>
                          <option>DeActive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        <Label>{"Disqus Script"}</Label>
                        <Input
                          type="textarea"
                          className="form-control"
                          placeholder=""
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card>
              <CardHeader>Google Analytics</CardHeader>
              <CardBody>
                <Form
                  className="theme-form"
                  // onSubmit={handleSubmit(AddProject)}
                >
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Google Analytics Status "}</Label>
                        <Input
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled> Select a Status</option>
                          <option selected>Active</option>
                          <option>DeActive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        <Label>{"Google Analytics Status"}</Label>
                        <Input
                          type="textarea"
                          className="form-control"
                          placeholder=""
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* //!third row */}

        <Row>
          <Col sm="4">
            <Card>
              <CardHeader>Appzi Feedback</CardHeader>
              <CardBody>
                <Form
                  className="theme-form"
                  // onSubmit={handleSubmit(AddProject)}
                >
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Appzi Feedback Status"}</Label>
                        <Input
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled> Select a Status</option>
                          <option selected>Active</option>
                          <option>Deactive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        <Label>{"Appzi Feedback Script"}</Label>
                        <Input
                          type="textarea"
                          className="form-control"
                          placeholder=""
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card>
              <CardHeader>AddThis Social Share</CardHeader>
              <CardBody>
                <Form
                  className="theme-form"
                  // onSubmit={handleSubmit(AddProject)}
                >
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"AddThis Status "}</Label>
                        <Input
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled> Select a Status</option>
                          <option selected>Active</option>
                          <option>DeActive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        <Label>{"AddThis Script"}</Label>
                        <Input
                          type="textarea"
                          className="form-control"
                          placeholder=""
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card>
              <CardHeader>Google Recaptcha</CardHeader>
              <CardBody>
                <Form
                  className="theme-form"
                  // onSubmit={handleSubmit(AddProject)}
                >
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Google Recaptcha Status "}</Label>
                        <Input
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled> Select a Status</option>
                          <option selected>Active</option>
                          <option>DeActive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Google Recaptcha Site key"}</Label>
                        <Input
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Google Recaptcha Secret key"}</Label>
                        <Input
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* //!fourth roe */}
        <Row>
          <Col sm="4">
            <Card>
              <CardHeader>Facebook Pexel</CardHeader>
              <CardBody>
                <Form
                  className="theme-form"
                  // onSubmit={handleSubmit(AddProject)}
                >
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Facebook Pexel Status"}</Label>
                        <Input
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled> Select a Status</option>
                          <option selected>Active</option>
                          <option>Deactive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        <Label>{"Facebook Pexel Script"}</Label>
                        <Input
                          type="textarea"
                          className="form-control"
                          placeholder=""
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup className="mb-0">
              {/* <Link to={`/social_links_list`}> */}
              <Btn attrBtn={{ color: "success", className: "me-3" }}>
                {"Update"}
              </Btn>
              {/* </Link> */}
            </FormGroup>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Plugins_Form;
