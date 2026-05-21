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
} from "reactstrap";
import ProjectContext from "../../../_helper/Project";
import { Breadcrumbs, Btn } from "../../../AbstractElements";
import { useNavigate, Link } from "react-router-dom";

function Archieves() {
  return (
    <Fragment>
      <Breadcrumbs
        parent="Blogs"
        title=" Add Archive"
        mainTitle=" Add Archive"
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
                    <Col md={"12"}>
                      <FormGroup className="row">
                        <Label>{"Date"}</Label>

                        <Input
                          className="form-control digits"
                          type="month"
                          defaultValue="2022-01"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        <Link
                          to={`${process.env.PUBLIC_URL}/hero_section/archieve_list`}
                        >
                          <Btn
                            attrBtn={{ color: "success", className: "me-3" }}
                          >
                            {"Submit"}
                          </Btn>
                        </Link>
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

export default Archieves;
