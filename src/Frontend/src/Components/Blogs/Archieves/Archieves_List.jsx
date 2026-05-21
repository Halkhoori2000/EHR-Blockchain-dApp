import React, { Fragment } from "react";
import { Breadcrumbs, H5 } from "../../../AbstractElements";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import DataTable from "react-data-table-component";
import { Archieve_Columns, Archieve_Data } from "./Archieve_Data";

function Archieves_List() {
  return (
    <Fragment>
      <Breadcrumbs
        parent="Blogs"
        title="Archieve  List"
        mainTitle="Archieve List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Archieve  List"}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={Archieve_Columns}
                    data={Archieve_Data}
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

export default Archieves_List;
