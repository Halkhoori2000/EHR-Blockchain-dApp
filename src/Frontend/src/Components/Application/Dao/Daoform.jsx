import React, { Fragment, useContext } from "react";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
} from "reactstrap";
import ProjectContext from "../../../_helper/Project";
import { Breadcrumbs, Btn } from "../../../AbstractElements";
import Daofields from "./Daofields";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { Add, Cancel } from "../../../Constant";
function Daoform() {
  const history = useNavigate();
  const project = useContext(ProjectContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const AddProject = (data) => {
    if (data !== "") {
      project.addNewProject(data);
      history(`${process.env.PUBLIC_URL}/app/project/project-list`);
    } else {
      errors.showMessages();
    }
  };
  return (
    <Fragment>
      <Breadcrumbs parent="Dao" title="Add Dao Data" mainTitle="Add Dao Data" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Form
                  className="theme-form"
                  onSubmit={handleSubmit(AddProject)}
                >
                  <Daofields register={register} errors={errors} />

                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        {/* <Link to={"/dashboard/crewlist"}> */}
                        <Btn attrBtn={{ color: "success", className: "me-3" }}>
                          {Add}
                        </Btn>
                        {/* </Link> */}

                        <Link
                          to={`${process.env.PUBLIC_URL}/app/project/project-list`}
                        >
                          <Btn attrBtn={{ color: "danger" }}>{Cancel}</Btn>
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

export default Daoform;
