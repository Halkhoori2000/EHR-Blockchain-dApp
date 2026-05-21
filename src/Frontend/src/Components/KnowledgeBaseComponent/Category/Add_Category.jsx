import React, { Fragment, useContext, useEffect, useState } from "react";
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

import { useForm } from "react-hook-form";
import {
  insertKnowledgeCategory,
  updateKnowledgeCategory,
} from "../../../api/api";

function Add_Category() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const getUploadParams = ({ meta }) => {
    return {
      url: "https://httpbin.org/post",
    };
  };

  const [nameInCategory, setnameInCategory] = useState("");
  const [statusInCateg, setstatusInCateg] = useState("");
  const [serialNumCateg, setserialNumCateg] = useState();

  const saveCategory = async () => {
    const dataObj = {
      categoriespage_name: nameInCategory,
      categoriespage_status: statusInCateg,
      Categoriespage_serialnumber: serialNumCateg,
    };
    const res = await insertKnowledgeCategory(dataObj);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/knowledge/add_category_list`);
    } else {
      alert("Error");
    }
  };

  const updateUsefulLinkfunc = async (id) => {
    const dataObj = {
      categoriespage_name: nameInCategory,
      categoriespage_status: statusInCateg,
      Categoriespage_serialnumber: serialNumCateg,
    };
    const res = await updateKnowledgeCategory(id, dataObj);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/knowledge/add_category_list`);
    } else {
      alert("Error occured.");
    }
  };

  const populateCategoryData = () => {
    if (location.state) {
      setnameInCategory(location.state.dataObj.categoriespage_name);
      setstatusInCateg(location.state.dataObj.categoriespage_status);
      setserialNumCateg(location.state.dataObj.Categoriespage_serialnumber);
    }
  };

  useEffect(() => {
    populateCategoryData();
  }, []);

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {};
  return (
    <Fragment>
      <Breadcrumbs
        parent="Knowledge Base"
        title="Categories"
        mainTitle="Categories"
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
                      <FormGroup>
                        <Label>{"Name "}</Label>
                        <Input
                          onChange={(e) => setnameInCategory(e.target.value)}
                          value={nameInCategory}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label>{"Status"}</Label>
                        <Input
                          onChange={(e) => setstatusInCateg(e.target.value)}
                          value={statusInCateg}
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled selected>
                            {" "}
                            Select a status
                          </option>
                          <option>Active</option>
                          <option>Deactive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Serial Number"}</Label>
                        <input
                          onChange={(e) => setserialNumCateg(e.target.value)}
                          value={serialNumCateg}
                          className="form-control"
                          type="number"
                          name="rate"
                          defaultValue="10"
                          placeholder="Serial Number"
                          // {...register("rate", { required: true })}
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
                                location.state.dataObj.categoriespage_id
                              )
                            }
                            className="me-3"
                            color="success"
                          >
                            {"Update"}
                          </Button>
                        ) : (
                          <Button
                            onClick={saveCategory}
                            disabled={
                              nameInCategory &&
                              statusInCateg &&
                              serialNumCateg !== ""
                                ? false
                                : true
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

export default Add_Category;
