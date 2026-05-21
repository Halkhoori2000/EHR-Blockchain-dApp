import React, { Fragment, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Row
} from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import RolesTable from "./RolesTable";

const ManageRoles = () => {
  const [records, setRecords] = useState([
    { name: "Employee", members: 0, isTable: false },
    { name: "Client", members: 0, isTable: false },
    { name: "HR", members: 0, isTable: false },
  ]);

  return (
    <>
      <Fragment>
        <Breadcrumbs
          mainTitle="Roles & Permissions"
          parent="Settings"
          title="Roles & Permissions"
        />
        <Container fluid={true}>
          <Row>
            <Col sm="12">
              <Card>
                <CardBody>
                  <div className="d-flex align-items-center">
                    <Button type="button" color="success" className="py-2 px-3">
                      <i className="fa fa-edit"></i> <span>Manage Roles</span>
                    </Button>
                  </div>
                  <div className="d-grid align-items-center gap-3 mt-4">
                    {records.length ? (
                      records?.map((val, i) => (
                        <>
                          <ul
                            key={i}
                            className="w-100 border"
                            style={{ borderRadius: "0.345rem" }}
                          >
                            <li className="px-3 py-2">
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="d-grid align-items-center">
                                  <h1 className="fs-5 m-0 text-dark fw-normal">
                                    {val.name}
                                  </h1>
                                  <p className="m-0 text-muted">
                                    {val.members} Members
                                  </p>
                                </div>
                                <div className="d-grid align-items-center">
                                  <Button
                                    type="button"
                                    color="dark"
                                    outline
                                    className="px-2"
                                    onClick={() => {
                                      let values = [...records];
                                      // console.log(values);
                                      const newArray = values.map(
                                        (item, index) => {
                                          if (i === index) {
                                            if (item.isTable === true) {
                                              return {
                                                name: item.name,
                                                isTable: false,
                                              };
                                            } else {
                                              return {
                                                name: item.name,
                                                isTable: true,
                                              };
                                            }
                                          } else {
                                            return {
                                              name: item.name,
                                              isTable: false,
                                            };
                                          }
                                        }
                                      );
                                      setRecords(newArray);
                                    }}
                                  >
                                    <i className="fa fa-key me-1"></i>
                                    {""}
                                    <span>Permissions</span>
                                  </Button>
                                </div>
                              </div>
                            </li>
                          </ul>
                          {val.isTable === true ? <RolesTable /> : null}
                        </>
                      ))
                    ) : (
                      <div className="d-flex align-items-center justify-content-center">
                        <h5 className="text-dark fw-normal m-0">
                          There is nothing to display!
                        </h5>
                      </div>
                    )}
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    </>
  );
};

export default ManageRoles;
