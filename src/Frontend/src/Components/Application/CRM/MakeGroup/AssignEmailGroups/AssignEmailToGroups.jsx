import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { Breadcrumbs } from "../../../../../AbstractElements";
import MailContainData from "./MailContainData";

function AssignEmailToGroups() {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Assign Email" parent="CRM" title="Email App" />
      <Container fluid={true}>
        <div className="email-wrap">
          <Row>
            <Col xl="12" md="12" className="xl-70 box-col-12">
              <MailContainData />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
}

export default AssignEmailToGroups;
