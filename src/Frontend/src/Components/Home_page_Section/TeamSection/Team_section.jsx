import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import { useLocation } from "react-router-dom";

import Update from "./Update";
import Create from "./Create";

function Team_section() {
  const [listId, setListId] = useState(null);
  const thelocation = useLocation();
  const ifExists = thelocation.state;

  useEffect(() => {
    if (ifExists) {
      const id = ifExists?.dataObj;
      setListId(id?.teamsection_id);
    }
  }, [ifExists]);

  // console.log(listId);
  return (
    <Fragment>
      <Breadcrumbs
        parent="Home Page  Section"
        title="Team Section"
        mainTitle="Team Section"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                {listId ? <Update listId={listId} /> : <Create />}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Team_section;
