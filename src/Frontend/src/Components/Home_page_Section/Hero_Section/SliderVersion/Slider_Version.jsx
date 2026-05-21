import React, { Fragment, useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
} from "reactstrap";
import { Breadcrumbs } from "../../../../AbstractElements";
import { useLocation } from "react-router-dom";
import Create from "./Create";
import Update from "./Update";

function Slider_Version() {
  const [listId, setListId] = useState();
  const thelocation = useLocation();
  const ifExists = thelocation.state;

  useEffect(() => {
    if (ifExists) {
      const id = ifExists?.dataObj;
      setListId(id?.sliderversionslider_id);
    }
  }, [ifExists]);
console.log(listId)
  return (
    <Fragment>
      <Breadcrumbs
        parent="Hero Section"
        title="Slider Version"
        mainTitle="Slider Version"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                {listId ? <Update {...listId} /> : <Create/>}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Slider_Version;
