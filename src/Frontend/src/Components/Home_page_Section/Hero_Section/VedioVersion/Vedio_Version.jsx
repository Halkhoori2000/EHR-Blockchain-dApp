import React, { Fragment, useContext, useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";
import { Breadcrumbs } from "../../../../AbstractElements";
import { useLocation } from "react-router-dom";

import Update from "./Update";
import Create from "./Create";
function Vedio_Version() {
  const [listId, setListId] = useState();
  const thelocation = useLocation();
  const ifExists = thelocation.state;

  useEffect(() => {
    if (ifExists) {
      const id = ifExists?.dataObj;
      setListId(id?.videoversionslider_id);
    }
  }, [ifExists]);
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
                {listId ? <Update listId={listId} /> : <Create/>}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Vedio_Version;
