import React, { Fragment } from "react";
import { Breadcrumbs, H5 } from "../../../../AbstractElements";
import { ProductListDesc, SliderHeading } from "../../../../Constant";

import SliderTableData from "./SliderTableData";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

function SliderList() {
  return (
    <Fragment>
      <Breadcrumbs
        parent="Home Page"
        title="Slider List"
        mainTitle="Slider List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{SliderHeading}</H5>
                <span>{ProductListDesc}</span>
              </CardHeader>
              <CardBody>
                <SliderTableData />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default SliderList;
