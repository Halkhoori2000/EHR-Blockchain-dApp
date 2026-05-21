import React, { Fragment } from "react";
import { Container, Row } from "reactstrap";
import { Breadcrumbs, LI, UL, Btn } from "../../../../AbstractElements";
import { Card, CardBody, Col } from "reactstrap";
import HeaderCard from "../../../Common/Component/HeaderCard";
function ViewEmails() {
  return (
    <Fragment>
      <Breadcrumbs parent="Ui Kits" title="Lists" mainTitle="Lists" />
      <Container fluid={true} className="ui-list">
        <Row>
          <Col sm="12" xl="12">
            <Card>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  marginRight: "2%",
                }}
              >
                <HeaderCard title="Emails" />
                <Btn
                  arrtBtn={{
                    className: "btn btn-primary",
                    type: "button",
                  }}
                >
                  <i className="fa fa-file me-2"></i> save
                </Btn>
              </div>
              <CardBody>
                <UL>
                  <LI>{"Cras justo odio"}</LI>
                  <LI>{"Dapibus ac facilisis in"}</LI>
                  <LI>{"Morbi leo risus"}</LI>
                  <LI>{"Porta ac consectetur ac"}</LI>
                  <LI>{"Vestibulum at eros"}</LI>
                </UL>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default ViewEmails;
