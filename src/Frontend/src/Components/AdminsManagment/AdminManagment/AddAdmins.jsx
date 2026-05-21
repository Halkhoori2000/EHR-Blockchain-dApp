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
import Dropzone from "react-dropzone-uploader";
import { insertAdminInfoInDb, updateAdminInfoInDb } from "../../../api/api";

function AddAdmins() {
  const navigate = useNavigate();
  const location = useLocation();
  const project = useContext(ProjectContext);

  const [usernameVal, setusernameVal] = useState("");
  const [emailVal, setemailVal] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastname, setlastname] = useState("");
  const [passwordVal, setpasswordVal] = useState("");
  const [reTypePassword, setreTypePassword] = useState("");
  const [roleVal, setroleVal] = useState("");
  const [imageVal, setimageVal] = useState(null);

  const saveAdminDataInDb = async () => {
    const formData = new FormData();

    formData.append("admin_username", usernameVal);
    formData.append("admin_email", emailVal);
    formData.append("admin_firstname", firstName);
    formData.append("amin_lastname", lastname);
    formData.append("admin_password", passwordVal);
    formData.append("admin_retypepassword", reTypePassword);
    formData.append("admin_role", roleVal);
    formData.append("admin_image", imageVal);

    const res = await insertAdminInfoInDb(formData);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/admin/admin_list`);
    } else {
      alert("Error");
    }
  };

  const updateAdminInfo = async (id) => {
    const formData = new FormData();

    formData.append("admin_username", usernameVal);
    formData.append("admin_email", emailVal);
    formData.append("admin_firstname", firstName);
    formData.append("admin_lastname", lastname);
    formData.append("admin_password", passwordVal);
    formData.append("admin_retypepassword", reTypePassword);
    formData.append("admin_role", roleVal);
    formData.append("admin_image", imageVal);

    const res = await updateAdminInfoInDb(id, formData);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/admin/admin_list`);
    } else {
      alert("Error occured.");
    }
  };

  const populateAdminInfo = () => {
    if (location.state) {
      setusernameVal(location.state.dataObj.admin_username);
      setemailVal(location.state.dataObj.admin_email);
      setfirstName(location.state.dataObj.admin_firstname);
      setlastname(location.state.dataObj.admin_lastname);
      setpasswordVal(location.state.dataObj.admin_password);
      setreTypePassword(location.state.dataObj.admin_retypepassword);
      setroleVal(location.state.dataObj.admin_role);
    }
  };

  useEffect(() => {
    populateAdminInfo();
  }, []);

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

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    setimageVal(file);
  };
  return (
    <Fragment>
      <Breadcrumbs
        parent="Admins Management"
        title="Admins"
        mainTitle="Admins"
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
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Username "}</Label>
                        <Input
                          onChange={(e) => setusernameVal(e.target.value)}
                          value={usernameVal}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Email  "}</Label>
                        <Input
                          onChange={(e) => setemailVal(e.target.value)}
                          value={emailVal}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"First Name "}</Label>
                        <Input
                          onChange={(e) => setfirstName(e.target.value)}
                          value={firstName}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Last Name"}</Label>
                        <Input
                          onChange={(e) => setlastname(e.target.value)}
                          value={lastname}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Password  "}</Label>
                        <Input
                          onChange={(e) => setpasswordVal(e.target.value)}
                          value={passwordVal}
                          type="password"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Re-type Password   "}</Label>
                        <Input
                          onChange={(e) => setreTypePassword(e.target.value)}
                          value={reTypePassword}
                          type="password"
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
                        <Label>{"Role"}</Label>
                        <Input
                          onChange={(e) => setroleVal(e.target.value)}
                          value={roleVal}
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled selected>
                            {" "}
                            Select a Role
                          </option>
                          <option>Active</option>
                          <option>Deactive</option>
                        </Input>
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
                              updateAdminInfo(location.state.dataObj.admin_id)
                            }
                            disabled={
                              usernameVal &&
                              emailVal &&
                              firstName &&
                              lastname &&
                              passwordVal &&
                              reTypePassword &&
                              roleVal !== "" &&
                              imageVal !== null
                                ? false
                                : true
                            }
                            className="me-3"
                            color="success"
                          >
                            {"Update"}
                          </Button>
                        ) : (
                          <Button
                            onClick={saveAdminDataInDb}
                            disabled={
                              usernameVal &&
                              emailVal &&
                              firstName &&
                              lastname &&
                              passwordVal &&
                              reTypePassword &&
                              roleVal !== "" &&
                              imageVal !== null
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

export default AddAdmins;
