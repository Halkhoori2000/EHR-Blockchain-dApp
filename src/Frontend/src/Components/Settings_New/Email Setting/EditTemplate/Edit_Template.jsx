import React, { Fragment } from "react";
import { Breadcrumbs, H5 } from "../../../../AbstractElements";

import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import DataTable from "react-data-table-component";
import { Edit_Columns, Edit_Data } from "./Edit_Template_data";
function Edit_Template() {
  return (
    <Fragment>
      <Breadcrumbs
        parent="Email Settings"
        title="Email Templates"
        mainTitle="Email Templates"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Email Templates "}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={Edit_Columns}
                    data={Edit_Data}
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

export default Edit_Template;
