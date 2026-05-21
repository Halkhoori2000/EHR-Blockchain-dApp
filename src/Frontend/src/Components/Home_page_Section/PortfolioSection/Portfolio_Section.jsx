import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";

import Create from "./Create";
import Update from "./Update";

function Portfolio_Section() {
  const [listId, setListId] = useState(null);
  const thelocation = useLocation();
  const ifExists = thelocation.state;

  useEffect(() => {
    if (ifExists) {
      const id = ifExists?.dataObj;
      setListId(id?.portfoliosection_id);
    }
  }, [ifExists]);

  console.log(listId);
  return (
    <Fragment>
      <Breadcrumbs
        parent="Home Page  Section"
        title="Portfolio Section"
        mainTitle="Portfolio Section"
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

export default Portfolio_Section;
