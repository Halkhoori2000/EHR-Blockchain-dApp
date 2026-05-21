import React, { Fragment } from "react";
import { Breadcrumbs, H5 } from "../../AbstractElements";

import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import DataTable from "react-data-table-component";
import {Client_Columns ,Client_Data  } from "./Client_Data";
function Client_List() {
  return (
    <Fragment>
      <Breadcrumbs
        parent="Admins Management"
        title="Client Feedbacks"
        mainTitle="Feedbacks"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Feedbacks "}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={Client_Columns}
                    data={Client_Data}
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

export default Client_List;
