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
import { useForm } from "react-hook-form";
import Dropzone from "react-dropzone-uploader";
import {
  insertServiceCategory,
  updateServiceCategory,
} from "../../../api/api";

function Category() {
  const navigate = useNavigate();
  const location = useLocation();
  const project = useContext(ProjectContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [nameState, setnameState] = useState("");
  const [sortText, setsortText] = useState("");
  const [statusVal, setstatusVal] = useState("");
  const [serialVal, setserialVal] = useState("");
  const [imageFile, setimageFile] = useState("");

  const saveCategories = async () => {
    const formData = new FormData();

    formData.append("categorysection_name", nameState);
    formData.append("categorysection_sorttext", sortText);
    formData.append("categorysection_status", statusVal);
    formData.append("categorysection_serialnumber", serialVal);
    formData.append("Categorysection_image", imageFile);

    const res = await insertServiceCategory(formData);
    console.log(formData)
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/hero_section/category_link_list`);
    } else {
      alert("Error");
    }
  };

  const updateCategoryInfo = async (id) => {
    const formData = new FormData();
    formData.append("categorysection_name", nameState);
    formData.append("categorysection_sorttext", sortText);
    formData.append("categorysection_status", statusVal);
    formData.append("categorysection_serialnumber", serialVal);
    formData.append("Categorysection_image", imageFile);

    const res = await updateServiceCategory(id, formData);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/hero_section/category_link_list`);
    } else {
      alert("Error occured.");
    }
  };

  const populateCategoryItem = () => {
    if (location.state) {
      setnameState(location.state.dataObj.categorysection_name);
      setsortText(location.state.dataObj.categorysection_sorttext);
      setstatusVal(location.state.dataObj.categorysection_status);
      setserialVal(location.state.dataObj.categorysection_serialnumber);
    }
  };

  useEffect(() => {
    populateCategoryItem();
  }, []);

  const getUploadParams = ({ meta }) => {
    return {
      url: "https://httpbin.org/post",
    };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    setimageFile(file);
  };
  return (
    <Fragment>
      <Breadcrumbs
        parent="Services"
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
                >
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Name "}</Label>
                        <Input
                          onChange={(e) => setnameState(e.target.value)}
                          value={nameState}
                          type="text"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Sort Text"}</Label>
                        <Input
                          onChange={(e) => setsortText(e.target.value)}
                          value={sortText}
                          type="text"
                          placeholder="Sort Text"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>{"Status"}</Label>
                        <Input
                          onChange={(e) => setstatusVal(e.target.value)}
                          value={statusVal}
                          type="select"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option>Select a status</option>
                          <option>Active</option>
                          <option>Deactive</option>
                        </Input>
                      </FormGroup>  
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Serial Number"}</Label>
                        <input
                          onChange={(e) => setserialVal(e.target.value)}
                          value={serialVal}
                          className="form-control"
                          type="number"
                          placeholder="Serial Number"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{"Image "}</Label>
                        <Dropzone
                          getUploadParams={getUploadParams}
                          onChangeStatus={handleChangeStatus}
                          maxFiles={1}
                          multiple={false}
                          canCancel={false}
                          inputContent="Drop A File"
                          styles={{
                            dropzone: { width: "100%", height: 50 },
                            dropzoneActive: { borderColor: "green" },
                          }}
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
                              updateCategoryInfo(
                                location.state.dataObj.categorysection_id
                              )
                            }
                            className="me-3"
                            color="success"
                          >
                            {"Update"}
                          </Button>
                        ) : (
                          <Button
                            onClick={saveCategories}
                            disabled={
                              nameState &&
                              sortText &&
                              statusVal !== "" &&
                              serialVal &&
                              imageFile !== null
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

export default Category;
