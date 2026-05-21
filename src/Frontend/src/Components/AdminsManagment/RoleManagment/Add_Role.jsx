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
import { Breadcrumbs, Btn } from "../../../AbstractElements";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { insertRoleInDb, updateRoleInfo } from "../../../api/api";

function Add_Role() {
  const [roleName, setroleName] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const saveRoleName = async () => {
    const dataObj = {
      rolemanagement_name: roleName,
    };
    const res = await insertRoleInDb(dataObj);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/admin/role_list`);
    }
  };

  const updateRoleDatafunc = async (id) => {
    const dataObj = {
      rolemanagement_name: roleName,
    };
    const res = await updateRoleInfo(id, dataObj);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/admin/role_list`);
    } else {
      alert("Error occured.");
    }
  };

  const populateAddRoleData = () => {
    if (location.state) {
      setroleName(location.state.dataObj.rolemanagement_name);
    }
  };

  useEffect(() => {
    populateAddRoleData();
  }, []);

  return (
    <Fragment>
      <Breadcrumbs
        parent="Admins Management"
        title="Role Management"
        mainTitle="Role Management"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Form className="theme-form">
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Role Name"}</Label>
                        <Input
                          onChange={(e) => setroleName(e.target.value)}
                          value={roleName}
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
                        {location.state ? (
                          <Button
                            onClick={() =>
                              updateRoleDatafunc(
                                location.state.dataObj.rolemanagement_id
                              )
                            }
                            disabled={roleName !== "" ? false : true}
                            className="me-3"
                            color="success"
                          >
                            {"Update"}
                          </Button>
                        ) : (
                          <Button
                            onClick={saveRoleName}
                            disabled={roleName !== "" ? false : true}
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

export default Add_Role;
