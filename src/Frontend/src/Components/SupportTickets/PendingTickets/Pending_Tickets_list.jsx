import React, { Fragment } from "react";
import { Breadcrumbs, H5 } from "../../../AbstractElements";

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  Input,
} from "reactstrap";
import DataTable from "react-data-table-component";

import { Link, useNavigate } from "react-router-dom";

function Pending_Tickets_list() {
  const history = useNavigate();
  return (
    <Fragment>
      <Breadcrumbs
        parent="Support Ticket"
        title="Pending Tickets"
        mainTitle="Pending Tickets"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Pending Tickets "}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={[
                      {
                        name: "Ticket Number ",
                        selector: (row) => row.TicketNumber,
                        sortable: true,
                        center: true,
                        wrap: true,
                      },
                      {
                        name: "Username",
                        selector: (row) => row.Username,
                        sortable: true,
                        center: true,
                      },
                      {
                        name: "Email",
                        selector: (row) => row.Email,
                        sortable: true,
                        center: true,
                      },
                      {
                        name: "Subject",
                        selector: (row) => row.Subject,
                        sortable: true,
                        center: true,
                      },
                      {
                        name: "Status",
                        selector: (row) => row.Status,
                        sortable: true,
                        center: true,
                      },

                      {
                        name: "Action",
                        selector: (row) => row.action,
                        sortable: true,
                        center: true,
                      },
                    ]}
                    data={[
                      {
                        TicketNumber: "#1254568",
                        Username: (
                          <div>
                            <span>Interchargebla lens Digital</span>
                          </div>
                        ),
                        Email: "$10",

                        Subject: "something",
                        Status: "Pending",
                        action: (
                          <div>
                            <span>
                              {/* <Link to={`${process.env.PUBLIC_URL}/hero_section/add_knowledge`}> */}
                              <Input
                                type="select"
                                name="issues"
                                placeholder="Select Issues"
                                className="form-control digits"
                                required
                                onChange={(event) => {
                                  history(
                                    `${process.env.PUBLIC_URL}/hero_section/${event.target.value}`
                                  );
                                }}
                              >
                                <option disabled>Actions</option>

                                <option value={"pending_ticketss"} selected>
                                  Pending
                                </option>

                                <option value={"open_ticketss"}>Open</option>

                                <option value={"closed_ticketss"}>
                                  Closed
                                </option>
                              </Input>
                            </span>
                          </div>
                        ),
                      },
                    ]}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Pending_Tickets_list;
