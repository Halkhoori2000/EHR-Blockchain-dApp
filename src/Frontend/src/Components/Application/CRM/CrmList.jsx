import React, { Fragment } from "react";
import { Breadcrumbs, H5 } from "../../../AbstractElements";
import { ProductListDesc, SliderHeading } from "../../../Constant";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import DataTable from "react-data-table-component";
import { CRMColumns,CRMData } from "./CrmTableData";
function CrmList() {
  return (
    <Fragment>
      <Breadcrumbs parent="CRM" title="CRM List" mainTitle="CRM List" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{SliderHeading}</H5>
                <span>{ProductListDesc}</span>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={CRMColumns}
                    data={CRMData}
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

export default CrmList