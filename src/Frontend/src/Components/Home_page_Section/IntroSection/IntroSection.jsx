import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import { useLocation } from "react-router-dom";
import UpdateIntro from "./UpdateIntro";
import CreateIntro from "./CreateIntro";

function IntroSection() {
  const [listId, setListId] = useState(null);
  const thelocation = useLocation();
  const ifExists = thelocation.state;

  useEffect(() => {
    if (ifExists) {
      const id = ifExists?.dataObj;
      setListId(id?.introsection_id);
    }
  }, [ifExists]);
  console.log(listId, 'introid')
  return (
    <Fragment>
      <Breadcrumbs
        parent="Home Page Section"
        title="Intro Section"
        mainTitle="Intro Section"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                {listId ? <UpdateIntro listId={listId} /> : <CreateIntro/>}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default IntroSection;
