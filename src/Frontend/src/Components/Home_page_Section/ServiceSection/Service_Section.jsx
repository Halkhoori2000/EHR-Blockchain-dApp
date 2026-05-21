import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import CreateData from "./CreateData";
import Update from "./Update";

const Service_Section = () => {
  const [listId, setListId] = useState(null);
  const thelocation = useLocation();
  const ifExists = thelocation.state;

  useEffect(() => {
    if (ifExists) {
      const id = ifExists?.dataObj;
      setListId(id?.servicesection_id);
    }
  }, [ifExists]);

  console.log(listId, 'service')

  return (
    <>
      <Breadcrumbs
        parent="Home Page  Section"
        title="Service Section"
        mainTitle="Service Section"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                {listId ? <Update listId={listId} /> : <CreateData/>}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Service_Section;
