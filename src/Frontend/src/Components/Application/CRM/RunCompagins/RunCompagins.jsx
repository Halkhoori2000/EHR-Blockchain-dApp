import React, { Fragment } from "react";
import {
  Col,
  Container,
  Row,
  Card,
  Form,
  Input,
  Label,
  FormGroup,
} from "reactstrap";
import { Breadcrumbs, Btn, H4, LI, UL } from "../../../../AbstractElements";
import CKEditor from "react-ckeditor-component";
function RunCompagins() {
  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Email Compose"
        parent="CRM"
        title="Email Compose"
      />
      <Container fluid={true}>
        <div className="email-wrap">
          <Row>
            <Col xl="12" md="12" className="xl-70 box-col-8">
              <div className="email-right-aside">
                <Card className="email-body">
                  <div className="email-profile">
                    <div className="email-body">
                      <div className="email-compose">
                        <div className="email-top compose-border">
                          <div className="compose-header">
                            <H4 attrH4={{ className: "mb-0" }}>New Message</H4>
                            <Btn
                              arrtBtn={{
                                className: "btn btn-primary",
                                type: "button",
                              }}
                            >
                              <i className="fa fa-file me-2"></i> save
                            </Btn>
                          </div>
                        </div>
                        <div className="email-wrapper">
                          <Form className="theme-form">
                            <div className="form-group">
                              <FormGroup>
                                <Label className="col-form-label pt-0">
                                  Select Campaign
                                </Label>
                                <Input
                                  type="select"
                                  name="progress_level"
                                  className="form-control digits"
                                  required
                                >
                                  <option value="25">{"25"}</option>
                                  <option value="50">{"50"}</option>
                                  <option value="70">{"70"}</option>
                                  <option value="100">{"100"}</option>
                                </Input>
                              </FormGroup>
                            </div>
                            <div className="form-group">
                              <FormGroup>
                                <Label className="col-form-label pt-0">
                                  Select Group
                                </Label>
                                <Input
                                  type="select"
                                  name="progress_level"
                                  className="form-control digits"
                                  required
                                >
                                  <option value="25">{"25"}</option>
                                  <option value="50">{"50"}</option>
                                  <option value="70">{"70"}</option>
                                  <option value="100">{"100"}</option>
                                </Input>
                              </FormGroup>
                            </div>
                            <div className="form-group">
                              <Label className="col-form-label pt-0">
                                Messages
                              </Label>
                              <CKEditor activeclassName="p10" />
                            </div>
                          </Form>
                          <div className="action-wrapper">
                            <UL
                              attrUL={{
                                className:
                                  "simple-list actions d-flex flex-row",
                              }}
                            >
                              <LI>
                                <a
                                  className="btn btn-secondary"
                                  href="#javascript"
                                >
                                  <i className="fa fa-paper-plane me-2"></i>Send
                                </a>
                              </LI>
                              <LI>
                                <a
                                  className="btn btn-danger"
                                  href="#javascript"
                                >
                                  <i className="fa fa-times me-2"></i>Cancel
                                </a>
                              </LI>
                            </UL>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
}

export default RunCompagins;
